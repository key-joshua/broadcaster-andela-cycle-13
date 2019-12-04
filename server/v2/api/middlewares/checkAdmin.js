import jwt from 'jsonwebtoken';

const verfyAdmin = (request, response, next) => {
  try {
    const incomToken = jwt.verify(request.headers.authorization, process.env.SECRET_KEY);
    if (incomToken.category === 'admin') {
      request.attachedWithInfos = incomToken;
      next();
    } else {
      return response.status(403).json({
        status: 403,
        message: ` Hy ${incomToken.firstname} !! This action is available for Admins only` });
    }
  } catch (error) {
    return response.status(401).json({ status: 401, message: ' Hy !! Access denied, please provide Token ' });
  }
};

export default verfyAdmin;
