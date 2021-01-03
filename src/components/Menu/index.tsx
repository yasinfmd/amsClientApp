import React, { useState } from 'react'

import { Menu } from 'antd'
import { ApplicationRouter } from '../../router/routerConst'
import RouterModel from '../../Models/RouterConst.model'
import { Link } from 'react-router-dom'
const { SubMenu } = Menu
interface PropTypes {
  selectedKeys?: Array<string>
  mode?:
    | 'inline'
    | 'horizontal'
    | 'vertical'
    | 'vertical-left'
    | 'vertical-right'
}

const AppMenu = (props: PropTypes) => {
  const renderSideBarMenu = (sideMenu: Array<RouterModel>) => {
    return sideMenu.map((item: RouterModel, index: number) =>
      drawMenuItem(item, index)
    )
  }

  const drawMenuItem = (item: RouterModel, index: number) => {
    if (item.children.length > 0) {
      return (
        <SubMenu key={item.id} icon={item.icon} title={item.text}>
          {renderSideBarMenu(item.children)}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.id} icon={item.icon}>
          <Link to={item.route}>{item.text}</Link>
        </Menu.Item>
      )
    }
  }

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={props.selectedKeys || []}
      mode={props.mode || 'inline'}
    >
      {renderSideBarMenu(ApplicationRouter)}
    </Menu>
  )
}
export default React.memo(AppMenu)
