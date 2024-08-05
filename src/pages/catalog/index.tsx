import React, { useState } from 'react';
import { useGetProductsQuery } from '../../context/api/productApi'
import Products from '../../components/products';
import CategoryComponent from '../../components/category';

const Catalog:React.FC = () => {
    const [category, setCategory] = useState<string>(
        sessionStorage.getItem("category") || ""
      );
      const params = { limit: 8 }
      const path = category ? `/category/${category}` : "";

      const { data, isFetching } = useGetProductsQuery({
        ...params,
        url: path,
      });
  return (
    <>
        <div className="container mx-auto px-4">
            <h1 className=' text-2xl desktop:text-[50px] mt-16'>Каталог</h1>
        </div>
        <CategoryComponent 
            isFetching={isFetching}
            setCategory={setCategory}
            category={category}
        />
        <Products products={data?.products}/>
    </>
  )
}

export default Catalog