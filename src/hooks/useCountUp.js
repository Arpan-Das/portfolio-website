import { useEffect, useState } from 'react'

export function useCountUp(target, duration = 1200) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const end = Number(target)
    if (!Number.isFinite(end)) return

    const startTime = performance.now()
    let frameId

    const tick = (time) => {
      const progress = Math.min((time - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const value = end * eased
      setCount(Number(value.toFixed(end % 1 === 0 ? 0 : 1)))
      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [target, duration])

  return count
}
