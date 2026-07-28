import { Archivo_Black } from "next/font/google";

import { Great_Vibes } from "next/font/google";

import { Inter } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Saira } from "next/font/google";

export const saira = Saira({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
});

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});
export const inter = Inter({
  subsets: ["latin"],
});
export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});