import { STATUS_META, type DevStatus } from '@/lib/data'
import { cn } from '@/lib/utils'

export function StatusBadge({ status, className }: { status: DevStatus; className?: string }) {
  const meta = STATUS_META[status]
  const Icon = meta.icon
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-2.5 py-1 text-xs font-medium backdrop-blur',
        className,
      )}
    >
      <Icon className={cn('size-3.5', meta.color)} aria-hidden />
      <span className={meta.color}>{meta.label}</span>
    </span>
  )
}
