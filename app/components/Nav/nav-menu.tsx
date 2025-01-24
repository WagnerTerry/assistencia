"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-30">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-8">
        <Link
          href="#"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Home
        </Link>
        <Link
          href="#servicos"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Serviços
        </Link>
        <Link
          href="#duvidas"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Dúvidas
        </Link>
        <Link
          href="#sobre"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Sobre nós
        </Link>
        <Link
          href="#contato"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Contato
        </Link>
      </nav>

      {/* Mobile Menu */}
      <nav
        className={cn(
          "absolute right-0 top-full mt-2 w-48 py-2 bg-zinc-900 rounded-lg shadow-lg md:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <Link
          href="#"
          className="block px-4 py-2 text-white hover:bg-zinc-800 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="#servicos"
          className="block px-4 py-2 text-white hover:bg-zinc-800 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Serviços
        </Link>
        <Link
          href="#duvidas"
          className="block px-4 py-2 text-white hover:bg-zinc-800 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Dúvidas
        </Link>
        <Link
          href="#sobre"
          className="block px-4 py-2 text-white hover:bg-zinc-800 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Sobre nós
        </Link>
        <Link
          href="#contato"
          className="block px-4 py-2 text-white hover:bg-zinc-800 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Contato
        </Link>
      </nav>
    </div>
  );
}
