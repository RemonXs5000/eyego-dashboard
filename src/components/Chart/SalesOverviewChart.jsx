import React from 'react';
import {LineChart ,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer ,Legend } from "recharts";
import {motion} from "framer-motion"



const salesData = [
    { month: "January", sales: 1200 },
    { month: "February", sales: 1500 },
    { month: "March", sales: 1700 },
    { month: "April", sales: 1300 },
    { month: "May", sales: 1900 },
    { month: "June", sales: 2100 },
    { month: "July", sales: 2500 },
    { month: "August", sales: 2300 },
    { month: "September", sales: 2000 },
    { month: "October", sales: 2400 },
    { month: "November", sales: 2600 },
    { month: "December", sales: 3000 },
  ];

export default function SalesOverviewChart() {
  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
        initial={{opacity: 0 , y : 20 }}
        animate={{opacity: 1 , y : 0}}
        transition={{delay: 0.2 }}>
        <h2 className='text-lg font-medium mb-4 text-gray-200'>
            Sales Overview
        </h2>
        <div className='h-80'>
            <ResponsiveContainer width={"100%"} height={"100%"} >
                <LineChart
                    width={500}
                    height={300}
                    data={salesData}
                    >
                    <CartesianGrid strokeDasharray="3 3" stroke='#4B5563' />
                    <XAxis dataKey="month" stroke='#0b9e23' />
                    <YAxis stroke='#0b9e23' />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="month" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="sales" stroke="#ca8282" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}
