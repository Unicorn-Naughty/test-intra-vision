import { cn } from '@/lib/utils';
import React from 'react';
interface Props {
 className?: string 
}

export const ReusesBottomBar: React.FC<Props> = ({className}) => {
  return (
    <div className={cn(`bg-[#d1e0ed] uppercase text-center py-5`,className)} >
        Just a FOOTER
    </div>
  )
}
