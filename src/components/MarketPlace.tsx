import { useState } from "react";
import { faArrowDownShortWide, faBagShopping, faBars, faShop, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Catalog from "./Catalog";
import Search from "./Search";

export type Pages = 'Purchases' | 'Account' | 'Items' | 'Feed'

export default function MarketPlace() {
  const [currentPage, setCurrentPage] = useState<Pages>('Feed');


  return (
    <div className="grid grid-cols-5 w-screen">
      {/* Menu Component */}
      <div className="flex text-white font-thin justify-center bg-gray-500 h-full col-span-1">
        <div className="flex fixed flex-col space-y-10 pt-[50px]">
          <span className="flex items-center bg-redfox rounded-lg bg-opacity-0 hover:bg-opacity-[0.1] hover:cursor-pointer"
            onClick={() => setCurrentPage('Feed')}>
            <FontAwesomeIcon
              icon={faArrowDownShortWide}
              style={{ color: "#b81c1c", }}
              className="ml-3" />
            <p className="pl-2 text-2xl p-2">Feed</p>
          </span>
          <span className="flex items-center bg-redfox rounded-lg bg-opacity-0 hover:bg-opacity-[0.1] hover:cursor-pointer"
            onClick={() => setCurrentPage('Purchases')}>
            <FontAwesomeIcon
              icon={faBagShopping}
              style={{ color: "#b81c1c", }}
              className="ml-3" />
            <p className="pl-2 text-2xl p-2">Purchases</p>
          </span>
          <span className="flex items-center bg-redfox rounded-lg bg-opacity-0 hover:bg-opacity-[0.1] hover:cursor-pointer"
            onClick={() => setCurrentPage('Account')}>
            <FontAwesomeIcon
              icon={faUser}
              style={{ color: "#b81c1c", }}
              className="ml-3" />
            <p className="pl-2 text-2xl p-2">Account</p>
          </span>
          <span className="flex items-center bg-redfox rounded-lg bg-opacity-0 hover:bg-opacity-[0.1] hover:cursor-pointer"
            onClick={() => setCurrentPage('Items')}>
            <FontAwesomeIcon
              icon={faShop}
              style={{ color: "#b81c1c", }}
              className="ml-3" />
            <p className="pl-2 text-2xl p-2">My Items</p>
          </span>
        </div>
      </div>
      {/* Menu Component */}
      <Catalog page={currentPage} />
      <Search />
    </div>

  )
}