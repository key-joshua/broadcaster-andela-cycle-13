import jwt from 'jsonwebtoken';

const verfUser = (req, res, next) => {
  try {
    const decoded = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
    req.attachedWithInfo = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      status: 401,
      message: ' Hy !! Access denied, please provide Token ',
    });
  }
};

export default verfUser;
