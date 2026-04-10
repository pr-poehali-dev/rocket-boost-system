import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="font-serif text-xl tracking-wide text-foreground">
            Теория вероятностей
          </a>

          <div className="hidden md:flex items-center gap-10">
            <a href="#theory" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
              Теория
            </a>
            <a href="#formula" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
              Формула
            </a>
            <a href="#tasks" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
              Задачи
            </a>
            <a href="#summary" className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
              Вывод
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Открыть меню"
          >
            <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? "max-h-64 pb-6" : "max-h-0"}`}>
          <div className="flex flex-col gap-5 pt-4">
            {["theory", "formula", "tasks", "summary"].map((id, i) => (
              <a key={id} href={`#${id}`} onClick={() => setIsMenuOpen(false)}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
                {["Теория", "Формула", "Задачи", "Вывод"][i]}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
