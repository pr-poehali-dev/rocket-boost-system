import { useEffect, useRef, useState } from "react"

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="formula" className="py-24 lg:py-32 px-6 lg:px-12 bg-sand/40">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">Математика</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
            Формула Бернулли
          </h2>
        </div>

        {/* Основная формула */}
        <div className={`bg-background border border-border p-10 lg:p-16 text-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">Вероятность ровно k успехов в n испытаниях</p>
          <div className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
            P<sub className="text-2xl">n</sub>(k) = C<sup className="text-2xl">k</sup><sub className="text-2xl">n</sub> · p<sup className="text-2xl">k</sup> · q<sup className="text-2xl">n−k</sup>
          </div>
          <div className="w-16 h-px bg-border mx-auto mb-8" />
          <p className="text-muted-foreground text-lg">
            где q = 1 − p
          </p>
        </div>

        {/* Расшифровка переменных */}
        <div className={`grid md:grid-cols-2 gap-px bg-border transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { symbol: "n", desc: "Общее число испытаний" },
            { symbol: "k", desc: "Число успехов (0 ≤ k ≤ n)" },
            { symbol: "p", desc: "Вероятность успеха в одном испытании" },
            { symbol: "q = 1 − p", desc: "Вероятность неудачи в одном испытании" },
            { symbol: "Cⁿₖ", desc: "Биномиальный коэффициент: n! / (k! · (n−k)!)", full: true },
          ].map((item, i) => (
            <div key={i} className={`bg-background p-8 ${item.full ? "md:col-span-2" : ""}`}>
              <p className="font-serif text-3xl text-sage mb-3">{item.symbol}</p>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Частные случаи */}
        <div className={`mt-12 grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="border border-border p-6">
            <p className="text-xs tracking-[0.2em] uppercase text-terracotta mb-3">При k = 0</p>
            <p className="font-serif text-xl text-foreground mb-2">P<sub>n</sub>(0) = qⁿ</p>
            <p className="text-sm text-muted-foreground">Ни одного успеха</p>
          </div>
          <div className="border border-border p-6">
            <p className="text-xs tracking-[0.2em] uppercase text-terracotta mb-3">При k = n</p>
            <p className="font-serif text-xl text-foreground mb-2">P<sub>n</sub>(n) = pⁿ</p>
            <p className="text-sm text-muted-foreground">Все n испытаний — успех</p>
          </div>
          <div className="border border-border p-6">
            <p className="text-xs tracking-[0.2em] uppercase text-terracotta mb-3">Наиболее вероятное k</p>
            <p className="font-serif text-xl text-foreground mb-2">np − q ≤ k₀ ≤ np + p</p>
            <p className="text-sm text-muted-foreground">Мода биномиального распределения</p>
          </div>
        </div>
      </div>
    </section>
  )
}
