export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="font-serif text-xl tracking-wide text-foreground mb-1">Испытания Бернулли</p>
            <p className="text-sm text-muted-foreground">Теория вероятностей · Учебная презентация</p>
          </div>

          <nav className="flex gap-8">
            {[
              { href: "#theory", label: "Теория" },
              { href: "#formula", label: "Формула" },
              { href: "#tasks", label: "Задачи" },
              { href: "#summary", label: "Вывод" },
            ].map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-sage transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">
            P<sub>n</sub>(k) = C<sup>k</sup><sub>n</sub> · p<sup>k</sup> · q<sup>n−k</sup>
          </p>
          <p className="text-xs text-muted-foreground">Якоб Бернулли · 1713</p>
        </div>
      </div>
    </footer>
  )
}
