import React from 'react';
import { production_1, production_2, production_3, production_4, production_5 } from '../../assets';

const Production:React.FC = () => {
  return (
    <>
        <div className="container mx-auto px-4 mb-20">
            <h1 className='text-center text-2xl desktop:text-[50px] mt-20 mb-11'>Наша продукция</h1>    
            <div className="grid  desktop:grid-cols-3 grid-cols-1 gap-[30px]">
                <div className="w-full h-[490px] relative ">
                    <img src={production_1} alt="" className='w-full h-full object-cover' />
                    <span className='absolute w-full text-white bottom-7 left-[50%] -translate-x-[50%] text-[30px] font-semibold text-center'>Для эфирных масел</span>
                </div>
                <div className="w-full desktop:h-[490px] h-[150px] relative">
                    <img src={production_2} alt="" className='w-full h-full object-cover' />
                    <span className='absolute w-full text-white bottom-7 left-[50%] -translate-x-[50%] desktop:text-[30px] text-[12px] font-semibold text-center'>Для гидролатов</span>
                </div>
                <div className="w-full h-[490px] relative">
                    <img src={production_3} alt="" className='w-full h-full object-cover' />
                    <span className='absolute w-full text-white bottom-7 left-[50%] -translate-x-[50%] text-[30px] font-semibold text-center'>Медная посуда</span>
                </div>
                <div className="w-full h-[490px] relative">
                    <img src={production_4} alt="" className='w-full h-full object-cover' />
                    <span className='absolute w-full text-white bottom-7 left-[50%] -translate-x-[50%] text-[30px] font-semibold text-center'>Аксессуары из меди</span>
                </div>
                <div className="w-full h-[490px] relative">
                    <img src={production_5} alt="" className='w-full h-full object-cover' />
                    <span className='absolute w-full text-white bottom-7 left-[50%] -translate-x-[50%] text-[30px] font-semibold text-center'>Индивидуальный заказ</span>
                </div>
                <div className="w-full h-[490px] relative">
                    <img src={production_1} alt="" className='w-full h-full object-cover' />
                    <span className='absolute w-full text-white bottom-7 left-[50%] -translate-x-[50%] text-[30px] font-semibold text-center'>Скидки и предложения</span>
                </div>
            </div>
        </div>   
    </>
  )
}

export default Production