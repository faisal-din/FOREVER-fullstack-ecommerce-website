import orderModel from '../models/orderModel.js';
import UserModel from '../models/userModel.js';

// Place order using COD method --> /api/order/place
export const placeOrderCOD = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: 'COD',
      // orderStatus: 'success',
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await UserModel.findByIdAndUpdate(userId, { cartData: {} });
    res.status(200).json({
      success: true,
      message: 'Order placed successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Place order using Stripe method --> /api/order/stripe
export const placeOrderStripe = async (req, res) => {};

// Place order using Razorpay method --> /api/order/razorpay
export const placeOrderRazorpay = async (req, res) => {};

// Get all order data for admin panel --> /api/order/list
export const getAllOrders = async (req, res) => {};

// user order data for frontend --> /api/order/userorders
export const getUserOrders = async (req, res) => {};

// upadae order status --> /api/order/status
export const updateOrderStatus = async (req, res) => {};
