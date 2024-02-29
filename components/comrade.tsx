import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Comrade = () => {
  return (
    <div>
      <Image
        src="/comrade.png"
        alt="Comrade Logo"
        width={80}
        height={80}
      />
    </div>
  )
}

export default Comrade
