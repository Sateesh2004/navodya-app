import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='text-white' style={{ backgroundColor: "#3d4064" }}>
      <div className='flex items-center justify-between py-5 mx-10 max-sm:flex-col sm:flex-col lg:flex-row'>
        <div className='flex justify-between gap-20 max-sm:flex-col sm:flex-col lg:flex-row'>
          <p className='font-bold text-3xl py-5'>Logo</p>
          <div><p className='font-bold text-3xl py-5'>Quick Links</p>
            <ul className='flex flex-col gap-2'>
              <li><a href='./'>Terms & Conditions</a></li>
              <li><a href='./'>Sitemap</a></li>
              <li><a href='./'>Disclaimer</a></li>
              <li><a href='./'>Copyright Policy</a></li>
              <li><a href='./'>Privacy Policy</a></li>
              <li><a href='./'>Hyperlink Policy</a></li>
              <li><a href='./'>NVS Directory</a></li>
            </ul>
          </div>
          <div>
            <p className='font-bold text-3xl py-5'>Important Link</p>
            <ul className='flex flex-col gap-2'>
              <li><a href='./'>NVS(HQ)</a></li>
              <li><a href='./'>CBSE</a></li>
              <li><a href='./'>NCERT</a></li>
              <li><a href='./'>Mandatory Public Disclosure</a></li>
              <li><a href='./'>Mandatory Public Disclosure - Nalgonda</a></li>
              <li><a href='./'>Academic Calender</a></li>
            </ul>
          </div>
          <div className='hidden max-sm:block'>
            <p className='font-bold text-3xl py-5'>FOLLOW US</p>
            <div className='grid grid-cols-3  gap-10 '>
            <img src='/footer/telegram.svg' />
            <img src='/footer/facebook.svg' />
            <img src='/footer/instagram.svg' />
            <img src='/footer/whatsapp.svg' />
            <img src='/footer/linkedin.svg' />
            <img src='/footer/youtube.svg' />
          </div>
          </div>
          
          </div>
        <div className='flex flex-col items-center max-sm:hidden'>
          <p className='font-bold text-3xl py-5 mx-10'>FOLLOW US</p>
          <div className='grid grid-cols-3 gap-10 '>
            <img src='/footer/telegram.svg' />
            <img src='/footer/facebook.svg' />
            <img src='/footer/instagram.svg' />
            <img src='/footer/whatsapp.svg' />
            <img src='/footer/linkedin.svg' />
            <img src='/footer/youtube.svg' />
          </div>

        </div>
      </div>
      <hr className='bg-white' />
      <div className='flex justify-between mx-10 font-normal py-5 max-sm:flex-col max-sm:gap-10'>
        <p>© 2024 Logo Pvt Ltd</p>
        <p className='cursor-pointer hover:underline ease duration-300 transition-all'>Terms & Conditions</p>
      </div>
    </div>
  )
}

export default Footer