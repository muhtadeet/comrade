import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

interface ComradeProps {
  width?: string
  height?: string
}

const Comrade = ({ width, height }: ComradeProps) => {
  return (
    <div>
      <Image src="/comrade.png" alt="Comrade Logo" width={80} height={80} />
    </div>
  )
}

export default Comrade
