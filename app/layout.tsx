import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import MouseGlow from "./components/MouseGlow";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prajwolgyawali.vercel.app"),

  title: "Prajwol Gyawali | BSc CSIT Student & Developer",
  description:
    "I am a 17-year-old BSc CSIT undergraduate student, artist, and web developer from Bardiya, Nepal. Explore my projects and background.",

  openGraph: {
    title: "Prajwol Gyawali | Portfolio",
    description:
      "I am a 17-year-old BSc CSIT undergraduate student, artist, and web developer from Bardiya, Nepal.",
    url: "https://prajwolgyawali.vercel.app",
    siteName: "Prajwol Gyawali",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Prajwol Gyawali Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Prajwol Gyawali | Portfolio",
    description:
      "I am a 17-year-old BSc CSIT undergraduate student, artist, and web developer from Bardiya, Nepal.",
    images: ["/images/profile.jpeg"],
  },
};