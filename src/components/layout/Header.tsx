"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo.webp";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react";
import NavStrip from "@/components/layout/NavStrip";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="sticky w-full bg-white top-0 z-50 flex flex-col">
      <div className="bg-primary py-3 px-3 md:px-5 w-full">
        <div className="flex items-center justify-start">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/shop-by-age" className="text-lg font-medium">
                    Shop by age
                  </Link>
                  <Link
                    href="/shop-by-category"
                    className="text-lg font-medium"
                  >
                    Shop by category
                  </Link>
                  <Link href="/combos" className="text-lg font-medium">
                    Combos
                  </Link>
                  <Link href="/deals" className="text-lg font-medium">
                    Deals and Discounts
                  </Link>
                  <Link href="/support" className="text-lg font-medium">
                    Support
                  </Link>
                  <Link href="/parents" className="text-lg font-medium">
                    Parents and Educators
                  </Link>
                  <Link href="/blog" className="text-lg font-medium">
                    Blog
                  </Link>
                  <Link href="/about" className="text-lg font-medium">
                    About us
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-32">
              <Image
                src={Logo}
                alt="PlayShifu"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 mx-4">
            <form
              onSubmit={handleSearch}
              className="relative w-full max-w-xl mx-auto"
            >
              <Input
                type="text"
                placeholder="Search for PlayShifu Toys"
                className="rounded-full pr-10 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                type="submit"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
              >
                <div className="p-1 rounded-full bg-secondary">
                  <Search className="h-4 w-4 text-white" />
                </div>
              </Button>
            </form>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-2 gap-5 text-sm w-full lg:w-auto justify-end md:justify-start font-medium text-secondary">
            <Link className="flex items-center space-x-2" href="/wishlist">
              <Heart className="h-4 w-4 text-secondary" />
              <span className="text-secondary hidden md:block">Wishlist</span>
            </Link>
            <Link className="flex items-center space-x-2" href="/signin">
              <User className="h-4 w-4 text-secondary-color" />
              <span className="text-secondary hidden md:block">Sign in</span>
            </Link>
            <Link className="flex items-center space-x-2" href="/cart">
              <ShoppingCart className="h-4 w-4 text-secondary-color" />
              <span className="text-secondary hidden md:block">Cart</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="text"
              placeholder="Search PlayShifu Toys"
              className="rounded-full pr-10 bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              type="submit"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
      <NavStrip />
    </header>
  );
}
