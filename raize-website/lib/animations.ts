export const variants = {
  fadeUp: {
    hidden:  { y: 24, opacity: 0 },
    visible: { y: 0,  opacity: 1 }
  },
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1 }
  },
  scaleIn: {
    hidden:  { scale: 0.95, opacity: 0 },
    visible: { scale: 1,    opacity: 1 }
  },
  slideLeft: {
    hidden:  { x: 40,  opacity: 0 },
    visible: { x: 0,   opacity: 1 }
  },
  slideRight: {
    hidden:  { x: -40, opacity: 0 },
    visible: { x: 0,   opacity: 1 }
  }
}

export const transitions = {
  default: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  slow:    { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  stagger: { staggerChildren: 0.1 },
  staggerFast: { staggerChildren: 0.06 }
}
