import { useEffect, useRef, useState } from "react"

export function Philosophy() {
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
    <section ref={sectionRef} id="theory" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Определения */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">Определения</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] text-foreground mb-10 text-balance">
              Что такое<br />
              <span className="italic">испытание Бернулли?</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div className="border-l-2 border-sage pl-6">
                <p className="text-foreground font-medium mb-1">Испытание Бернулли</p>
                <p>Случайный эксперимент, имеющий ровно два возможных исхода: <em className="text-foreground">«успех»</em> (вероятность p) и <em className="text-foreground">«неудача»</em> (вероятность q = 1 − p).</p>
              </div>
              <div className="border-l-2 border-sage pl-6">
                <p className="text-foreground font-medium mb-1">Схема Бернулли</p>
                <p>Последовательность из <em className="text-foreground">n</em> независимых испытаний, в каждом из которых вероятность успеха постоянна и равна <em className="text-foreground">p</em>.</p>
              </div>
              <div className="border-l-2 border-sage pl-6">
                <p className="text-foreground font-medium mb-1">Независимость испытаний</p>
                <p>Результат каждого испытания не влияет на результаты остальных — это ключевое условие применимости формулы.</p>
              </div>
            </div>
          </div>

          {/* Условия применимости */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">Условия применимости</p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-[1.1] text-foreground mb-10">
              Когда применять<br />
              <span className="italic">схему Бернулли?</span>
            </h2>

            <div className="space-y-4">
              {[
                { num: "1", text: "Фиксированное число испытаний n" },
                { num: "2", text: "Только два исхода в каждом испытании" },
                { num: "3", text: "Вероятность успеха p постоянна" },
                { num: "4", text: "Испытания независимы друг от друга" },
              ].map((item) => (
                <div key={item.num} className="flex gap-5 items-start py-4 border-b border-border last:border-0">
                  <span className="font-serif text-3xl text-stone/40">{item.num}</span>
                  <p className="text-foreground leading-relaxed pt-1">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
