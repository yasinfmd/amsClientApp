import React from 'react'
import ApplicationHeader from '../../components/ApplicationHeader'
import { Skeleton } from 'antd'
import { useApplicationState } from '../../context/Application/store'
import { FormattedMessage } from 'react-intl'
import { useAppState } from '../../context/App/store'
const Dashboard = () => {
  return (
    <>
      <ApplicationHeader title={'Ana Sayfa'} />
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        Ben bir anasayfayım selam
        <Skeleton loading={true} active />
      </div>
    </>
  )
}

export default React.memo(Dashboard)
