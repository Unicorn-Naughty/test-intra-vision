import { cn } from '@/lib/utils';
import React from 'react';
interface Props {
 className?: string 
 text: string
}

export const Button: React.FC<Props> = ({ className,text }) => {
  return (
    <button className={cn("rounded-[22px] bg-[#008cf0] cursor-pointer text-white transition hover:opacity-80",className)} >
        {text}
    </button>
  )
}

