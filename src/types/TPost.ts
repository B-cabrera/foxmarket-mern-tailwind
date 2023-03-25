import locations from "./TPurchase";


type TPost = {
  title: string,
  price: number,
  location: locations,
  pic?: File,
  description: string
  date?: Date
}

export default TPost;