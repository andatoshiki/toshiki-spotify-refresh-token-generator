
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();


  useEffect(() => {
    function handleVisibilityChange() {
      if (document.visibilityState === "visible" && localStorage.getItem("visitedSpotifyDashboard")) {
        localStorage.removeItem("visitedSpotifyDashboard");
        router.replace("/info");
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange);
    // Also check immediately in case of reload
    if (typeof window !== "undefined" && localStorage.getItem("visitedSpotifyDashboard")) {
      localStorage.removeItem("visitedSpotifyDashboard");
      router.replace("/info");
    }
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [router]);

  const handleOpenDashboard = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("visitedSpotifyDashboard", "1");
    }
    window.open("https://developer.spotify.com/dashboard/applications", "_blank");
  };

  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    setRedirectUrl(window.location.origin + "/info");
  }, []);

  return (
    <div className="w-full h-full flex-1 flex items-center justify-center mt-8 sm:mt-12 px-4 sm:px-0">
      <Card className="max-w-xl w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Get your Spotify App Settings Data</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 items-center">
          <p className="text-muted-foreground text-left">
            Visit your Spotify Developers Dashboard then select or create your app.<br />
            Note down your <b>Client ID</b>, <b>Client Secret</b> to use in next step,<br />
            and set the Redirect URI to{' '}
            <code className="px-1 py-0.5 rounded bg-muted font-mono text-sm dashboard-url">
              {redirectUrl || "http://localhost:3000/info"}
            </code>.
          </p>
          <button
            type="button"
            onClick={handleOpenDashboard}
            className="bg-primary text-primary-foreground px-6 py-2 rounded font-bold hover:bg-primary/90 transition"
          >
            Click to Open
          </button>
          <Link
            href="/info"
            className="text-primary underline hover:opacity-80"
          >
            Already got the required data? Skip this step
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
