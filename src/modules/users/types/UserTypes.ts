export interface IUser {
  id?: string
  fullName: string
  phones: string[]
  mainPhone: string
  photo: string
  password: string
  passportSeries: string
  branchId: string
  role: string
  status: boolean
  create_at?: string
}