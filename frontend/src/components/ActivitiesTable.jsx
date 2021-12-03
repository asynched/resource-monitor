export default function ActivitiesTable({ info }) {
  const isOdd = (value) => value % 2 === 0

  return (
    <div className="h-[75%] overflow-auto border-b border-[#323232]">
      <table className="w-full">
        <thead className="text-[#EEE]">
          <tr>
            <th className="py-2 px-4 text-left">Process ID</th>
            <th className="py-2 px-4 text-left">Process name</th>
            <th className="py-2 px-4 text-left">User</th>
            <th className="py-2 px-4 text-left">CPU</th>
            <th className="py-2 px-4 text-left">Threads</th>
            <th className="py-2 px-4 text-left">Memory</th>
          </tr>
        </thead>
        <tbody className="text-[#CCC]">
          {info?.map((info, index) => (
            <tr
              key={info.pid}
              className={`bg-[#202020] bg-op ${
                isOdd(index) ? 'bg-[#242424] bg-opacity-25' : 'bg-opacity-0'
              } hover:bg-[#000] hover:bg-opacity-25`}
            >
              <td className="text-sm py-1 px-4 text-left">{info.pid}</td>
              <td className="text-sm py-1 px-4 text-left">{info.command}</td>
              <td className="text-sm py-1 px-4 text-left">{info.user}</td>
              <td className="text-sm py-1 px-4 text-left">{info.cpu}%</td>
              <td className="text-sm py-1 px-4 text-left">{info.threads}</td>
              <td className="text-sm py-1 px-4 text-left">{info.memory}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
