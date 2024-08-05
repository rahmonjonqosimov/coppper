import React from 'react'
import Hero from '../../components/hero'
import Production from '../../components/production'
import BestSelling from '../../components/best-selling'
import { useGetProductsQuery } from '../../context/api/productApi'
import TheyThink from '../../components/they-think'
import Choose from '../../components/choose'
import { img } from '../../assets'

const Home:React.FC = () => {
  let params = { limit:10 }
  const { data } = useGetProductsQuery({ url:'' , ...params })
  return (
    <>
      <Hero/>
      <Production/>
      <BestSelling bg={"#F4F4F4"} data={data?.products} title="Лучшие продажи"/>
      <BestSelling bg={"#fff"} data={data?.products} title="новинки"/>
      <div className="container mx-auto px-4">
          <img src={img} alt="" className='w-full'/>
      </div>
      <BestSelling bg={"#fff"} data={data?.products} title="мы рекомендуем"/>
      <BestSelling bg={"#F4F4F4"} data={data?.products} title="Скидки"/>
      <TheyThink/>
      <Choose/>
    </>
  )
}

export default Home