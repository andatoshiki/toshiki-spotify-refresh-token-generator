export const metadata = {
  title: "Welcome · Spotify Refresh Token Generator",
};
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function WelcomePage() {
  return (
  <div className="w-full h-full flex-1 flex items-center justify-center mt-8 sm:mt-12 px-4 sm:px-0">
      <Card className="max-w-xl w-full">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome to Spotify Refresh Token Generator</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-6">
          <h2 className="text-muted-foreground text-lg text-center">
            Get your Spotify Refresh Token in a few steps
          </h2>
          <Link
            href="/dashboard"
            className="bg-primary text-primary-foreground px-6 py-2 rounded font-bold hover:bg-primary/90 transition"
          >
            Get Started
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
