import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, } from 'chart.js/auto'
import { bestSellingProductsData } from './Dashboarddata'
import { useState } from 'react'
const PieChart = () => {
  return (
    <div className='p-6 mb-6 bg-base-200 rounded-md'>
      <h3 className=' mb-4'>Best Selling Products</h3>
      <div className=' flex justify-center items-center'>
      <BestSellingChart />
      </div>
    </div>
  )
}

export default PieChart


const BestSellingChart = () => {
  const [seldata, setSeldata] = useState(
    {
      labels: bestSellingProductsData.map((item) => item.proeuct),
      datasets: [
        {
          label: "Seals",
          data: bestSellingProductsData.map((item) => item.salesCount),
          backgroundColor: [" rgb(6 182 212)", " rgb(249 115 22)", "rgb(34 197 94)", " rgb(59 130 246)"],


        },

      ]
    })

  const options = {
    maintainAspectRatio: true	// Don't maintain w/h ratio
  }
  return (
    <div>
      <article className='flex items-center h-[300px] w-[300px] justify-center' >
        <Pie data={seldata} options={options} />
      </article>
    </div>
  )
}