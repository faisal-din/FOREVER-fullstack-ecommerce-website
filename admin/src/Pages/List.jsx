import { useEffect, useState } from 'react';
import { backendUrl, currency } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`, {
        headers: { token },
      });

      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        `${backendUrl}/api/product/remove`,
        { id },
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className='mb-2'>All Products List</p>

      <div className='flex flex-col gap-2'>
        {/* list table title */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm text-gray-500'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* Product List  */}

        {list.map((product, index) => (
          <div
            key={index}
            className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border  text-sm text-gray-500'
          >
            <img
              src={product.image[0]}
              alt={product.name}
              className='w-10 h-10 object-cover'
            />
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>
              {currency}
              {product.price}
            </p>
            <button
              onClick={() => removeProduct(product._id)}
              className='text-right md:text-center text-lg  cursor-pointer'
            >
              X
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
