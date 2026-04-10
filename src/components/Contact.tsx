import { useEffect, useRef, useState } from "react"

export function Contact() {
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

  const steps = [
    { step: "1", title: "Определить n, p, q", desc: "Найти число испытаний n и вероятности p (успех) и q = 1 − p (неудача)." },
    { step: "2", title: "Вычислить C^k_n", desc: "Биномиальный коэффициент: C^k_n = n! / (k! · (n−k)!)" },
    { step: "3", title: "Подставить в формулу", desc: "P_n(k) = C^k_n · p^k · q^(n−k)" },
    { step: "4", title: "Вычислить результат", desc: "Перемножить все три множителя и получить искомую вероятность." },
  ]

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 lg:px-12 bg-sand/40">
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">Алгоритм решения</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
            Как решать задачи
          </h2>
        </div>

        <div className="space-y-0">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`flex gap-8 lg:gap-12 py-8 border-t border-border last:border-b transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <span className="font-serif text-5xl text-stone/30 flex-shrink-0">{item.step}</span>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
