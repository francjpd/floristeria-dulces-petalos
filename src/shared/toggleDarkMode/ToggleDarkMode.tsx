import { useEffect, useState } from 'react'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import Button from '../Button/Button'

export default function ToggleDarkMode ({ className }: { className?: string }) {
  const [isDark, toggleDark] = useState(localStorage.getItem('isDark') === 'false')
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const handleToggleButton = () => {
    toggleDark(!isDark)
    localStorage.setItem('isDark', isDark.toString())
  }

  const isDarkImage = <img src={isDark ? moon : sun} />
  return (<Button className={`pr-2 pt-2 md:pt-4 ${className}`} size='icon' variant='ghost' onClick={handleToggleButton}>{isDarkImage}</Button>)
}
