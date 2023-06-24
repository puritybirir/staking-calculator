const Table = () => {
  const data = [
    ['Value A1', 'Value B1'],
    ['Value A2', 'Value B2'],
    ['Value A3', 'Value B3'],
  ];

  return (
    <div className="container mt-[14px]">
      <table className="w-[300px] bg-white md:w-[615px]">
        <thead>
          <tr className="bg-[#EFEFEF] text-[11px]">
            <th className="font-medium p-2 text-black">Price</th>
            <th className="font-medium p-2 text-black">Reward Rate</th>
            <th className="font-medium p-2 text-black">Annual Reward in $</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-2">{row[0]}</td>
              <td className="px-4 py-2">{row[1]}</td>
              <td className="px-4 py-2">
                <input
                  className="border rounded px-2 py-1 focus:outline-none"
                  type="text"
                  placeholder="Enter formula"
                />
                <span className="ml-2">Result</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
