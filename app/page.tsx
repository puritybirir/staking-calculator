"use client"

import Cell from "@/components/Cell"
import SearchBar from "@/components/SearchBar"
import SheetsContainer from "@/components/SheetsContainer"
import Table from "@/components/Table"
import { RecoilRoot } from "recoil"

export default function Home() {
  return (
    <main>
      <h1 className="text-[1rem] mt-[34px] font-bold text-black md:text-[1.25rem]">Your Personal Staking Calculator</h1>
      <SearchBar />
      {/* <Table /> */}
      <RecoilRoot>
        <SheetsContainer />
      </RecoilRoot>
    </main>
  )
}
