import type React from "react";
import { useEffect, useRef, useState } from "react";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    function handleClickOutside(ev: MouseEvent) {
      if(
        menuRef.current &&
        !menuRef.current.contains(ev.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(ev.target as Node)
      ) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="bg-primary-300">
      <div className="max-w-custon-width mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className=" shrink-0 font-bold text-3xl text-amber-950 flex ">Coffee</a>
          </div>

          <div className="hidden md:block">
            <div className="ml:10 flex items-baseline space-x-8 transition duration-300">
              <a href="#home" className="md-link">Home</a>
              <a href="#menu" className="md-link">Cardápio</a>
              <a href="#about-us" className="md-link">Sobre Nós</a>
              <a href="#contact" className="md-link">Contato</a>
            </div>
          </div>

          <div className="mr-2 flex md:hidden">
            <button ref={buttonRef} onClick={() => setMenuOpen(!menuOpen)} id="button" type="button" className={`inline-flex items-center justify-center p-2 rounded-md hover:bg-amber-900/15 focus:outline-none ${menuOpen ? "bg-amber-950/15" : ""} transition duration-300 ease-in-out`} aria-label="Menu" aria-expanded="false">
              <img src="/menus.png" alt="" className="size-6"/>
            </button>
          </div>
        </div>
      </div>

      <div id="menu" ref={menuRef} className={`
        md:hidden overflow-hidden
        transition-all duration-700 ease-in-out
        ${menuOpen
          ? "max-h-60 opacity-100 translate-y-0"
          : "max-h-0 opacity-0 -translate-y-2"}
      `}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a href="#home" onClick={() => setMenuOpen(false)} className="sm-link">Home</a>
          <a href="#menu" onClick={() => setMenuOpen(false)} className="sm-link">Cardápio</a>
          <a href="#about-us" onClick={() => setMenuOpen(false)} className="sm-link">Sobre Nós</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="sm-link">Contato</a>
        </div>
      </div>
    </nav>
  )
}