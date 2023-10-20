import { data } from 'autoprefixer';
import React from 'react';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const AddProduct = () => {


    const handleAddProduct = e =>{
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const newProduct = {photo, name, brand, type, price, description,  rating}
        console.log(newProduct)

        fetch('https://cargo-server-8sbgitkhl-pinkus-projects.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data=>{ 
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        
    }
    return (
        <>
            <Helmet>
                <title>CarGo | Add Product</title>
            </Helmet>
            <section className="max-w-4xl p-6 mx-auto bg-gray-50 rounded-md shadow-md">
                <h2 className="text-3xl text-center font-bold capitalize">Add Your Product</h2>

                <form onSubmit={handleAddProduct}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="">Photo</label>
                            <input name="photo" type="text" placeholder='photoURL' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Name</label>
                            <input name="name" type="text" placeholder='Name' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Brand</label>
                            <input name="brand" type="text" placeholder='Brand Name' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Type</label>
                            <input name="type" type="text" placeholder='Vehicle Type' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Price</label>
                            <input name="price" type="text" placeholder='Price' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Description</label>
                            <input name="description" type="text" placeholder='Short description' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Rating</label>
                            <input name="rating" type="text" placeholder='Rating' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        
                    </div>

                    <div className="flex mx-auto mt-6">
                        <input type="submit" value="Add Product" className='w-full outline-white p-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]' />
                    </div>
                </form>
            </section>

        </>
    );
};

export default AddProduct;
