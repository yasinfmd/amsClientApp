import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import useMedia from 'react-media-hook2'
import Logo from '../Logo'
import AppMenu from '../Menu'
const { Sider } = Layout

const SideBar = () => {
  const [collapseSidebar, setCollapseSidebar] = useState(false)
  const isMobile = useMedia({
    onChange: (val) => {
      setCollapseSidebar(val)
    },
    query: '(max-width:599px)'
  })[0]
  return (
    <Sider
      collapsible
      collapsed={collapseSidebar}
      onCollapse={setCollapseSidebar}
    >
      <Logo />
      <AppMenu selectedKeys={['1']} />
    </Sider>
  )
}

export default React.memo(SideBar)
