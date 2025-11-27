"use client"

import React from "react"
 
import { Progress } from "@/components/ui/progress"
 
export function ProgresBar() {
  const [progress, setProgress] = React.useState(13)
 
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
 
  return <Progress value={33} />

}

