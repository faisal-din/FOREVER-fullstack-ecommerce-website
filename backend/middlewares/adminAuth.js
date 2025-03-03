import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ message: 'Not authorized, Login Again' });
    }

    const decoded_token = jwt.verify(token, process.env.JWT_SECRET);
    if (
      decoded_token !==
      process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({ message: 'Not authorized, Login Again' });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};

export default adminAuth;
