export interface IPartner {
    id: string
    createdAt: string
    name: string
    link: string
    data: PartnerData
  }
  
  export interface PartnerData {
    key: string
  }