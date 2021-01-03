import React, { ReactNode } from 'react'
import { Helmet } from 'react-helmet'

interface PropTypes {
  title: string
  children?: ReactNode
}
const ApplicationHeader = (props: PropTypes) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      {props.children}
    </Helmet>
  )
}
export default React.memo(ApplicationHeader)
