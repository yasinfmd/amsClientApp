import React from 'react'

import { PieChartOutlined, FileOutlined } from '@ant-design/icons'
import RouterModel from '../Models/RouterConst.model'
import DynamicRouteModel from '../Models/DynamicRoute.model'
import applicationLayout from '../components/Layouts/applicationLayout'
import loginLayout from '../components/Layouts/loginLayout'
import { FormattedMessage } from 'react-intl'

const ApplicationRouter: Array<RouterModel> = [
  {
    id: 1,
    route: '/',
    icon: null,
    text: <FormattedMessage id="homePage" />,
    children: []
  },
  {
    id: 2,
    route: '',
    icon: null,
    text: <FormattedMessage id="defines" />,
    children: [
      {
        id: 2.1,
        icon: <PieChartOutlined />,
        text: <FormattedMessage id="defineBuild" />,
        children: [],
        route: '/builds/add'
      },
      {
        id: 2.2,
        icon: <FileOutlined />,
        text: 'Sayf 2',
        children: [],
        route: '#/realm-settings'
      }
    ]
  }
]

const DynamicRouter: Array<DynamicRouteModel> = [
  {
    exact: false,
    importPath: 'Builds',
    path: '/builds',
    routeProtection: true,
    layout: applicationLayout
  },

  {
    exact: false,
    importPath: 'Login',
    path: '/Login',
    routeProtection: false,
    layout: loginLayout
  },
  {
    exact: true,
    importPath: 'Dashboard',
    path: '/',
    routeProtection: true,
    layout: applicationLayout
  }
]
export { ApplicationRouter, DynamicRouter }
