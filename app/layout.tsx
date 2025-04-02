import React, { memo } from 'react'

const GlobalLayout: Component = ({ children }) => {
  return <html lang="en">{children}</html>
}

export default memo(GlobalLayout)
