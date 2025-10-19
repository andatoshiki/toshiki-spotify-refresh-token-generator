"use client";

import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";

const scopesOptions = [
  "ugc-image-upload",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
  "playlist-read-private",
  "user-read-playback-position",
  "user-read-recently-played",
  "user-top-read",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-private",
  "user-read-email",
  "user-library-modify",
  "user-library-read",
  "user-follow-modify",
  "user-follow-read",
  "streaming",
  "app-remote-control",
];

export const metadata = {
  alternates: {
    canonical: "https://spotify.tosh1ki.de/info"
  }
};

export default function SpotifyAuthForm() {
  const [clientId, setClientId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [redirectUri, setRedirectUri] = useState("");
  const [scopes, setScopes] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRedirectUri(window.location.origin + "/info");

      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      if (code) {
        window.history.replaceState({}, "", window.location.pathname);

        const clientIdLS = localStorage.getItem("clientId") || "";
        const clientSecretLS = localStorage.getItem("clientSecret") || "";
        const redirectUriLS = localStorage.getItem("redirectUri") || "";

        const data = {
          client_id: clientIdLS,
          client_secret: clientSecretLS,
          grant_type: "authorization_code",
          redirect_uri: redirectUriLS,
          code,
        };

        const formBody = Object.entries(data)
          .map(
            ([key, value]) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
          )
          .join("&");

        fetch("https://accounts.spotify.com/api/token", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formBody,
        })
          .then((res) => (res.ok ? res.json() : Promise.reject(res)))
          .then((json) => {
            if (json.refresh_token) {
              setRefreshToken(json.refresh_token);
              setModalOpen(true);
            } else {
              setError("Failed to get refresh token. Please try again.");
            }
          })
          .catch(() =>
            setError("Failed to get refresh token. Please try again.")
          );

        localStorage.clear();
      }
    }
  }, []);

  const handleScopeChange = (scope: string, checked: boolean) => {
    setScopes((prev) =>
      checked ? [...prev, scope] : prev.filter((s) => s !== scope)
    );
  };

  // Select All logic
  const allSelected = scopes.length === scopesOptions.length;
  const handleSelectAll = (checked: boolean) => {
    setScopes(checked ? [...scopesOptions] : []);
  };

  const handleGetAccessCode = () => {
    if (!clientId || !clientSecret || !redirectUri || scopes.length === 0) return;

    let url = "https://accounts.spotify.com/authorize";
    url += "?response_type=code";
    url += `&client_id=${encodeURIComponent(clientId)}`;
    url += `&scope=${encodeURIComponent(scopes.join(" "))}`;
    url += `&redirect_uri=${encodeURIComponent(redirectUri)}`;

    localStorage.setItem("clientId", clientId);
    localStorage.setItem("clientSecret", clientSecret);
    localStorage.setItem("redirectUri", redirectUri);
    localStorage.setItem("scopes", scopes.join(" "));

    window.location.href = url;
  };

  return (
    <>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogTitle>Here&apos;s your Spotify Refresh Token</DialogTitle>
          <DialogDescription>
            Save this refresh token in a safe, private place. This token will last
            for a very long time and can be used to generate a new{" "}
            <code>access_token</code> whenever it is needed.
          </DialogDescription>

          <pre className="w-full rounded bg-muted text-foreground p-3 font-mono text-sm mt-2 overflow-x-auto select-all border">
            <code>{refreshToken}</code>
          </pre>

          <button
            className="bg-primary text-primary-foreground px-6 py-2 rounded font-bold hover:bg-primary/90 transition mt-2"
            onClick={() => {
              navigator.clipboard.writeText(refreshToken);
              toast.success("Refresh token copied to clipboard!");
            }}
          >
            Copy Refresh Token to Clipboard
          </button>

          <DialogClose asChild>
            <button className="mt-4 underline text-primary">Close</button>
          </DialogClose>
        </DialogContent>
      </Dialog>

  <div className="w-full h-full flex-1 flex items-center justify-center py-12 px-4 sm:px-0">
        <Card className="max-w-xl w-full">
          <CardHeader>
            <CardTitle className="text-2xl">
              Enter your Spotify App Settings Data
            </CardTitle>
            <CardDescription>
              Fill in your Spotify app credentials and select the required scopes.
            </CardDescription>
          </CardHeader>

          <CardContent>
            {error && (
              <div className="text-destructive text-center mb-4">{error}</div>
            )}

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                handleGetAccessCode();
              }}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="clientId">Client ID</label>
                <input
                  id="clientId"
                  type="text"
                  className="border rounded px-2 py-1 bg-background"
                  value={clientId}
                  onChange={(e) => setClientId(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="clientSecret">Client Secret</label>
                <input
                  id="clientSecret"
                  type="password"
                  className="border rounded px-2 py-1 bg-background"
                  value={clientSecret}
                  onChange={(e) => setClientSecret(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="redirectUri">Redirect URI</label>
                <input
                  id="redirectUri"
                  type="text"
                  className="border rounded px-2 py-1 bg-background"
                  value={redirectUri}
                  onChange={(e) => setRedirectUri(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Scopes</span>
                <label className="flex items-center gap-2 mb-1">
                  <Checkbox
                    checked={allSelected}
                    onCheckedChange={handleSelectAll}
                  />
                  <span className="font-medium">Select All</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {scopesOptions.map((scope) => (
                    <label key={scope} className="flex items-center gap-2">
                      <Checkbox
                        checked={scopes.includes(scope)}
                        onCheckedChange={(checked) =>
                          handleScopeChange(scope, !!checked)
                        }
                      />
                      <span>{scope}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground px-6 py-2 rounded font-bold hover:bg-primary/90 transition mt-4"
              >
                Get Spotify Access Code
              </button>

              <Link
                href="/dashboard"
                className="text-primary underline hover:opacity-80 text-center"
              >
                Go Back
              </Link>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
