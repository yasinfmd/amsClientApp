import { ReactNode } from 'react'

export default interface DynamicRouteModel {
  path: string
  exact?: boolean
  routeProtection: boolean
  importPath: string
  layout: ReactNode
}
