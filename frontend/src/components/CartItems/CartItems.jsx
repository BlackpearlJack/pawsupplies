import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { XMarkIcon } from '@heroicons/react/24/outline';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  // Calculate tax (10%)
  const taxRate = 0.10;
  const taxAmount = getTotalCartAmount() * taxRate;

  // Determine shipping status
  const shippingCost = getTotalCartAmount() > 150 ? 0 : 10;

  return (
    <div className="max-w-md mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="flex justify-between items-center p-4 border-b">
                  <div className="flex items-center">
                    <img className="h-16 w-16 object-cover mr-4" src={e.image} alt="carticon-product-icon" />
                    <div>
                      <p className="font-semibold">{e.name}</p>
                      <p className="text-sm">{e.new_price}</p>
                      <p className="text-sm">{cartItems[e.id]}</p>
                    </div>
                  </div>
                  <XMarkIcon className="w-5 h-auto cursor-pointer" onClick={() => { removeFromCart(e.id) }} />
                  <p className="font-semibold">{e.new_price * cartItems[e.id]}</p>
                </div>
              </div>
            )
          }
        })}
        <div className="mt-6">
          <div className="flex justify-between">
            <span>SubTotal</span>
            <span>${getTotalCartAmount()}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Estimate</span>
            <span>{shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax Estimate (10%)</span>
            <span>${taxAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span>${(getTotalCartAmount() + taxAmount + shippingCost).toFixed(2)}</span>
          </div>
        </div>
      </div>
      <button className='w-full bg-dark-green text-gray-blue p-4 font-bold'>Proceed To Checkout</button>
    </div>
  )
}

export default CartItems;
