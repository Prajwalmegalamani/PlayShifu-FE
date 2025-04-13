import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Book,
  Map,
  Code,
  GraduationCap,
  ShoppingCart,
  Percent,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavStrip() {
  return (
    <nav className="hidden lg:flex justify-center w-full items-center align-middle gap-5 py-3 text-gray-500 bg-white">
      <ul className="flex justify-center items-center align-middle gap-5 text-sm">
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-amber-800 flex items-center gap-2">
              <Book className="w-4 h-4" />
              <span>Shop by age</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/shop-by-age/0-4" className="w-full">
                  0-4 yrs
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/shop-by-age/4-6" className="w-full">
                  4-6 yrs
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/shop-by-age/6-8" className="w-full">
                  6-8 yrs
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/shop-by-age/8-10" className="w-full">
                  8-10 yrs
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/shop-by-age/10+" className="w-full">
                  10+ yrs
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger className="hover:text-amber-800 flex items-center gap-2">
              <Map className="w-4 h-4" />
              <span>Shop by category</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link
                  href="/shop-by-category/problem-solving"
                  className="w-full"
                >
                  Problem Solving
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/shop-by-category/geography" className="w-full">
                  Geography
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/shop-by-category/coding" className="w-full">
                  Coding
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/shop-by-category/stem" className="w-full">
                  STEM
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/shop-by-category/language-numbers"
                  className="w-full"
                >
                  Language & Numbers
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <Link
            href="/combos"
            className="hover:text-amber-800 flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Combos</span>
          </Link>
        </li>
        <li>
          <Link
            href="/deals"
            className="hover:text-amber-800 flex items-center gap-2"
          >
            <Percent className="w-4 h-4" />
            <span>Deals and Discounts</span>
          </Link>
        </li>
        <li>
          <Link
            href="/support"
            className="hover:text-amber-800 flex items-center gap-2"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Support</span>
          </Link>
        </li>
        <li>
          <Link href="/parents" className="hover:text-amber-800">
            Parents and Educators
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-amber-800">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-amber-800">
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
