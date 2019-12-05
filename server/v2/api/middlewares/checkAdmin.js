import jwt from 'jsonwebtoken';

const verfyAdmin = (req, res, next) => {
  try {
    const incomToken = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
    if (incomToken.category === 'admin') {
      req.attachedWithInfos = incomToken;
      next();
    } else {
      return res.status(403).json({
        status: 403,
        message: `${incomToken.firstname} !! This action is available for Admins only` });
    }
  } catch (error) {
    return res.status(401).json({ status: 401, message: 'Access denied, please provide Token' });
  }
};

export default verfyAdmin;
