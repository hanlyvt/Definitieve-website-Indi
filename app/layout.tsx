import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Indi Janssen",
  description: "Designer-Model-Artist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <nav className="fixed top-8 right-12 z-30">
          <ul className="flex flex-col space-y-4 text-xl font-bold">
            <li>
              <Link href="/" className="hover:opacity-70">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:opacity-70">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:opacity-70">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:opacity-70">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
