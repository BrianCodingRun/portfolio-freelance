import { cn } from '@/lib/utils'
import React from 'react'

export default function Grid(props: React.PropsWithChildren<{className?: string}>) {
  return (
    <div className={cn('grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8', props.className)}>
      {props.children}
    </div>
  )
}
