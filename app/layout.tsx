import React, { memo } from 'react'
import Nav from './components/Nav'
import './global.css'

const GlobalLayout: Component = ({ children }) => {
  return (
    <html lang="en" className="w-screen h-screen">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}

export default memo(GlobalLayout)
