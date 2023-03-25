import { useState } from "react"
import TPost from "../types/TPost";
import Account from "./Account";
import Feed from "./Feed";
import Items from "./Items";
import { Pages } from "./MarketPlace";
import Posting from "./Posting";
import Purchases from "./Purchases";

interface CatalogProps {
  page: Pages,
}

export default function Catalog({ page }: CatalogProps) {


  function getPage() {
    switch (page) {
      case 'Feed':
        return (<Feed />)

      case 'Account':
        return (<Account />)

      case 'Items':
        return (<Items />)

      case 'Purchases':
        return (
          <Purchases />
        )


    }
  }

  return (
    <>
      {getPage()}
    </>
  )



}