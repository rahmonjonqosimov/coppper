import React from 'react'

const Hero:React.FC = () => {
  return (
    <div className='bg-hero_bg h-[800px] bg-cover	bg-right-center'>
      <div className="container mx-auto px-4">
        <h1 className='text-[100px] text-white pt-10 mb-10'>Хит продаж</h1>
        <div className="w-[600px] h-[1px] bg-white"></div>
        <span className='text-[50px] block max-w-[530px] font-extrabold text-white mt-16'>Дистиллятор для эфирных масел </span>
        <div className='flex items-center justify-between max-w-[400px] my-10'> <h4 className='text-[30px] font-normal text-white'>Цена</h4> <p className='text-[30px] font-extrabold text-white'>4 906 грн</p> </div>
        <button className='py-2 btn px-20 text-[18px] text-white font-extrabold rounded'>Купить</button>
      </div>
    </div>
  )
}

export default Hero