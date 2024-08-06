import React, { useEffect } from 'react'
import { order } from '../../assets';
import { useNavigate } from 'react-router-dom';

const OrderThanks:React.FC = () => {
    const navigate = useNavigate();
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <div className='py-20'>
        <div className="container mx-auto px-4 grid place-items-center">
                <img src={order} alt="" />
                <h1 className='text-center text-5xl my-4'>Спасибо за заказ</h1>
                <span className='text-2xl font-semibold mb-5 text-center max-w-[340px]'>Мы свяжемся с вами в ближайшее время</span>
                <button onClick={() => navigate('/')} className='btn py-2 px-20  text-white text-xl text-semibold rounded'>Главная</button>
        </div>
    </div>
  )
}

export default OrderThanks