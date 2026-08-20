import React from 'react'
import { cn } from '@/lib/utils'

type RowProps = React.PropsWithChildren<{
    className?: string;
}>

export default function Row(props: RowProps) {
  return (
    <div className={cn('flex gap-4', props.className)}>
        {props.children}
    </div>
  )
}