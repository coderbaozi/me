'use client'

import { MoonStar, Sun } from 'lucide-react'
import { memo } from 'react'
import { useLocalStorage } from 'react-use'

const Theme: Component = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const handleThmeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div onClick={handleThmeChange}>
      {theme === 'light' ? <Sun size={20} /> : <MoonStar size={20} />}
    </div>
  )
}

export default memo(Theme)
