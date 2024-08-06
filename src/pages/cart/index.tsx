import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { PatternFormat } from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllCart, ProductsSchemaCart } from '../../context/slice/cartSlice';
import { useNavigate } from 'react-router-dom';

export interface initialStateSchema {
  fname: string;
  tel: string;
  state: string;
  sity: string;
  email: string;
  lname: string;
}

const initialState: initialStateSchema = {
  fname: "",
  lname: "",
  tel: "",
  state: "",
  sity: "",
  email: "",
};

const BOT__TOKEN: string = "7039163383:AAHAschkQDggIAsrj6Oj6R3odtcTRRPXhms";
const USER__ID: string = "5980648858";

const Cart: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<initialStateSchema>(initialState);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const cart:ProductsSchemaCart[] = useSelector((s: any) => s.cart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice: number = cart.reduce(
    (sum: number, item: ProductsSchemaCart) =>
      sum + Math.round(item.price) * item.quantity,
    0
  );

  console.log(cart);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev: initialStateSchema) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

          // user
    let text: string = "User %0A%0A";
    text += `User Name: ${data.fname} ${data.lname} %0A`;
    text += `Tel: ${data.tel} %0A`;
    text += `State: ${data.state} %0A`;
    text += `Address: ${data.sity} %0A`;
    text += `Email: ${data.email} %0A`;


    // products
    cart?.map((el: ProductsSchemaCart, inx: number) => {
      text += `Product ${inx + 1} %0A`;
      text += `Title: ${el.title} %0A`;
      text += `Quantity: ${el.quantity} %0A`;
      text += `Price: $${el.price} %0A%0A`;
    });

    // total price
    text += `Total price: $${totalPrice} %0A%0A`;

    // send request
    let url = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${USER__ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.onreadystatechange = () => {
      if (api.readyState === 4) {
        setLoading(false);
        if (api.status === 200) {
          dispatch(deleteAllCart());
          navigate("/order-thanks");
        } else {
          console.error("Failed to send message", api.statusText);
        }
      }
    };
    api.send();


    console.log(data);

  };

  const [selectedOption, setSelectedOption] = useState<string>('');
  const [oplata, setOplate] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  const handleOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOplate(event.target.value);
  };

  console.log(selectedOption);

  const cartItem = cart?.map((product: ProductsSchemaCart) => (
    <>
        <div className='flex gap-2'>
                    <img src={product.images[0]} alt="" className='w-[100px] h-[100px] object-contain bg-slate-100' />
                    <div className='flex-1'> 
                        <p className='text-base text-[#031412] font-semibold'>{product.title}</p>
                       <div className="flex items-center justify-between w-full mt-3">
                          <span className='text-xl font-semibold'>{product.quantity} шт.</span>
                         <span className='text-xl font-extrabold text-[#9B0000]'>${Math.round(product.price) * product.quantity}</span>
                        </div>
                    </div>
                  </div>
        <div className="w-full h-[1px] bg-[#E6E8E7] my-6"></div>
    </>
  ))

  return (
    <div className='py-20'>
      <div className="container mx-auto px-4">
        <h1 className='text-[50px] text-center'>Оформить заказ</h1>
        <form action="" className='grid grid-cols-[950px_1fr] gap-8 items-start' onSubmit={handleSubmit}>

          <div>

          <div className='flex items-center gap-4 mb-8'>
            <div className='w-9 h-9 bg-[#0B3F37] text-2xl grid place-items-center text-white'>1</div>
            <span className='text-[27px] text-[#031412] font-semibold'>Личные данные</span>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <input
              type="text"
              placeholder='Имя'
              name='fname'
              value={data.fname}
              required
              onChange={handleChange}
              className='py-4 px-5 border-solid border-[1px] border-[#A1A1A1] text-xl outline-none rounded'
            />
            <input
              type="text"
              placeholder='Фамилия'
              name='lname'
              value={data.lname}
              onChange={handleChange}
              required
              className='py-4 px-5 border-solid border-[1px] border-[#A1A1A1] text-xl outline-none rounded'
            />
            <PatternFormat
              value={data.tel}
              onChange={handleChange}
              name="tel"
              format="+998 (##) ### ## ##"
              allowEmptyFormatting
              required
              mask="_"
              className='py-4 px-5 border-solid border-[1px] border-[#A1A1A1] text-xl outline-none rounded'
            />
            <input
              type="email"
              placeholder='E-mail'
              name='email'
              value={data.email}
              required
              onChange={handleChange}
              className='py-4 px-5 border-solid border-[1px] border-[#A1A1A1] text-xl outline-none rounded'
            />
            <input
              type="text"
              placeholder='Страна'
              name='state'
              required
              value={data.state}
              onChange={handleChange}
              className='py-4 px-5 border-solid border-[1px] border-[#A1A1A1] text-xl outline-none rounded'

            />

            <input
              type="text"
              placeholder='Город'
              name='sity'
              value={data.sity}
              onChange={handleChange}
              required
              className='py-4 px-5 border-solid border-[1px] border-[#A1A1A1] text-xl outline-none rounded'
            />
          </div>

          <div className="w-full h-[1px] bg-[#E6E8E7] my-10"></div>

          <div className='flex items-center gap-4 mb-8'>
            <div className='w-9 h-9 bg-[#0B3F37] text-2xl grid place-items-center text-white'>2</div>
            <span className='text-[27px] text-[#031412] font-semibold'>Доставка</span>
          </div>

          <div className='flex items-center gap-4'>
            <input required type="radio" checked={selectedOption === '1'}
              onChange={handleOptionChange} id='1' value='1' name='check' className='w-5 h-5' />
            <label htmlFor="1" className={`${selectedOption == "1" ? 'text-[#E4A16F]' : "text-[#A1A1A1]"} cursor-pointer text-xl font-semibold `}>Самовывоз</label>
          </div>
          <p className='text-sm max-w-[400px] mt-4 mb-8 text-[#031412]'>Вы можете забрать из нашего официального магазина по адресу Бажана 8-Б, Киев, 02132 Украина </p>
          <div className='flex items-center gap-4'>
            <input required checked={selectedOption === '2'} value='2'
              onChange={handleOptionChange} type="radio" id='2' name='check' className='w-5 h-5' />
            <label htmlFor="2" className={`${selectedOption == "2" ? 'text-[#E4A16F]' : "text-[#A1A1A1]"} cursor-pointer text-xl font-semibold `}>Новая почта</label>
          </div>
          <p className='text-sm max-w-[400px] mt-4 mb-8 text-[#031412]'>Вы можете забрать из нашего официального магазина по адресу Бажана 8-Б, Киев, 02132 Украина </p>
          <div className='flex items-center gap-4'>
            <input required checked={selectedOption === '3'}
              onChange={handleOptionChange} value='3' type="radio" id='3' name='check' className='w-5 h-5' />
            <label htmlFor="3" className={`${selectedOption == "3" ? 'text-[#E4A16F]' : "text-[#A1A1A1]"} cursor-pointer text-xl font-semibold `}>Курьер “Новая почта”</label>
          </div>
          <p className='text-sm max-w-[400px] mt-4 mb-8 text-[#031412]'>Вы можете забрать из нашего официального магазина по адресу Бажана 8-Б, Киев, 02132 Украина </p>

          <div className="w-full h-[1px] bg-[#E6E8E7] my-10"></div>

          <div className='flex items-center gap-4 mb-8'>
            <div className='w-9 h-9 bg-[#0B3F37] text-2xl grid place-items-center text-white'>3</div>
            <span className='text-[27px] text-[#031412] font-semibold'>Оплата</span>
          </div>

          <div className='flex items-center gap-4 mb-5'>
            <input
              checked={oplata === '11'}
              onChange={handleOption}
              value='11'
              type="radio"
              id='11'
              name='check1'
              className='w-5 h-5'
              required
            />
            <label htmlFor="11" className={`${oplata == "11" ? 'text-[#E4A16F]' : "text-[#A1A1A1]"} cursor-pointer text-xl font-semibold `}>При получении</label>
          </div>
          <div className='flex items-center gap-4'>
            <input
              checked={oplata === '12'}
              onChange={handleOption}
              required
              value='12'
              type="radio"
              id='12'
              name='check1'
              className='w-5 h-5'
            />
            <label htmlFor="12" className={`${oplata == "12" ? 'text-[#E4A16F]' : "text-[#A1A1A1]"} cursor-pointer text-xl font-semibold `}>Онлайн-оплата картой</label>
          </div>
          </div>

          <div className='shadow-md w-full p-2'>
            <div className="h-[300px] overflow-y-auto flex flex-col p-1">
                { cartItem }
            </div>
            <div className='p-10 pb-6'>
                <h3 className='text-4xl text-[#031412]'>Итого</h3>
                <span className='text-[40px] text-[#031412] font-extrabold'>${ totalPrice }</span>
            </div>
            <div className="w-full h-[1px] bg-[#E6E8E7]"></div>
            <div className='p-6'>
              <button className=' w-full text-center h-[52px] btn text-white text-xl font-semibold '>Оформить заказ</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Cart