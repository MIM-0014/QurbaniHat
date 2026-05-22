import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-20">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">QurbaniHat</h2>
          <p className="text-sm text-gray-200">
            A modern livestock booking platform for Qurbani animals.
            Find healthy cows and goats easily and book with confidence.
          </p>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact Info</h2>
          <p className="text-sm">📍 Kaliganj, Dhaka, Bangladesh</p>
          <p className="text-sm">📞 +880 1XXXXXXXXX</p>
          <p className="text-sm">✉ support@qurbanihat.com</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>

          <div className="flex gap-4 text-xl">
            <Link href="#">
              <FaFacebook className="hover:text-blue-400" />
            </Link>
            <Link href="#">
              <FaGithub className="hover:text-gray-300" />
            </Link>
            <Link href="#">
              <FaInstagram className="hover:text-pink-400" />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 border-t border-green-700 text-sm">
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </div>
    </footer>
  );
}