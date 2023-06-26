"use client"

import Image from "next/image";
import pencil from '../assets/images/pencil.svg';
import { use, useState } from "react";

const Table = () => {
  const [cell, setCell] = useState("")
  const [cell2, setCell2] = useState("")

  return (
    <div className="container mt-[14px]">
      <table className="w-[300px] bg-white md:w-full">
        <thead className="">
          <tr className="rounded w-full bg-[#EFEFEF] text-[11px]">
            <th className="font-medium p-3 text-black">Price</th>
            <th className="font-medium p-3 text-black">Reward Rate</th>
            <th className="font-medium p-3 text-black">Annual Reward in $</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">
              <div className="flex items-center justify-start rounded hover:shadow">
                <input
                  className="border-r outline-none border-[#F5F5F5] text-[11px] text-black text-center w-full bg-[#FAFAFA] mt-2 py-4"
                  type="text"
                  value={cell}
                  onChange={(e) => {
                    setCell(e.target.value)
                  }}
                />
                <Image src={pencil} className="ml-[-1rem] mt-[1rem]" alt="Pencil edit icon" />
              </div>
            </td>
            <td className="">
              <div className="flex items-center justify-start rounded hover:shadow">
                <input
                  className="border-r outline-none border-[#F5F5F5] text-[11px] text-black text-center w-full bg-[#FAFAFA] mt-2 py-4"
                  type="text"
                  value={cell2}
                  onChange={(e) => {
                    setCell2(e.target.value)
                  }}
                />
                <Image src={pencil} className="ml-[-1rem] mt-[1rem]" alt="Pencil edit icon" />
              </div>
            </td>
            <td className="">
              <div className="flex items-center justify-start rounded hover:shadow">
                <input
                  className="w-full outline-none text-[11px] text-black text-center bg-[#FAFAFA] mt-2 py-4"
                  type="text"
                />
                <Image src={pencil} className="ml-[-1rem] mt-[1rem]" alt="Pencil edit icon" />
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );
};

export default Table;
