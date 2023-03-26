import { useState } from "react";
import TPost from "../types/TPost";
import Posting from "./Posting";



export default function Feed() {
  const [posts, setPosts] = useState<TPost[]>([
    {
      title: 'T-Shirt',
      price: 40,
      location: 'North End',
      description: 'Size Small Trying to get rid quick',
    },
    {
      title: 'Old Pants',
      price: 200,
      location: 'Donnelly',
      description: 'Good condition'
    },
    {
      title: 'Old Shoes',
      price: 900,
      location: 'McCann',
      description: 'Some old shoes I dont want anymore'
    },
  ]);
  return (
    <div className="col-span-3 bg-gray-200">
      {
        posts?.map((post) => {
          return <Posting
            title={post.title}
            location={post.location}
            price={post.price}
            description={post.description}
          />
        })
      }
    </div>
  )
}