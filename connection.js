import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import apiDocumentation from './swagger.json';
import UserApp from './server/v2/api/routes/usersRoute';
import recordApp from './server/v2/api/routes/recordsRoute';

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const basePath = '/api/v2';
const docUrl = 'localhost:3000/api/v2/documentation/';

app.use(basePath, UserApp);
app.use(basePath, recordApp);
app.use(`${basePath}/documentation`, swaggerUi.serve, swaggerUi.setup(apiDocumentation));
app.listen(process.env.PORT || 3000, () => { console.log('server is running on port 3000'); });
app.get('**', (req, res) => {
  res.status(400).send({ status: 400,
    message: 'Hey !! You are Welcome to API version 1 of Broadcaster, Now Server Connetion is Live, go with this link below it all about documentation of this API',
    data: docUrl,
  });
});

export default app;
