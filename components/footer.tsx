import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function Footer() {
  return (
    <footer className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className={`text-lg font-bold ${montserrat.className}`}>
              Contact
            </h3>
            <ul className="space-y-2">
              <li>info@indijanssen.com</li>
              <li>+31 6 12345678</li>
              <li>Amsterdam, Netherlands</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className={`text-lg font-bold ${montserrat.className}`}>
              Social
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:opacity-70">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-70">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-70">
                  Pinterest
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className={`text-lg font-bold ${montserrat.className}`}>
              Navigation
            </h3>
            <ul className="space-y-2">
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
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className={`text-lg font-bold ${montserrat.className}`}>
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:opacity-70">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-70">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:opacity-70">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Indi Janssen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
