
import { useLoaderData, useParams } from 'react-router-dom';
import Products from './Products';
import Advertise from '../../components/advertise/Advertise';

const Brands = () => {

    const { brand } = useParams();
    const brandProducts = useLoaderData();


    return (
        <div className='dark:text-black'>
            {
                brandProducts.length !== 0 ? <div className='px-6 md:px-16 lg:px-24 py-10 bg-gray-50'>
                <h1 className='text-5xl font-extrabold text-center my-10'>{brand}</h1>
                <Advertise brand={brand}></Advertise>

                <h1 className='text-4xl font-bold text-center my-10'>Our Available Products</h1>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    {
                        brandProducts.map(products => <Products key={products._id} products={products}></Products>)
                    }
                </div>
            </div> 
            : <div><h1 className='h-[80vh] flex items-center justify-center text-3xl'>There is no available products of this brand!</h1></div>
            }
            

        </div>

    );
};

export default Brands;