import React from 'react'
import { choose_1 } from '../../assets';

interface dataSchema {
    title: string;
    desc: string;
    id:number;
}

const data:dataSchema[] = [
    {
        id:1,
        title: "Аутентичность",
        desc: 'Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.',
    },
    {
        id:2,
        title: "Изысканность",
        desc: 'Наши изделия из меди являются очень практичными. В то же время они наполнят особой магией ваш дом или рабочее....',
    },
    {
        id:3,
        title: 'Честная оплата',
        desc:"Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но все начинается c...."
    },
    {
        id:4,
        title:"Большой ассортимент",
        desc:"У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до крупногабаритного оборудования..."
    },
    {
        id:5,
        desc:"Вы можете получить нашу продукцию в кратчайшие сроки в любую точку земного шара.",
        title:"Доставка по всему миру"
    },
    {
        id:6,
        title: "Гарантия качества",
        desc: "Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. "
    },
    {
        id:7,
        title: "Удобство в использовании",
        desc: "Наши изделия из меди имеют уникальный дизайн, который разрабатывался нами с целью получения максимальной..."
    },
    {
        id:8,
        title: "Забота об окружающей среде",
        desc: "От 2 до 5% от стоимости каждого приобретенного товара в нашем магазине мы направляем на защиту...."
    }
]

const Choose:React.FC = () => {
  return (
    <div className='py-20 bg-[#f4f4f4]'>
        <div className="container mx-auto px-4">
            <h1 className='text-center text-2xl desktop:text-[50px] mb-11'>Почему выбирают нас</h1>
            <div className="grid grid-cols-4 gap-7">
                {
                    data?.map((item : dataSchema ) => (

                <div key={item.id} className="w-full">
                    <img src={choose_1} alt="" />
                    <h4 className='text-xl font-extrabold mb-3 mt-4 text-[#031412]'>{ item.title }</h4>
                    <p className='text-sm text-[#031412]'>{ item.desc }</p>
                    <a href="#" className='mt-3 block text-[#E4A16F] text-sm font-extrabold'>Читать больше</a>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Choose