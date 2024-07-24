'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import { AlignJustify } from 'lucide-react';
import MobileSidebar from './MobileSidebar';
const links = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/events',
    name: 'Events'
  },
  {
    path: '/gallery',
    name: 'Gallery'
  },
  {
    path: '/alumniMeetGallery',
    name: 'Blogs'
  },
  {
    path: '/contact',
    name: 'Contact Us'
  },
  {
    path: '/student-services',
    name: 'Student Services'
  },
  {
    path: '/donation',
    name: 'Donate Us'
  },
  {
    path: '/joinus',
    name: 'Join Us'
  },

]

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='bg-theme w-full flex'>
      <div className="flex w-full lg:py-9 py-5 xl:pl-10 pl-6 flex-row xl:justify-around justify-between items-center bg-theme">
        <div className="flex text-white text-lg">Logo</div>
        <ul className="xl:flex hidden flex-row gap-12 text-white tracking-wider">
          {links.map((items, index) => {
            return (
              <li className={`${pathname === items.path ? 'font-semibold' : 'font-normal'} px-3`} key={index}><a href={items.path}>{items.name}</a></li>
            )
          })}

        </ul>

        <div className="flex xl:hidden text-white xl:pr-10 pr-6">
          <MobileSidebar />
        </div>
      </div>

    </nav>
  )
}

export default Navbar