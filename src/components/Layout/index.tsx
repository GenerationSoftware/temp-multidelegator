import React from 'react'
import { PageHeader } from './PageHeader'

interface LayoutProps {
  children: React.ReactNode
}

/**
 * Layout component includes page header & navigation
 * @param props
 * @returns
 */
const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props

  return (
    <>
      <PageHeader />
      <main>{children}</main>
    </>
  )
}

export default Layout
