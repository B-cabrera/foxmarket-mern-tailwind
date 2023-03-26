import { useState } from "react"
import TPost from "../types/TPost"



export default function Items() {
  const [items, setItems] = useState<TPost[]>([
    {
      title: 'T-Shirt',
      price: 40,
      location: 'North End',
      description: 'Size Small Trying to get rid quick',
      date: new Date(Date.now())
    },
    {
      title: 'Old Pants',
      price: 200,
      location: 'Donnelly',
      description: 'Good condition',
      date: new Date(Date.now())
    },
    {
      title: 'Old Shoes',
      price: 900,
      location: 'McCann',
      description: 'Some old shoes I dont want anymore',
      date: new Date(Date.now())
    },
  ])
  return (
    <div className="flex flex-col col-span-3 h-screen items-center gap-[30px] bg-red-100">
      <p className="text-5xl font-bold pt-10 pb-2">My Items</p>
      {
        items.map((item) => {
          return (
            <p className="text-2xl font-thin">{item.date?.toDateString()}: {item.title} for {item.price} @ {item.location}</p>
          )
        })
      }
      <button className="bg-redfox rounded-lg">
        <p className="p-5">Add Item</p>
      </button>
    </div>
  )
}
