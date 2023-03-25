import { useState } from "react";
import TPost from "../types/TPost";
import Posting from "./Posting";



export default function Feed() {
  const [posts, setPosts] = useState<TPost[]>([
    {
      title: 'Gucci T-Shirt',
      price: 40,
      location: 'North End',
      description: 'Size Small Trying to get rid quick',
    },
    {
      title: 'Burger King Foot Lettuce',
      price: 200,
      location: 'Donnelly',
      description: 'McChiken with foot fungus'
    },
    {
      title: 'Bacon Balls',
      price: 900,
      location: 'McCann',
      description: 'Balls dipped in Bacon'
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