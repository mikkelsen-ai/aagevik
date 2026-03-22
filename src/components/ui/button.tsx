import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6b2e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f6f2] disabled:pointer-events-none disabled:opacity-50 active:scale-95',
  {
    variants: {
      variant: {
        default:
          'bg-[#1e6ec8] text-white hover:bg-[#185db0] shadow-[0_2px_12px_rgba(30,110,200,0.35)] hover:shadow-[0_4px_20px_rgba(30,110,200,0.55)]',
        green:
          'bg-[#1e6ec8] text-white hover:bg-[#185db0] shadow-[0_2px_12px_rgba(30,110,200,0.35)] hover:shadow-[0_4px_20px_rgba(30,110,200,0.55)]',
        outline:
          'border border-[#2d6b2e] text-[#2d6b2e] hover:bg-[#2d6b2e]/10 active:bg-[#2d6b2e]/20',
        'outline-light':
          'border border-[#f2efe9]/40 text-[#f2efe9] hover:bg-[#f2efe9]/10 active:bg-[#f2efe9]/20',
        ghost:
          'text-[#1a2b1a] hover:bg-[#cce0cc]/50 active:bg-[#cce0cc]',
        secondary:
          'bg-[#edf5ed] text-[#1a2b1a] hover:bg-[#cce0cc] active:bg-[#b8d4b8]',
      },
      size: {
        default: 'h-10 px-5 py-2.5',
        sm:      'h-8 px-4 py-2 text-xs',
        lg:      'h-12 px-7 py-3 text-base',
        xl:      'h-14 px-8 py-4 text-lg',
        icon:    'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
