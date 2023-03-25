import { useState } from "react"
import TPost from "../types/TPost"



export default function Items() {
  const [items, setItems] = useState<TPost[]>([
    {
      title: 'Gucci T-Shirt',
      price: 40,
      location: 'North End',
      description: 'Size Small Trying to get rid quick',
      date: new Date(Date.now())
    },
    {
      title: 'Burger King Foot Lettuce',
      price: 200,
      location: 'Donnelly',
      description: 'McChiken with foot fungus',
      date: new Date(Date.now())
    },
    {
      title: 'Bacon Balls',
      price: 900,
      location: 'McCann',
      description: 'Balls dipped in Bacon',
      date: new Date(Date.now())
    },
  ])
  return (
    <div className="flex flex-col col-span-3 h-screen items-center gap-[30px]">
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
