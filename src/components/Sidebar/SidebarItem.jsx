import React from 'react'
import { Link } from 'react-router-dom'


export default function SidebarItem({item}) {
    const {path,icon,name,color} = item
  return (
    <Link to={path} className='flex gap-1 '>
    <Icon color={color} />
     {name}
    </Link>
  )
}
