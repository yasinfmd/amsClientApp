import React from 'react'
import { Layout } from 'antd'
import { FormattedMessage } from 'react-intl'

const { Footer } = Layout

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      <FormattedMessage id="Y5Tech" /> {new Date().getFullYear()}
    </Footer>
  )
}

export default React.memo(AppFooter)
