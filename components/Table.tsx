import Image from "next/image";
import pencil from '../assets/images/pencil.svg';

const Table = () => {
  const data = [
    ['A1', 'B1'],
    ['A2', 'B2'],
    ['A3', 'B3'],
  ];

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
          {data.map((row, index) => (
            <tr key={index}>
              <td className="">
                <div className="flex items-center justify-start rounded hover:shadow">
                  <input
                    className="border-r outline-none border-[#F5F5F5] text-[11px] text-black text-center w-full bg-[#FAFAFA] mt-2 py-4"
                    type="text"
                    value={row[0]}
                  />
                  <Image src={pencil} className="ml-[-1rem] mt-[1rem]" alt="Pencil edit icon" />
                </div>
              </td>
              <td className="">
                <div className="flex items-center justify-start rounded hover:shadow">
                  <input
                    className="border-r outline-none border-[#F5F5F5] text-[11px] text-black text-center w-full bg-[#FAFAFA] mt-2 py-4"
                    type="text"
                    value={row[1]}
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
