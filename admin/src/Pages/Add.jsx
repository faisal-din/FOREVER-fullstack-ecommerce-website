import React from 'react';
import { assets } from '../assets/assets';

const Add = () => {
  return (
    <form className='flex flex-col w-full items-start gap-3'>
      {/* Upload Image */}
      <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'>
          <label htmlFor='image1'>
            <img
              className='w-20 cursor-pointer'
              src={assets.upload_area}
              alt=''
            />
            <input type='file' id='image1' hidden />
          </label>
          <label htmlFor='image2'>
            <img
              className='w-20 cursor-pointer'
              src={assets.upload_area}
              alt=''
            />
            <input type='file' id='image2' hidden />
          </label>
          <label htmlFor='image3'>
            <img
              className='w-20 cursor-pointer'
              src={assets.upload_area}
              alt=''
            />
            <input type='file' id='image3' hidden />
          </label>
          <label htmlFor='image4'>
            <img
              className='w-20 cursor-pointer'
              src={assets.upload_area}
              alt=''
            />
            <input type='file' id='image4' hidden />
          </label>
        </div>
      </div>

      {/* Product Data */}
      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Type here'
          required
        />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Write content here'
          required
        />
      </div>

      {/* Product category */}
      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select className='w-full  px-3 py-2' name='category' id='category'>
            <option value='Men'>Men</option>
            <option value='Women'>Women</option>
            <option value='Kids'>Kids</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Sub category</p>
          <select className='w-full  px-3 py-2' name='category' id='category'>
            <option value='Topwear'>Topwear</option>
            <option value='Bottomwear'>Bottomwear</option>
            <option value='Winterwear'>Winterwear</option>
          </select>
        </div>

        {/* product price */}
        <div>
          <p className='mb-2'>Product Price</p>
          <input
            className='w-full sm:w-[120px] px-3 py-2'
            type='number'
            placeholder='2500'
            required
          />
        </div>
      </div>

      {/* Product Sizes  */}
      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          <div className='bg-slate-200 px-3 py-1 cursor-pointer '>
            <p>S</p>
          </div>
          <div className='bg-slate-200 px-3 py-1 cursor-pointer '>
            <p>M</p>
          </div>
          <div className='bg-slate-200 px-3 py-1 cursor-pointer '>
            <p>L</p>
          </div>
          <div className='bg-slate-200 px-3 py-1 cursor-pointer '>
            <p>XL</p>
          </div>
          <div className='bg-slate-200 px-3 py-1 cursor-pointer '>
            <p>XXL</p>
          </div>
        </div>
      </div>

      {/* Add to bestseller */}
      <div className='flex items-center gap-2 mt-2'>
        <input type='checkbox' name='' id='bestseller' />
        <label htmlFor='bestseller' className='cursor-pointer'>
          Add to Bestseller
        </label>
      </div>

      {/* Submit Button */}
      <button
        type='submit'
        className='bg-gray-800 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer'
      >
        Add Product
      </button>
    </form>
  );
};

export default Add;
