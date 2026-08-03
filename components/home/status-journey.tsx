import { STATUS_META, type DevStatus } from '@/lib/data'

const order: { status: DevStatus; blurb: string }[] = [
  { status: 'Concept', blurb: 'A spark of an idea, shared early for feedback.' },
  { status: 'Prototype', blurb: 'First playable build. Rough, raw, and full of promise.' },
  { status: 'Playable', blurb: 'A real loop players can enjoy and vote on.' },
  { status: 'Growing', blurb: 'A thriving community and steady stream of updates.' },
  { status: 'Legendary', blurb: 'A polished, beloved game that made it.' },
]

export function StatusJourney() {
  return (
    <div className="rounded-3xl border border-border bg-card/50 p-6 sm:p-10">
      <div className="relative grid gap-6 md:grid-cols-5">
        <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-brand-purple via-brand-blue to-brand-gold md:block" />
        {order.map((step, i) => {
          const meta = STATUS_META[step.status]
          const Icon = meta.icon
          return (
            <div key={step.status} className="relative flex flex-col items-center text-center">
              <div className="z-10 flex size-14 items-center justify-center rounded-2xl border border-border bg-secondary">
                <Icon className={`size-6 ${meta.color}`} />
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Stage {i + 1}
              </div>
              <div className={`mt-1 font-display text-lg font-bold ${meta.color}`}>
                {meta.label}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.blurb}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
