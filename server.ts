require("dotenv").config();
import express from'express';
import routes from'./src/routes';

const app = express();
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 3333);