import React from 'react'
import { Menu } from 'antd'
import { Tabs } from 'antd'

const { TabPane } = Tabs

const HeaderDropdownMenu = () => {
  return (
    <Menu>
      <Menu.Item></Menu.Item>
      <Tabs defaultActiveKey="2">
        <TabPane tab={<span>Tab 1</span>} key="1">
          Tab 1
        </TabPane>
        <TabPane tab={<span>Tab 2</span>} key="2">
          Tab 2
        </TabPane>
      </Tabs>
    </Menu>
  )
}

export default React.memo(HeaderDropdownMenu)
