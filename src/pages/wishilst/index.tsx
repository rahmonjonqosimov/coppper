import React, { useEffect } from 'react'
import Products from '../../components/products';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Wishlist:React.FC = () => {
    const wishes = useSelector((state:any) => state.heart.value);
    const navigate = useNavigate();
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <>
        {
            wishes.length ? 
            <Products products={wishes}/>
            : 
            <>
                <h1 className='text-center mt-20 mb-5 text-3xl'>Список желаний пуст</h1>
                <button onClick={() => navigate('/')} className='btn py-2 px-20 text-white text-xl font-semibold block mx-auto mb-20 rounded'>Главная</button>
            </>
        }
    </>
  )
}

export default Wishlist