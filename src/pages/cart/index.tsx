import React from 'react'
import { useSelector } from 'react-redux'

const Cart:React.FC = () => {
    const cart = useSelector((s:any) => s.cart.value);
    console.log(cart);
    
  return (
    <div>Cart</div>
  )
}

export default Cart