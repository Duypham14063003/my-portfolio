// components/footer.tsx
"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-gray-950 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm text-gray-500">© 2025 PhamNgocDuy</p>

        <div className="flex gap-4 mt-3 md:mt-0">
          <Link
            href="/privacy"
            className="text-sm text-gray-500 hover:text-blue-500"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-gray-500 hover:text-blue-500"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
