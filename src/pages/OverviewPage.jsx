import React from 'react'
import Header from '../components/Ui/Header'
import {motion} from "framer-motion"
import StatCard from '../components/Ui/StatCard'
import { BarChart, DollarSign ,User ,ShoppingBasket } from 'lucide-react'
import SalesOverviewChart from '../components/Chart/SalesOverviewChart'
import DepartmentOverViewPieChart from '../components/Chart/DepartmentOverViewPieChart'







export default function OverviewPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header/>
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
          <motion.div 
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8'
            initial={{opacity: 0 , y : 20 }}
            animate={{opacity: 1 , y : 0}}
            transition={{duration: 1 }}
          >
            {/* STAT CARDS */}
            <StatCard name={"Profit"} icon={DollarSign}  value={"12,000$"}/>
            <StatCard name={"New Users"} icon={User}  value={"1754"}/>
            <StatCard name={"Total Products"} icon={ShoppingBasket}  value={"671"}/>
            <StatCard name={"Convention-Rate"} icon={BarChart}  value={"23%"}/>

          </motion.div>



            {/* // Bar Chart & Pie Chart  */}
          <motion.div 
            className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-8'
            initial={{opacity: 0 , y : 20 }}
            animate={{opacity: 1 , y : 0}}
            transition={{duration: 1 }}
          >
           <SalesOverviewChart/>
           <DepartmentOverViewPieChart/>
          
          </motion.div>

          
      </main>
      </div>
  )
}
