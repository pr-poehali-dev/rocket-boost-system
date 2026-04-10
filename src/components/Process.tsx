import { useEffect, useRef, useState } from "react"

const tasks = [
  {
    number: "01",
    title: "Монета подброшена 6 раз",
    condition: "Найти вероятность того, что орёл выпадет ровно 4 раза.",
    given: "n = 6, k = 4, p = 0,5, q = 0,5",
    solution: "P₆(4) = C⁴₆ · (0,5)⁴ · (0,5)² = 15 · 0,0625 · 0,25",
    answer: "P₆(4) = 0,234",
  },
  {
    number: "02",
    title: "Стрелок делает 5 выстрелов",
    condition: "Вероятность попадания — 0,8. Найти вероятность ровно 3 попаданий.",
    given: "n = 5, k = 3, p = 0,8, q = 0,2",
    solution: "P₅(3) = C³₅ · (0,8)³ · (0,2)² = 10 · 0,512 · 0,04",
    answer: "P₅(3) = 0,205",
  },
  {
    number: "03",
    title: "Контроль качества продукции",
    condition: "Брак составляет 10%. Проверено 7 изделий. Найти вероятность, что среди них ровно 2 бракованных.",
    given: "n = 7, k = 2, p = 0,1, q = 0,9",
    solution: "P₇(2) = C²₇ · (0,1)² · (0,9)⁵ = 21 · 0,01 · 0,590",
    answer: "P₇(2) ≈ 0,124",
  },
  {
    number: "04",
    title: "Тест из 10 вопросов",
    condition: "Каждый вопрос имеет 4 варианта, один верный. Найти вероятность угадать ровно 3 правильных ответа.",
    given: "n = 10, k = 3, p = 0,25, q = 0,75",
    solution: "P₁₀(3) = C³₁₀ · (0,25)³ · (0,75)⁷ = 120 · 0,0156 · 0,1335",
    answer: "P₁₀(3) ≈ 0,250",
  },
]

export function Process() {
  const [isVisible, setIsVisible] = useState(false)
  const [openTask, setOpenTask] = useState<number | null>(null)
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
    <section ref={sectionRef} id="tasks" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <p className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                Практика
              </p>
              <h2 className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Разбор<br />
                <span className="italic">задач</span>
              </h2>
              <p className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                Нажмите на задачу, чтобы увидеть подробное решение с подстановкой в формулу Бернулли.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {tasks.map((task, index) => (
                <div
                  key={task.number}
                  className={`border-t border-border last:border-b transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <button
                    className="w-full text-left py-8 lg:py-10 flex gap-8 lg:gap-12 group"
                    onClick={() => setOpenTask(openTask === index ? null : index)}
                  >
                    <span className="font-serif text-4xl lg:text-5xl text-stone/40 group-hover:text-sage transition-colors duration-500 flex-shrink-0">
                      {task.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="font-serif text-xl md:text-2xl text-foreground">{task.title}</h3>
                        <svg
                          className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${openTask === index ? "rotate-180" : ""}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{task.condition}</p>
                    </div>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ${openTask === index ? "max-h-96 pb-8" : "max-h-0"}`}>
                    <div className="ml-20 lg:ml-28 space-y-4">
                      <div className="bg-sand/50 p-5 border-l-2 border-sage">
                        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Дано</p>
                        <p className="text-foreground font-mono text-sm">{task.given}</p>
                      </div>
                      <div className="bg-sand/50 p-5 border-l-2 border-terracotta">
                        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Решение</p>
                        <p className="text-foreground font-mono text-sm">{task.solution}</p>
                      </div>
                      <div className="bg-sage/10 p-5 border-l-2 border-sage">
                        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Ответ</p>
                        <p className="text-foreground font-serif text-lg font-medium">{task.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
