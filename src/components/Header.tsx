import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import { navLinks } from "../data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  const mainLinks = navLinks.filter((l) => l.to !== "/contact");

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <Link to="/" className="group flex items-center gap-3" aria-label="Yélian David BOURAIMA — accueil">
          <span className="grid h-9 w-9 place-items-center bg-ink font-serif text-[15px] font-medium text-paper">
            YB
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-serif text-[17px] font-medium">Yélian David BOURAIMA</span>
            <span className="block font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
              Journaliste reporter d'image
            </span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {mainLinks.map((link) =>
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
            `relative whitespace-nowrap py-1 text-[14px] transition-colors duration-150 ${
            isActive ? "text-ink" : "text-muted hover:text-ink"}`

            }>
            
              {({ isActive }) =>
            <>
                  {link.label}
                  {isActive && <span className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-accent" />}
                </>
            }
            </NavLink>
          )}
          <Link
            to="/contact"
            className="whitespace-nowrap rounded-full bg-ink px-8 py-[0.9375rem] text-[14px] font-medium text-paper transition-colors duration-150 hover:bg-accent">
            
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}>
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open &&
        <motion.nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="border-t border-rule bg-paper lg:hidden">
          
            <ul className="mx-auto max-w-7xl px-5 py-4 md:px-10">
              {navLinks.map((link) =>
            <li key={link.to} className="border-b border-rule last:border-0">
                  <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                `flex items-center justify-between py-3.5 font-serif text-2xl ${
                isActive ? "text-accent" : "text-ink"}`

                }>
                
                    {link.label}
                  </NavLink>
                </li>
            )}
            </ul>
          </motion.nav>
        }
      </AnimatePresence>
    </header>);

}