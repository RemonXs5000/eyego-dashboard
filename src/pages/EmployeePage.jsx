import React from 'react'
import Header from '../components/Ui/Header'
import {motion} from "framer-motion"
import EmployeeTable from '../components/Table/EmployeeTable'


export default function EmployeePage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
    <Header/>
    {/* Employees Table  */}
    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <motion.div 
          className='grid grid-cols-1 mb-8'
          initial={{opacity: 0 , y : 20 }}
          animate={{opacity: 1 , y : 0}}
          transition={{duration: 1 }}
        >
          <EmployeeTable/>
        </motion.div>
        
    </main>
    </div>
  )
}
