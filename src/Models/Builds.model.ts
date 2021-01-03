export interface Building {
  id?: number
  complexId: number
  managerId: number | null
  buildingNumber: string
  floorCount: number
  apartmentCount: number
}
