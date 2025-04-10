import React, { useState } from 'react'
import {BarChart,Users,Table,Settings2, Menu} from "lucide-react"
import {AnimatePresence, motion} from "framer-motion"
import { Link } from 'react-router-dom'


const SIDEBAR_ITEMS = [
  {name :"Overview",icon:Table,color:"#6366f1", href:"/overview"},
  {name :"Employee",icon:Users,color:"#ec2d2d", href:"/employee"},
  {name :"Settings",icon:Settings2,color:"#6366f1", href:"/settings"},  
] 


export default function Sidebar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  return (
    <motion.div 
      className={`relative z-10 transition-all duration-300  ease-in-out flex-shrink-0 ${isSideBarOpen ? 'w-64':'w-20'}`}
      animate={{width : isSideBarOpen ? 256 : 80 }}>
        <div className='h-full bg-gray-800  backdrop-blur-md border-r p-4 flex flex-col border-gray-700'>


            <motion.button
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
              onClick={()=>setIsSideBarOpen(!isSideBarOpen)}
              className='p-2 rounded-full hover:bg-gray-200 text-white transition-colors max-w-fit'>
                <Menu size={"24"}/>
            </motion.button>


            <nav className='mt-5 flex flex-col gap-3'>
               {SIDEBAR_ITEMS.map((item,index)=>(
                <Link to={item.href} key={index}>

                  <motion.div className='flex items-center rounded-lg text-sm font-medium p-4 hover:bg-gray-700  mb-2 transition-colors gap-2
                   '>
                    <item.icon size={24} style={{color: item.color ,minWidth:"20px"}}/>
                    <AnimatePresence>
                      {isSideBarOpen && (
                        <motion.span className='ml-4 whitespace-nowrap'
                        initial={{ opacity: 0 ,width: 0 }}
                        animate={{ opacity: 1 ,width: "auto" }}
                        exit={{ opacity:0 ,width: 0 }}
                        transition={{duration:0.2,delay:0.3}}
                        >
                          {item.name}
                        </motion.span>
                      ) }
                    </AnimatePresence>
                  </motion.div>
                </Link>
               ))}
            </nav>
        </div>
    </motion.div>
  )
}
