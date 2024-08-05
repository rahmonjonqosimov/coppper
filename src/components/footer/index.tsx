import React from 'react'
import { logo } from '../../assets'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer:React.FC = () => {
  return (
    <div className='py-20 bg-[#394C3F]'>
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-2">
                <div className='max-w-[230px]'>
                    <img src={logo} alt="" />
                    <p className='text-sm text-[#ADADAD] my-6'>© 2021 “Copper Pro” 
                    Все права защищенны</p>
                    <p className='text-sm text-white'>Политика конфиденциальности</p>
                </div>
                <div className="w-full flex justify-between">
                        <ul>
                            <h3 className='text-[18px] font-extrabold text-white mb-[15px]'>Навигация</h3>
                            <li className='mb-[15px]'>
                                <Link to={'/catalog'} className='text-sm text-[#fff] mb-[15px]'>Каталог</Link>
                            </li>
                            <li className='mb-[15px]'>
                                <Link to={'/new'} className='text-sm text-[#fff] mb-[15px]'>Новости</Link>
                            </li>
                            <li className='mb-[15px]'>
                                <Link to={'/delivery'} className='text-sm text-[#fff] mb-[15px]'>Доставка</Link>
                            </li>
                            <li className='mb-[15px]'>
                                <Link to={'/about'} className='text-sm text-[#fff] mb-[15px]'>О нас</Link>
                            </li>
                            <li className='mb-[15px]'>
                                <Link to={'/contact'} className='text-sm text-[#fff] mb-[15px]'>Контакты</Link>
                            </li>
                        </ul>
                        <ul>
                            <h3 className='text-[18px] font-extrabold text-white mb-[15px]'>Каталог</h3>
                            <li className='mb-[15px]'>
                                <Link to={'/#'} className='text-sm text-[#fff] mb-[15px]'>Для эфирных масел</Link>
                            </li>
                            <li className='mb-[15px]'>
                                <Link to={'#'} className='text-sm text-[#fff] mb-[15px]'>Для гидролатов</Link>
                            </li>
                            <li className='mb-[15px]'>
                                <Link to={'#'} className='text-sm text-[#fff] mb-[15px]'>Медная посуда</Link>
                            </li>
                            <li className='mb-[15px]'>
                                <Link to={'#'} className='text-sm text-[#fff] mb-[15px]'>Аксессуары из меди</Link>
                            </li>
                            <li className='mb-[15px]'>
                                <Link to={'#'} className='text-sm text-[#fff] mb-[15px]'>Индивидуальный заказ</Link>
                            </li>
                            <li className='mb-[15px]'>
                                <Link to={'#'} className='text-sm text-[#fff] mb-[15px]'>Скидки и предложения</Link>
                            </li>
                        </ul>
                        <ul>
                            <h3 className='text-[18px] font-extrabold text-white mb-[15px]'>Контакты</h3>
                            <li className='mb-[15px]'>
                                <Link to={'#'} className='text-sm text-[#fff] mb-[15px]'>02132 Украина</Link>
                            </li>
                            <li className='mb-[15px]'>
                                <Link to={'#'} className='text-sm text-[#fff] mb-[15px]'>+38 (096) 990 67 56</Link>
                            </li>
                            <li className='mb-[15px]'>
                                <Link to={'#'} className='text-sm text-[#fff] mb-[15px]'>a.alambik@gmail.com</Link>
                            </li>
                            <li className='mb-[15px] flex items-center gap-2'>
                                <FaTwitter color='white' size={22}/>
                                <FaFacebookF color='white' size={22}/>
                                <FaInstagram color='white' size={22}/>
                            </li>
                           
                        </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer