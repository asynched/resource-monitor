import { Line as LineChart } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.defaults.color = '#CCC'
ChartJS.defaults.font.size = 10

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export default function ActivitiesChart({
  processorData,
  memoryData,
  maxChartItems,
}) {
  return (
    <div>
      <LineChart
        height="128px"
        data={{
          labels: Array(maxChartItems).fill(' '),
          datasets: [
            {
              label: 'CPU',
              data: processorData,
              borderColor: 'rgba(220, 38, 38, 1)',
              borderWidth: 1,
            },
            {
              label: 'RAM',
              data: memoryData,
              borderColor: 'rgba(37, 99, 235, 1)',
              borderWidth: 1,
            },
          ],
        }}
        options={{
          animation: {
            duration: 0,
          },
          elements: {
            point: {
              radius: 2,
              pointStyle: 'circle',
            },
          },
          scales: [
            {
              axis: 'y',
              max: 100,
              beginAtZero: true,
              grid: {
                display: false,
              },
              ticks: {
                display: false,
              },
            },
            {
              axis: 'x',
              ticks: {
                display: false,
              },
              grid: {
                display: false,
              },
            },
          ],
        }}
      />
    </div>
  )
}
