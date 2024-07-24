import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import { Button } from './ui/button'
import { AlignJustify, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

type Props = {}

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
        path: '/blog',
        name: 'Blogs'
    },
    {
        path: '/contact-us',
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

]

const MobileSidebar = (props: Props) => {
    const pathname = usePathname();
    return (
        <>
            <Drawer>
                <DrawerTrigger><AlignJustify size={20} /></DrawerTrigger>
                <DrawerContent className='bg-white/90'>
                    <DrawerHeader>
                        <ul className="flex flex-col items-center gap-12 text-theme tracking-wider mb-10">
                            {links.map((items, index) => {
                                return (
                                    <li className={`${pathname === items.path ? 'font-semibold' : 'font-normal'} px-3 `} key={index}><a href={items.path}>{items.name}</a></li>
                                )
                            })}

                        </ul>
                    </DrawerHeader>
                    <DrawerFooter>

                        <DrawerClose>
                            <Button variant="default" className='rounded-full border border-black'><X size={20} /></Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </>
    )
}

export default MobileSidebar