import { useState } from "react";
import { TPurchase } from "../types/TPurchase";



export default function Purchases() {
  const [history, setHistory] = useState<TPurchase[]>([
    {
      seller: 'Brenden',
      item: 'T-Shirt',
      cost: 400,
      location: 'Donnelly',
      date: new Date()
    },
    {
      seller: 'Jeff',
      item: 'Shoes',
      cost: 200,
      location: 'Hancock',
      date: new Date()
    },
  ])



  return (
    <div className="flex flex-col items-center col-span-3 h-screen bg-gray-200 gap-[30px]">
      <p className="text-5xl font-bold pt-10 pb-20">Purchases</p>
      {history?.map((purchase) => {
        return (
            <p className="text-2xl font-thin">{purchase.date.toDateString()}: {purchase.item} for {purchase.cost} @ {purchase.location}</p>
        )
      })}
    </div>
  )
}