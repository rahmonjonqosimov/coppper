import React from 'react'
import { ProductsSchema } from '../../context/types';
import { FaMinus, FaPlus } from "react-icons/fa";
import { GoHeart, GoHeartFill  } from "react-icons/go";
import { BsCheck } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { toggleHeart } from '../../context/slice/heartSlice';
import { addToCart, decrement, increment, ProductsSchemaCart, removeFromCart } from '../../context/slice/cartSlice';


interface SingleRouteProps {
    data: ProductsSchema | undefined;
}

const SingleRoute:React.FC<SingleRouteProps> = ( { data } ) => {

    const dispatch = useDispatch();
    const wishlist:ProductsSchema[] = useSelector((state:any )=> state.heart.value);
    const cart:ProductsSchemaCart[] = useSelector((state:any )=> state.cart.value);


    let isHeart : boolean =   wishlist.some((item:ProductsSchema) => item.id === data?.id);
    let isCart : boolean =   cart.some((item:ProductsSchema) => item.id === data?.id);

    const handleDecremet:( data: ProductsSchema ) => void = ( data ) => {
        console.log(data);

        if(cart.filter((item:ProductsSchemaCart) => item.id === data?.id)[0].quantity <= 1){
            dispatch(removeFromCart(data));
        }else{
            dispatch(decrement(data));
        }
        
    }

    
  return (
    <div className='mt-20'>
        <div className="container mx-auto px-4 flex gap-8">
            <div className="flex gap-8">
                <div className="grid grid-cols-1 w-[90px] gap-4">
                    <img src={ data?.images[0] } alt={ data?.title } className='w-full p-2 bg-slate-100 h-full object-contain cursor-pointer' />
                    <img src={ data?.images[0] } alt={ data?.title } className='w-full p-2 bg-slate-100 h-full object-contain cursor-pointer' />
                    <img src={ data?.images[0] } alt={ data?.title } className='w-full p-2 bg-slate-100 h-full object-contain cursor-pointer' />
                    <img src={ data?.images[0] } alt={ data?.title } className='w-full p-2 bg-slate-100 h-full object-contain cursor-pointer' />
                    <img src={ data?.images[0] } alt={ data?.title } className='w-full p-2 bg-slate-100 h-full object-contain cursor-pointer' />
                </div>
                <div className="w-[565px] h-[565px] bg-slate-100 relative">
                    <img src={ data?.images[0] } className="object-contain w-full h-full " alt={ data?.title } />
                    <div onClick={() => data && dispatch(toggleHeart( data ))} className="absolute top-0 right-0 bg-white px-1 py-3 cursor-pointer">
                        {
                            isHeart ? <GoHeartFill size={30} color='#E4A16F' /> : <GoHeart size={30}/>
                        }
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <h1 className='text-4xl text-[#031412]'>{ data?.title }</h1>
                <div className="flex items-center justify-between my-9">
                    <span className='text-base font-extrabold flex items-center gap-1'> <BsCheck size={22}/> В наличии</span>
                    <div className='text-base font-extrabold'> <span className='font-normal'>Артикул: </span>CP-0803 </div>
                </div>
                <div className="w-full h-[1px] bg-[#E6E8E7] mb-9"></div>
                <h4 className='text-base font-extrabold mb-4'>Описание</h4>
                <p className='text-base text-[#031412]'>{ data?.description }</p>
                <div className="w-full h-[1px] bg-[#E6E8E7] my-9"></div>
                <div className='flex items-center justify-between mb-8'>
                    <h3 className='text-4xl font-semibold'>Цена</h3>
                    <span className='text-[45px] font-extrabold text-[#9B0000]'> ${ data?.price } </span>
                </div>
                {
                isCart ? 
                <div className='w-[250px] h-[50px] border-solid border-[1px] border-[#E6E8E7] rounded-lg overflow-hidden grid grid-cols-3 place-items-center'>
                    <button onClick={() => data && handleDecremet(data)} className='w-full h-full flex items-center justify-center border-r-[1px] border-solid border-[#E6E8E7]'> <FaMinus/> </button>
                    <span className='text-xl font-semibold'> { cart.filter((item:ProductsSchemaCart) => item.id === data?.id)[0].quantity } </span>
                    <button disabled={ cart.filter((item:ProductsSchemaCart) => item.id === data?.id)[0].quantity >= 10 } onClick={() => data && dispatch(increment(data))} className='w-full h-full flex items-center justify-center border-l-[1px] border-solid border-[#E6E8E7] disabled:cursor-no-drop disabled:text-[#b8b8b8]'> <FaPlus/> </button>
                </div>
                : 
                <button onClick={() => data && dispatch(addToCart( data ))} className='w-[250px] h-[50px] bg-[#E4A16F] duration-300 text-xl text-white rounded-lg hover:bg-[#9B0000]'>Купить</button>
                }
                <div className="w-full h-[1px] bg-[#E6E8E7] my-9"></div>

            </div>
        </div>
        <div className="container mx-auto px-4 mt-16">
            <h1 className='text-4xl text-[#031412] mb-8'>Описание</h1>
            <p className='max-w-[1200px] text-base text-[#031412]'> Для всех, кто хочет самостоятельно получать гидролат или дистиллят, и быть уверенным в его качестве – у нас есть готовое и удобное решение. Современный дистиллятор «Феникс» станет для Вас отличным помощником. Полностью медный аппарат изготовлен на собственном производстве, на основании многолетнего опыта работы с медными дистилляторами.  <br /> <br />
                Гораздо практичней, чем алькитара, и ни в чём ей не уступающий. Даже наоборот, имеет ряд преимуществ, таких как толщина металла, надёжные, сварные швы, и деревянные ручки, которые не так нагреваются, как латунные. Соединение ароматизационной колонны с емкостью герметично и долговечно. Радиатор данного аппарата расходует в 3 раза меньше воды для охлаждения, в сравнении с алькитарой такого же объёма. <br /> <br />
                Замечательный аппарат прослужит для Вас долгие годы и будет радовать своего владельца гидролатом высокого качества. Оцените все преимущества паровой дистилляции и получайте гидролаты, в натуральности которых Вы можете быть уверенны. Аппарат полностью укомплектован и готов к работе. Объём перегонного куба – 8 литров. Объём колонны – 0,8 литра. Аппарат полностью укомплектован и готов к эксплуатации.
            </p>
            <div className="w-full h-[1px] bg-[#E6E8E7] mt-9"></div>

        </div>
    </div>
  )
}

export default SingleRoute