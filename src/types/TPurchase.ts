type locations = 'Donnelly' | 'North End' | 'Hancock' | 'McCann' | 'Murray Student Center';

export type TPurchase = {
  seller: string
  item: string,
  cost: number
  location: locations,
  date: Date,
}


export default locations;