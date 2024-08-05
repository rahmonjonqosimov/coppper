import React from 'react'
import { cart, like, logo, user } from '../../assets'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar:React.FC = () => {
  const wishes = useSelector((state:any) => state.heart.value)
  return (
    <div className='bg-[#394C3F] pb-[40px]'>
      <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to={'/'}>
                <img src={logo} alt="Logo" />
              </Link>
              <ul className='flex items-center gap-12'>
                <li className='relative group'>
                  <Link to={'/catalog'} className='text-base font-semibold text-white duration-200 hover:text-[#E4A16F]'>Каталог</Link>
                  <span className='w-full h-[2px] bg-[#E4A16F] absolute -bottom-2 duration-300 left-0 scale-x-0 origin-left group-hover:scale-x-100'></span>
                </li>
                <li className='relative group'>
                  <Link to={'/news'} className='text-base font-semibold text-white duration-200 hover:text-[#E4A16F]'>Новости</Link>
                  <span className='w-full h-[2px] bg-[#E4A16F] absolute -bottom-2 duration-300 left-0 scale-x-0 origin-left group-hover:scale-x-100'></span>
                </li>
                <li className='relative group'>
                  <Link to={'/'} className='text-base font-semibold text-white duration-200 hover:text-[#E4A16F]'>Доставка</Link>
                  <span className='w-full h-[2px] bg-[#E4A16F] absolute -bottom-2 duration-300 left-0 scale-x-0 origin-left group-hover:scale-x-100'></span>
                </li>
                <li className='relative group'>
                  <Link to={'/about'} className='text-base font-semibold text-white duration-200 hover:text-[#E4A16F]'>О нас</Link>
                  <span className='w-full h-[2px] bg-[#E4A16F] absolute -bottom-2 duration-300 left-0 scale-x-0 origin-left group-hover:scale-x-100'></span>
                </li>
                <li className='relative group'>
                  <Link to={'/'} className='text-base font-semibold text-white duration-200 hover:text-[#E4A16F]'>Контакты</Link>
                  <span className='w-full h-[2px] bg-[#E4A16F] absolute -bottom-2 duration-300 left-0 scale-x-0 origin-left group-hover:scale-x-100'></span>
                </li>
           
              </ul>
              <ul className='flex items-center gap-5'>
                <li >
                  <Link to={'/wishes'} className='pt-10 bg-white block p-[10px] relative'>
                        <span className='absolute top-3 left-[50%] -translate-x-[50%] text-[#E4A16F]'>{wishes.length}</span>
                        <img src={ like } alt=""/>
                  </Link>
                </li>
                <li>
                  <Link to={'/'} className='pt-10 bg-white block p-[10px]'>
                        <img src={ user } alt="" />
                  </Link>
                </li>
                <li> 
                  <Link to={'/cart'} className='pt-10 bg-white block p-[10px]'>
                        <img src={ cart } alt="" /> 
                  </Link>
                </li>
              </ul>
            </div>
      </div>
    </div>
  )
}

export default Navbar