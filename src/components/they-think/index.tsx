import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { avatar } from '../../assets';

const TheyThink:React.FC = () => {
  return (
    <div className='container mx-auto px-4 py-20'>
         <h1 className='text-center text-2xl desktop:text-[50px] mb-16'>Что думают о нас</h1>
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
        <SwiperSlide>
            <div className="w-full px-7 py-4 shadow-lg">
                <img src={avatar} alt="" />
                <h3 className='text-[25px] my-[18px]'>Иван Иванов</h3>
                <p className='text-sm italic mb-[18px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                <span className='text-[18px] font-extrabold'>20.10.21</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full px-7 py-4 shadow-lg">
                <img src={avatar} alt="" />
                <h3 className='text-[25px] my-[18px]'>Иван Иванов</h3>
                <p className='text-sm italic mb-[18px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                <span className='text-[18px] font-extrabold'>20.10.21</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full px-7 py-4 shadow-lg">
                <img src={avatar} alt="" />
                <h3 className='text-[25px] my-[18px]'>Иван Иванов</h3>
                <p className='text-sm italic mb-[18px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                <span className='text-[18px] font-extrabold'>20.10.21</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full px-7 py-4 shadow-lg">
                <img src={avatar} alt="" />
                <h3 className='text-[25px] my-[18px]'>Иван Иванов</h3>
                <p className='text-sm italic mb-[18px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                <span className='text-[18px] font-extrabold'>20.10.21</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full px-7 py-4 shadow-lg">
                <img src={avatar} alt="" />
                <h3 className='text-[25px] my-[18px]'>Иван Иванов</h3>
                <p className='text-sm italic mb-[18px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                <span className='text-[18px] font-extrabold'>20.10.21</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full px-7 py-4 shadow-lg">
                <img src={avatar} alt="" />
                <h3 className='text-[25px] my-[18px]'>Иван Иванов</h3>
                <p className='text-sm italic mb-[18px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                <span className='text-[18px] font-extrabold'>20.10.21</span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="w-full px-7 py-4 shadow-lg">
                <img src={avatar} alt="" />
                <h3 className='text-[25px] my-[18px]'>Иван Иванов</h3>
                <p className='text-sm italic mb-[18px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                <span className='text-[18px] font-extrabold'>20.10.21</span>
            </div>
        </SwiperSlide>
            <SwiperSlide>
                <div className="w-full px-7 py-4 shadow-lg">
                    <img src={avatar} alt="" />
                    <h3 className='text-[25px] my-[18px]'>Иван Иванов</h3>
                    <p className='text-sm italic mb-[18px]'>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                    <span className='text-[18px] font-extrabold'>20.10.21</span>
                </div>
            </SwiperSlide>
      </Swiper>
    
    </div>
  )
}

export default TheyThink