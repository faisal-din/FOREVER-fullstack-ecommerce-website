import UserModel from '../models/userModel.js';

// add products to user cart
export const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await UserModel.findById(userId);
    const cartData = await userData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await UserModel.findByIdAndUpdate(userId, { cartData });

    res.status(200).json({
      success: true,
      message: 'Item added to cart successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// update user cart
export const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await UserModel.findById(userId);
    const cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await UserModel.findByIdAndUpdate(userId, { cartData });

    res.status(200).json({
      success: true,
      message: 'Cart updated successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// get user cart data
export const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await UserModel.findById(userId);
    const cartData = await userData.cartData;

    res.status(200).json({
      success: true,
      cartData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
