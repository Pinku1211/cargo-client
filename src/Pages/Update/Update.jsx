import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

    const product = useLoaderData();

    const {_id, brand, name, type,  photo, rating, price} = product;

    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const rating = form.rating.value
        const UpdatedProduct = {photo, name, brand, type, price, rating}

        fetch(`http://localhost:5000/products/${brand}/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            <section className="max-w-4xl p-6 my-10 mx-auto bg-gray-50 rounded-md shadow-md">
                <h2 className="text-3xl text-center font-bold capitalize">Update Your Product</h2>

                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="">Photo</label>
                            <input name="photo" defaultValue={photo} type="text" placeholder='photoURL' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Name</label>
                            <input name="name" defaultValue={name} type="text" placeholder='Name' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Brand</label>
                            <input name="brand" defaultValue={brand} type="text" placeholder='Brand Name' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Type</label>
                            <input name="type" defaultValue={type} type="text" placeholder='Vehicle Type' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Price</label>
                            <input name="price" defaultValue={price} type="text" placeholder='Price' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="">Rating</label>
                            <input name="rating" defaultValue={rating} type="text" placeholder='Rating' className="block w-full px-4 py-2 mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                        </div>
                        
                    </div>

                    <div className="flex mx-auto my-6">
                        <input type="submit" value="Update Product" className='w-full outline-white p-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]' />
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Update;