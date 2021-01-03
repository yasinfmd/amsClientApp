import React, { ReactNode } from 'react'
import { Layout } from 'antd'
import AppBreadCrumb from '../BreadCrumb'
import AppFooter from '../Footer'
import AppHeader from '../Header'
import SideBar from '../Sidebar'
interface PropTypes {
  children: ReactNode
}

const { Content } = Layout

const ApplicationLayout = (props: PropTypes) => {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar />
        <Layout className="site-layout">
          <AppHeader />
          <Content style={{ margin: '0 16px' }}>
            <AppBreadCrumb />
            {props.children}
          </Content>
          <AppFooter />
        </Layout>
      </Layout>
    </>
  )
}

export default React.memo(ApplicationLayout)
