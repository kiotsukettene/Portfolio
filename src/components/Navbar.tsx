"use client";

import {
  Navbar as NavbarWrapper,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";

interface NavbarProps {
  firstName?: string;
}

export default function Navbar({ firstName }: NavbarProps) {
  const navItems = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Experience",
      link: "#experience",
    },
    {
      name: "Projects",
      link: "#projects",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const displayName = firstName ? `${firstName} ` : "Portfolio";

  return (
    <NavbarWrapper>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo name={displayName} />
        <NavItems items={navItems} />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo name={displayName} />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                const targetId = item.link.replace("#", "");
                const element = document.getElementById(targetId);
                
                if (element) {
                  const offset = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.scrollY - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
                
                setIsMobileMenuOpen(false);
              }}
              className="relative text-neutral-600 dark:text-neutral-300 text-lg font-medium cursor-pointer"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </NavbarWrapper>
  );
}

