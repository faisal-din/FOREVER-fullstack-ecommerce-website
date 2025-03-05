import { useState } from 'react';
import { assets } from '../assets/assets';

const Add = () => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('Men');
  const [price, setPrice] = useState('Topwear');
  const [sizes, setSizes] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);

  return (
    <form className='flex flex-col w-full items-start gap-3'>
      {/* Upload Image */}
      <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'>
          <label htmlFor='image1'>
            <img
              className='w-20 cursor-pointer'
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=''
            />
            <input
              onChange={(e) => {
                setImage1(e.target.files[0]);
              }}
              type='file'
              id='image1'
              hidden
            />
          </label>
          <label htmlFor='image2'>
            <img
              className='w-20 cursor-pointer'
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=''
            />
            <input
              onChange={(e) => {
                setImage2(e.target.files[0]);
              }}
              type='file'
              id='image2'
              hidden
            />
          </label>
          <label htmlFor='image3'>
            <img
              className='w-20 cursor-pointer'
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=''
            />
            <input
              onChange={(e) => {
                setImage3(e.target.files[0]);
              }}
              type='file'
              id='image3'
              hidden
            />
          </label>
          <label htmlFor='image4'>
            <img
              className='w-20 cursor-pointer'
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=''
            />
            <input
              onChange={(e) => {
                setImage4(e.target.files[0]);
              }}
              type='file'
              id='image4'
              hidden
            />
          </label>
        </div>
      </div>

      {/* Product Name */}
      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className='w-full max-w-[500px] px-3 py-2'
          type='text'
          placeholder='Type here'
          required
        />
      </div>

      {/* Product Description */}
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
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
          <select
            onChange={(e) => setCategory(e.target.value)}
            className='w-full  px-3 py-2'
            name='category'
            id='category'
          >
            <option value='Men'>Men</option>
            <option value='Women'>Women</option>
            <option value='Kids'>Kids</option>
          </select>
        </div>

        {/* Product Sub category */}
        <div>
          <p className='mb-2'>Product Sub category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className='w-full  px-3 py-2'
            name='category'
            id='category'
          >
            <option value='Topwear'>Topwear</option>
            <option value='Bottomwear'>Bottomwear</option>
            <option value='Winterwear'>Winterwear</option>
          </select>
        </div>

        {/* product price */}
        <div>
          <p className='mb-2'>Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
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
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes('S')
                  ? prev.filter((size) => size !== 'S')
                  : [...prev, 'S']
              )
            }
          >
            <p
              className={`${
                sizes.includes('S') ? 'bg-pink-100' : 'bg-slate-200'
              }  px-3 py-1 cursor-pointer`}
            >
              S
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes('M')
                  ? prev.filter((size) => size !== 'M')
                  : [...prev, 'M']
              )
            }
          >
            <p
              className={`${
                sizes.includes('M') ? 'bg-pink-100' : 'bg-slate-200'
              }  px-3 py-1 cursor-pointer`}
            >
              M
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes('L')
                  ? prev.filter((size) => size !== 'L')
                  : [...prev, 'L']
              )
            }
          >
            <p
              className={`${
                sizes.includes('L') ? 'bg-pink-100' : 'bg-slate-200'
              }  px-3 py-1 cursor-pointer`}
            >
              L
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes('XL')
                  ? prev.filter((size) => size !== 'XL')
                  : [...prev, 'XL']
              )
            }
          >
            <p
              className={`${
                sizes.includes('XL') ? 'bg-pink-100' : 'bg-slate-200'
              }  px-3 py-1 cursor-pointer`}
            >
              XL
            </p>
          </div>

          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes('XXL')
                  ? prev.filter((size) => size !== 'XXL')
                  : [...prev, 'XXL']
              )
            }
          >
            <p
              className={`${
                sizes.includes('XXL') ? 'bg-pink-100' : 'bg-slate-200'
              }  px-3 py-1 cursor-pointer`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>

      {/* Add to bestseller */}
      <div className='flex items-center gap-2 mt-2'>
        <input
          onChange={() => setBestSeller((prev) => !prev)}
          checked={bestSeller}
          className='w-3 h-3 cursor-pointer'
          type='checkbox'
          name=''
          id='bestseller'
        />
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
