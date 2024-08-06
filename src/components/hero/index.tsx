import React from 'react';
import image from '../../assets/images/hero image.png'

const Hero: React.FC = () => {
  return (
    <div className='py-20 bg-[#f4f4f4]'>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div>
          <h1 className='text-[100px] text-[#031412] pt-10 mb-10'>Хит продаж</h1>
          <div className="w-[600px] h-[1px] bg-[#031412]"></div>
          <span className='text-[50px] block max-w-[530px] font-extrabold text-[#031412] mt-16'>Дистиллятор для эфирных масел </span>
          <div className='flex items-center justify-between max-w-[400px] my-10'> <h4 className='text-[30px] font-normal text-[#031412]'>Цена</h4> <p className='text-[30px] font-extrabold text-[#031412]'>4 906 грн</p> </div>
          <button className='py-2 btn px-20 text-[18px] text-[#031412] font-extrabold rounded'>Купить</button>
        </div>
        <img src={ image } alt="" />
      </div>
    </div>
  )
}

export default Hero