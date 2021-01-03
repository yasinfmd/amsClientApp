import React from 'react'

import ApplicationLayout from '../components/Layouts/applicationLayout'
import LoginLayout from '../components/Layouts/loginLayout'

const withLayout = (
  Component: React.FunctionComponent,
  params: { protection: boolean }
) => {
  const Wrapped = (props: any) => {
    return (
      <>
        {params.protection ? (
          <ApplicationLayout>
            {' '}
            <Component {...props} />
          </ApplicationLayout>
        ) : (
          <LoginLayout>
            {' '}
            <Component {...props} />
          </LoginLayout>
        )}
      </>
    )
  }
  return Wrapped
}
export default withLayout
