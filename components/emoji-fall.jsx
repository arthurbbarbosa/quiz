import React from 'react'

export default function EmojiFall() {
  React.useEffect(() => {
    const container = document.getElementById('tadas')
    const intervalId = setInterval(() => {
      const tada = document.createElement('div')

      tada.classList.add(
        'absolute',
        'text-4xl',
        'select-none',
        'animate-fall-spin',
        'will-change-transform'
      )
      tada.textContent = '🎉'

      tada.style.left = `${Math.random() * (window.innerWidth - 36)}px`
      container.appendChild(tada)

      tada.addEventListener('animationend', () => container.removeChild(tada))
    }, 300)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      id="tadas"
      className="pointer-events-none fixed top-0 left-0 h-screen w-screen overflow-visible"
    ></div>
  )
}
