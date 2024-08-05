import React from 'react'
import { useGetProductsQuery, useGetProductByIdQuery } from '../../context/api/productApi'
import BestSelling from '../../components/best-selling'
import { useParams } from 'react-router-dom'
import TheyThink from '../../components/they-think'

const Detail:React.FC = () => {
    const { id } = useParams()
    let params = { limit:10 }
    const { data:detailProduct } = useGetProductByIdQuery( { id } )
    const { data } = useGetProductsQuery({ url:detailProduct ? `/category/${detailProduct.category}` : ``, ...params })

  return (
    <>
        <TheyThink/>
        <BestSelling bg='#f4f4f4' title='Вам также будет интересно…' data={data?.products} />
    </>
  )
}

export default Detail