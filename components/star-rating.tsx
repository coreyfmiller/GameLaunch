import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function StarRating({
  value,
  size = 14,
  showValue = false,
  className,
}: {
  value: number
  size?: number
  showValue?: boolean
  className?: string
}) {
  return (
    <span className={cn('inline-flex items-center gap-1', className)}>
      <span className="flex">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i + 1 <= Math.round(value)
          return (
            <Star
              key={i}
              style={{ width: size, height: size }}
              className={cn(filled ? 'fill-brand-gold text-brand-gold' : 'fill-muted text-muted')}
            />
          )
        })}
      </span>
      {showValue && <span className="text-sm font-medium text-foreground">{value.toFixed(1)}</span>}
    </span>
  )
}
