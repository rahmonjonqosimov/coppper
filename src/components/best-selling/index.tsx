import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { ProductsSchema } from '../../context/types';
import Card from '../card';


interface BestSellingProps {
    data: ProductsSchema[] | undefined;
    bg:string;
    title:string;
}

const BestSelling:React.FC<BestSellingProps> = ({ data, bg, title }) => {

    const navigate = useNavigate();
    
  return (
    <div className={`py-20 bg-[${bg}]`}>
    <div className='container mx-auto px-4 '>
        <h1 className='text-center text-2xl desktop:text-[50px] mb-16'>{title.toUpperCase()}</h1>
           <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper pb-10"
      >
        {
            data?.map((item:ProductsSchema) => {
                return (
                    <SwiperSlide key={item.id}>
                        <Card product={item}/>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
      <button onClick={() => navigate('/catalog')} className='py-2 px-16 bg-[#141718] shadow-lg rounded-lg text-white mt-10 mx-auto block btn'> Перейти в каталог </button>
    </div>
    </div>
  )
}

export default BestSelling