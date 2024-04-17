import "@/app/global.css";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import { ThemeProvider } from "./contexts/ThemeContext";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
