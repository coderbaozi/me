import { Github } from 'lucide-react'
import Link from 'next/link'
import { memo, ReactNode } from 'react'
import Theme from '../Theme'

interface NavItem {
  name: ReactNode
  href: string
  customRender?: (record: Omit<NavItem, 'customRender'>) => ReactNode
}

const navs: NavItem[] = [
  { name: 'Blog', href: '/blog' },
  {
    name: 'Project',
    href: '/project',
  },
  {
    name: 'Resume',
    href: '/resume',
  },
  {
    name: <Github size={20} />,
    href: 'https://github.com/coderbaozi',
  },
  {
    name: <Theme />,
    href: '',
  },
]

const Nav: Component = () => {
  return (
    <div className="flex justify-between w-full p-2">
      <div>abun</div>
      <nav className="flex gap-4 items-center">
        {navs.map((nav) => {
          return (
            <Link
              key={nav.href}
              className="text-zinc-500 hover:text-black"
              href={nav.href}
            >
              {nav.customRender ? nav.customRender(nav) : nav.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default memo(Nav)
