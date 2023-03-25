import TPost from "../types/TPost";

export default function Posting({ title, location, price, description }: TPost) {
  return (
    <div className="flex flex-col items-center gap-4 border-2 border-solid border-black">
      <p className="text-6xl font-bold pb-3">{title}</p>
      <img
        src="https://cdn.yoox.biz/12/12949179EQ_13_f.jpg"
        className="w-[300px] h-[400px] border-2 border-black" />
      <p>${price} @ {location}</p>
      <i>{description}</i>
      <button className="bg-redfox rounded-lg">
        <p className="p-4">I'm Interested</p>
      </button>
    </div>
  )
}