import { useEffect, useRef, useState } from "react"

export function Testimonial() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="summary" className="py-24 lg:py-32 px-6 lg:px-12 bg-sage">
      <div className="max-w-5xl mx-auto text-center">
        <div className={`mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">Итог</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground mb-4">
            Ключевые выводы
          </h2>
        </div>

        <div className={`grid md:grid-cols-3 gap-px bg-primary-foreground/20 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {[
            { label: "Применяется при", value: "n независимых испытаниях" },
            { label: "Обязательное условие", value: "p = const для каждого испытания" },
            { label: "Результат", value: "P(k) — точная вероятность" },
          ].map((item) => (
            <div key={item.label} className="bg-sage p-8">
              <p className="text-sm text-primary-foreground/60 mb-2">{item.label}</p>
              <p className="font-serif text-xl text-primary-foreground">{item.value}</p>
            </div>
          ))}
        </div>

        <blockquote className={`font-serif text-2xl md:text-3xl lg:text-4xl font-light text-primary-foreground leading-relaxed text-balance transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          «Схема Бернулли — основа биномиального распределения и один из фундаментальных инструментов теории вероятностей»
        </blockquote>

        <div className={`mt-10 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-sm tracking-widest uppercase text-primary-foreground/70">Якоб Бернулли</p>
          <p className="text-sm text-primary-foreground/50 mt-1">«Ars Conjectandi», 1713</p>
        </div>
      </div>
    </section>
  )
}
