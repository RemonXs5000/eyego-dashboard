import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer ,Cell } from 'recharts';
import {motion} from "framer-motion"



const departmentdata = [
    { department: 'Engineering', employees: 40 },
    { department: 'Marketing', employees: 25 },
    { department: 'Sales', employees: 30 },
    { department: 'Human Resources', employees: 10 },
    { department: 'Finance', employees: 15 },
  ];
const COLORS = [ '#5c2ef3',
    '#4FCAC4',
    '#D0F05B',
    '#FF6B6B',
    '#207808'];

export default function DepartmentOverViewPieChart() {
  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
        initial={{opacity: 0 , y : 20 }}
        animate={{opacity: 1 , y : 0}}
        transition={{delay: 0.2 }}>
        <h2 className='text-lg font-medium mb-4 text-gray-200'>
            Deparments Overview
        </h2>
        <div className='h-80'>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                        <PieChart>
                            <Pie
                                data={departmentdata}
                                cx={"50%"}
                                cy={"50%"}
                                labelLine={false}
                                outerRadius={80}
                                fill='#8884d8'
                                dataKey='employees'
                                label={({ department, percent }) => `${department} ${(percent * 100).toFixed(0)}%`}
                            >
                                {departmentdata.map((entry, index) => (
                                    <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                                    borderColor: "#4B5563",
                                }}
                                itemStyle={{ color: "#E5E7EB" }}
                            />
                            
                        </PieChart>
            </ResponsiveContainer>
        </div>
    </motion.div>
  )
}
