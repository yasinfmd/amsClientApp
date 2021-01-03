import React from 'react'
import { Breadcrumb } from 'antd'

const AppBreadCrumb = () => {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
      <Breadcrumb.Item>Billme</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default React.memo(AppBreadCrumb)
