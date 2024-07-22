import { cn } from '@/lib/utils'

export const GradientText = ({
  children,
  className,
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        'text-transparent bg-clip-text bg-gradient-to-r from-[#6048e7] to-[#56d49e]',
        className
      )}
    >
      {children}
    </span>
  )
}
