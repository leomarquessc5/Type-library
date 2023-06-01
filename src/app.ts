import express from 'express';
import { router } from './routes';
import swaggerDocs from './swagger.json';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(express.json());

app.use(router);

app.use('/type-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { app };
