import React from 'react';
import { news_1, news_2, news_3, news_4, news_5, news_6 } from '../../assets';

const data:{
    id:number,
    img:string,
}[] = [
    {
        id:1, 
        img:news_1,
    },
    {
        id:2, 
        img:news_2,
    },
    {
        id:3, 
        img:news_3,
    },
    {
        id:4, 
        img:news_4,
    },
    {
        id:5, 
        img:news_5,
    },
    {
        id:6, 
        img:news_6,
    },
]

const News:React.FC = () => {
    const newsItem: JSX.Element[] = data.map((item:{id:number, img:string}) => (
        <div key={item.id}>
                        <div className="w-full h-[210px] relative">
                            <img src={item.img} alt="" className='w-full h-full object-cover' />
                            <p className='text-xl font-semibold text-white absolute left-6 bottom-6'>Эфирные масла для улучшения сна</p>
                            <span className='btn py-2 px-3 text-white absolute top-0 right-0'>27.10.21</span>
                        </div>
                        <p className='text-sm text-[#031412] mb-5 mt-7'>Пользу эфирных масел трудно переоценить. Они, безусловно, полезны для человека, но если говорить о домашних животных, то здесь возникают некоторые нюансы. Необходимо строго придерживаться определенных правил....</p>
                        <a href="#" className='mt-3 block text-[#E4A16F] text-sm font-extrabold'>Читать больше </a>
            </div>
    ))
  return (
    <div className='py-20'>
        <div className="container mx-auto px-4">
            <h1 className='text-2xl desktop:text-[50px] mb-10'>Новости</h1>
            <div className="grid grid-cols-2 gap-[30px]">
                        { newsItem }
            </div>
        </div>
    </div>
  )
}

export default News