import { Ebook } from "@/types";
import { EbookView } from "@/views";
import { Metadata } from "next";

const API_URL = "https://dev.valbury.co.id/api";

export const revalidate = 60;
export const dynamicParams = true;

export const metadata: Metadata = {
  title: "Ebook Belajar Trading Forex Gratis | Valbury Asia Futures",
  description:
    "Belajar trading forex dari pemula sampai mahir dengan ebook trading gratis dari Valbury Asia Futures. Kenali apa itu forex, analisa fundamental, analisa teknikal dan cara manajemen resiko.",
  keywords: "Belajar Forex, Tutorial Trading",
  applicationName: "Valbury",
};

export default async function Page() {
  const ebooks: Ebook[] = await fetch(`${API_URL}/ebooks`).then((res) =>
    res.json()
  );

  return <EbookView ebooks={ebooks} />;
}
