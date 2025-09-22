import React from 'react'
import NavBar from '@/components/Partials/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Partials/Footer'

export default function SiteLayout() {
  return (
    <div className='bg-[#1A1A2E] min-h-screen w-full flex flex-col justify-between ' style={{
      scrollbarColor:'transparent',
      scrollbarWidth:'none'
    }} >
      <NavBar />
      <main className='flex flex-1 flex-col px-8 items-center'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
