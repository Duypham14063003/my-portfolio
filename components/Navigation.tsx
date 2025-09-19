// components/navbar.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import ColourfulText from "./ui/colourful-text";

export function Navbar() {
  return (
    <nav className=" w-full border-b shadow-sm text-white bg-black fixed z-50 opacity-65">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600"></Link>

        {/* Menu */}
        <NavigationMenu className="">
          <NavigationMenuList className="hidden md:flex gap-6">
            <NavigationMenuItem>
              <Link
                href="/"
                className="hover:text-gray-500 transition-colors duration-300 ease-in-out  font-semibold "
              >
                Trang chủ
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/about"
                className="hover:text-gray-500 transition-colors duration-300 ease-in-out  font-semibold"
              >
                Giới thiệu
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/services"
                className="hover:text-gray-500 transition-colors duration-300 ease-in-out  font-semibold"
              >
                Dịch vụ
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/contact"
                className="hover:text-gray-500 transition-colors duration-300 ease-in-out font-semibold"
              >
                Liên hệ
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button asChild>
          <Link href="/login">Đăng nhập</Link>
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
