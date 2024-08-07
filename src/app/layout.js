import "./globals.css";
import { DM_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";

const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Lexie909",
  description: "Discover Our Exclusive Collection of Premium Furniture",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'https://static.vecteezy.com/system/resources/previews/018/796/672/original/vintage-typewriter-alphabet-letter-l-free-png.png',
        href: 'https://static.vecteezy.com/system/resources/previews/018/796/672/original/vintage-typewriter-alphabet-letter-l-free-png.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'https://static.vecteezy.com/system/resources/previews/018/796/672/original/vintage-typewriter-alphabet-letter-l-free-png.png',
        href: 'https://static.vecteezy.com/system/resources/previews/018/796/672/original/vintage-typewriter-alphabet-letter-l-free-png.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
