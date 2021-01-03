import React, { ReactNode } from 'react'
import { Card, Layout, Image } from 'antd'
import './loginLayout.scss'
import Logo from '../../assets/image/logo.png'
interface PropTypes {
  children: ReactNode
}

const LoginLayout = (props: PropTypes) => {
  const [random, setRandom] = React.useState()
  return (
    <>
      <div className="loginWrapper">
        <Layout className={'loginLayout'}>
          <div className="loginCard p20">
            <div className="companyLogo">
              <Image width={200} height={100} src={Logo} />
            </div>
            <div className="loginCardBody">{props.children}</div>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default React.memo(LoginLayout)
