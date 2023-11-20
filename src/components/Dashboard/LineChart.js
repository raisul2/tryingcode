import React from 'react'
import { useState } from 'react'
import { ordersData, saelsData } from './Dashboarddata'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, } from 'chart.js/auto'

const LineChart = () => {


    return (

        <div className='p-6 mb-6 bg-base-200 rounded-md'>
            <h3 className=' mb-4'>Weekly Sales</h3>

            <div role="tablist" className="tabs tabs-bordered">
                <input type="radio" name="my_tabs_1" role="tab" className="tab " aria-label="Saels" checked />
                {/* saels chart chart */}
                <div role="tabpanel" className=" mt-6  tab-content ">
                    <SalesChart />
                </div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Orders" />
                {/* orders chart */}
                <div role="tabpanel" className=" mt-6 tab-content ">
                    <OrdersChart />
                </div>

            </div>
        </div>
    )
}

export default LineChart




const SalesChart = () => {


    const [slsdata, setSlsdata] = useState(
        {
            labels: saelsData.map((item) => item.date),
            datasets: [
                {
                    label: "Seals",
                    data: saelsData.map((item) => item.salesCount),
                    backgroundColor: [" rgb(16 185 129)"],
                    borderWidth: 2,
                    borderColor: " rgb(16 185 129)",
                },

            ]
        })

    const options = {
        maintainAspectRatio: false	// Don't maintain w/h ratio
    }


    return (
        <article className='canvas_container' >
            <Line data={slsdata} options={options} />
        </article>
    )
}

const OrdersChart = () => {
    const [orddata, setOrddata] = useState(
        {
            labels: ordersData.map((item) => item.date),
            datasets: [
                {
                    label: "Orders",
                    data: ordersData.map((item) => item.salesCount),
                    backgroundColor: ["rgb(249 115 22)"],
                    borderWidth: 2,
                    borderColor: "rgb(249 115 22)",
                },

            ]
        })

    const options = {
        maintainAspectRatio: false	// Don't maintain w/h ratio
    } 
    return (
        <div>
            <article className='canvas_container' >
                <Line data={orddata} options={options} />
            </article>
        </div>
    )
}


