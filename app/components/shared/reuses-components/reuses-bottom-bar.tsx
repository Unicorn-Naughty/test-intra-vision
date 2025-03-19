import React from 'react';
interface Props {
 className?: string 
}

export const ReusesBottomBar: React.FC<Props> = () => {
  return (
    <div className={`bg-[#d1e0ed] uppercase text-center py-5`} >
        Just a FOOTER
    </div>
  )
}
