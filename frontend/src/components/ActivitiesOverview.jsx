import ActivitiesChart from './ActivitiesChart'

const MAX_CHART_ITEMS = 15

export default function ActivitiesOverview({
  data,
  processorData,
  memoryData,
}) {
  return (
    <div className="flex-1 text-sm mx-auto flex items-center justify-center gap-4 text-[#AAA]">
      <div>
        <p>
          <b>System:</b>{' '}
          {(data?.cpu / data?.computer?.processors || 0).toFixed(2)}%
        </p>
        <p>
          <b>Idle:</b>{' '}
          {(100 - data?.cpu / data?.computer?.processors || 0).toFixed(2)}%
        </p>
      </div>
      <ActivitiesChart
        processorData={processorData}
        memoryData={memoryData}
        maxChartItems={MAX_CHART_ITEMS}
      />
      <div>
        <p>
          <b>Threads:</b> {data?.threads}
        </p>
        <p>
          <b>Processes:</b> {data?.tasks}
        </p>
      </div>
    </div>
  )
}
