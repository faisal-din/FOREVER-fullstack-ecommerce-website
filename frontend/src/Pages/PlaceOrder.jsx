import { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import CartTotal from '../Components/CartTotal';
import Title from '../Components/Title';
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // setFormData({ ...formData, [name]: value });
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };
      switch (paymentMethod) {
        // API calls for COD payment method
        case 'cod': {
          const response = await axios.post(
            `${backendUrl}/api/order/place`,
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            setCartItems({});
            navigate('/orders');
          } else {
            toast.error(response.data.message);
          }
          break;
        }

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'
    >
      {/* --------------- Left Side ----------------------- */}

      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3 '>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex flex-col sm:flex-row  gap-3'>
          <input
            name='firstName'
            onChange={onChangeHandler}
            value={formData.firstName}
            type='text'
            required
            placeholder='First Name'
            className='border  border-gray-300 rounded py-1.5 px-3.5 w-full'
          />
          <input
            name='lastName'
            onChange={onChangeHandler}
            value={formData.lastName}
            type='text'
            required
            placeholder='Last Name'
            className='border  border-gray-300 rounded py-1.5 px-3.5 w-full'
          />
        </div>
        <input
          name='email'
          onChange={onChangeHandler}
          value={formData.email}
          type='email'
          required
          placeholder='Email Address'
          className='border  border-gray-300 rounded py-1.5 px-3.5 w-full'
        />
        <input
          name='street'
          onChange={onChangeHandler}
          value={formData.street}
          type='text'
          required
          placeholder='Street'
          className='border  border-gray-300 rounded py-1.5 px-3.5 w-full'
        />
        <div className='flex flex-col sm:flex-row  gap-3'>
          <input
            name='city'
            onChange={onChangeHandler}
            value={formData.city}
            type='text'
            required
            placeholder='City'
            className='border  border-gray-300 rounded py-1.5 px-3.5 w-full'
          />
          <input
            name='state'
            onChange={onChangeHandler}
            value={formData.state}
            type='text'
            required
            placeholder='State'
            className='border  border-gray-300 rounded py-1.5 px-3.5 w-full'
          />
        </div>
        <div className='flex flex-col sm:flex-row  gap-3'>
          <input
            name='zipcode'
            onChange={onChangeHandler}
            value={formData.zipcode}
            type='text'
            required
            placeholder='Zipcode'
            className='border  border-gray-300 rounded py-1.5 px-3.5 w-full'
          />
          <input
            name='country'
            onChange={onChangeHandler}
            value={formData.country}
            type='text'
            required
            placeholder='Country'
            className='border  border-gray-300 rounded py-1.5 px-3.5 w-full'
          />
        </div>
        <input
          name='phone'
          onChange={onChangeHandler}
          value={formData.phone}
          type='number'
          required
          placeholder='Phone '
          className='border  border-gray-300 rounded py-1.5 px-3.5 w-full'
        />
      </div>

      {/* --------------- Right Side ----------------------- */}

      <div className='mt-8'>
        <div className='mt8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />

          {/* -------------- Payment method selection -------------- */}

          <div className='flex flex-col lg:flex-row gap-4'>
            <div
              onClick={() => {
                setPaymentMethod('stripe');
              }}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
            >
              <p
                className={` min-w-3.5 h-3.5 border rounded-full ${
                  paymentMethod === 'stripe' ? 'bg-green-400' : ''
                }`}
              ></p>
              <img className='h5 mx-4' src={assets.stripe_logo} alt='' />
            </div>
            <div
              onClick={() => {
                setPaymentMethod('razorpay');
              }}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
            >
              <p
                className={` min-w-3.5 h-3.5 border rounded-full ${
                  paymentMethod === 'razorpay' ? 'bg-green-400' : ''
                }`}
              ></p>
              <img className='h5 mx-4' src={assets.razorpay_logo} alt='' />
            </div>
            <div
              onClick={() => {
                setPaymentMethod('cod');
              }}
              className='flex items-center gap-3 border p-2 px-3 cursor-pointer'
            >
              <p
                className={` min-w-3.5 h-3.5 border rounded-full ${
                  paymentMethod === 'cod' ? 'bg-green-400' : ''
                }`}
              ></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>
                {' '}
                CASH ON DELIVARY
              </p>
            </div>
          </div>

          {/* -------------- Payment method selection -------------- */}

          <div className='w-full text-end mt-8'>
            <button
              type='submit'
              // onClick={() => navigate('/orders')}
              className='bg-black text-white px-16 py-3 text-sm cursor-pointer'
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
