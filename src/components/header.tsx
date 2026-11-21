"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Brand, navigation } from "./site";

export function Header() {
  const pathname = usePathname();
  const [openAt, setOpenAt] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const open = openAt === pathname;

  return (
    <header className="header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) {
        setOpenAt(null);
        menuButton.current?.focus();
      }
    }}>
      <div className="wrap header-inner">
        <Brand />
        <button type="button" className="menu-toggle" ref={menuButton} aria-controls="main-navigation"
          aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpenAt(open ? null : pathname)}>
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav id="main-navigation" aria-label="Main navigation" className={open ? "navigation open" : "navigation"}>
          {navigation.map(({ href, label }) => {
            const isCurrent = pathname.replace(/\/$/, "") === href.replace(/\/$/, "");
            return <Link key={href} className="nav-link" aria-current={isCurrent ? "page" : undefined}
              onClick={() => setOpenAt(null)} href={href}>{label}</Link>;
          })}
          <Link className="button button-dark mobile-action" href="/contact/" onClick={() => setOpenAt(null)}>Request a consultation</Link>
        </nav>
        <Link className="button button-dark header-action" href="/contact/">Request a consultation</Link>
      </div>
    </header>
  );
}
