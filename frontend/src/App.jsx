import React, { useEffect, useState } from 'react'

import { isEmpty } from './utils/objects'
import SystemBar from './components/SystemBar'
import ActivitiesTable from './components/ActivitiesTable'
import ActivitiesOverview from './components/ActivitiesOverview'

const socket = new WebSocket('ws://localhost:1337')

const MAX_CHART_ITEMS = 15

export default function App() {
  const [data, setData] = useState([])
  const [processorData, setProcessorData] = useState([])
  const [memoryData, setMemoryData] = useState([])

  socket.onmessage = (message) => {
    const data = JSON.parse(message.data)
    setData(data)
  }

  const setChartData = (item) => {
    return (data) => {
      if (!item) {
        return []
      }

      if (data.length < MAX_CHART_ITEMS) {
        return [...data, item]
      }

      return [...data.slice(1), item]
    }
  }

  useEffect(() => {
    const { info: _, ...info } = data

    if (isEmpty(info)) {
      return
    }

    setProcessorData(setChartData(info.cpu / info.computer.processors))
    setMemoryData(setChartData(info.memory))
  }, [data])

  return (
    <main className="w-full h-screen flex items-center justify-center  text-white activities-monitor-container">
      <div className="relative flex flex-col w-[80%] max-h-[80%] h-full border bg-[#202020] bg-opacity-50 backdrop-blur-lg border-[#323232] rounded-lg shadow-xl">
        <SystemBar />
        <ActivitiesTable info={data.info} />
        <ActivitiesOverview
          data={data}
          processorData={processorData}
          memoryData={memoryData}
        />
      </div>
    </main>
  )
}
