import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="flex justify-center bg-black text-white col-span-1">
      <div className="fixed">
        <form onSubmit={(e) => {
          e.preventDefault()
          setSearchTerm('')
        }}>
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass}
              className="pr-[10px]" />
          </button>
          <input type="text" 
          className="rounded-lg h-8 w-[300px] mt-4 focus:outline-none text-black bg-gray-200 focus:bg-gray-400 pl-3"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} >
          </input>
        </form>
      </div>
    </div>
  )
}