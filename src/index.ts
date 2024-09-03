import express from 'express';
import productRoutes from './routes/productRoutes';

const app = express();
const PORT = process.env.PORT || 3050;

app.use(express.json());
app.use('/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




