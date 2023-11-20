import React from 'react'
import { DashboardCardOne } from './DashboardCardOne';
import { DashboardCardTwo } from './DashboardCardTwo';
import { dataOne, datatwo } from './Dashboarddata';
import LineChart from './LineChart';
import PieChart from './PieChart';
import { resentOrderdata, tableTitle } from '../Tables/tabledata';
import DashBoardTable from '../Tables/DashBoardTable';
const Dashboard = () => {
  return (
    <section className='dashboard_wrapper pb-6 ' >

      <h2 className='section_heading'>Dashboard Overview</h2>
      {/* Card one wrapper */}
      <div className="grid gap-2 mb-6 lg:grid-cols-5 grid-cols-1 sm:grid-cols-2 my-6">
        {
          dataOne.map((item, index) => (
            <DashboardCardOne key={index} item={item} />
          ))
        }
      </div>
      {/* card two wrappers */}
      <div className="grid gap-2 mb-6 lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 my-6">
        {
          datatwo.map((item, index) => (
            <DashboardCardTwo key={index} item={item} />
          ))
        }
      </div>
      {/* data visulalization  */}
      <div className="grid gap-2 mb-6 lg:grid-cols-2 grid-cols-1 sm:grid-cols-2 my-6">
        <LineChart />
        <PieChart />
      </div>
      <h2 className='section_heading'>Resent Orders</h2>

      {/* Resent Order */}
      
      <DashBoardTable tabletitle={tableTitle} tabledata={resentOrderdata} />
    </section>
  )
}

export default Dashboard



