import React from 'react';
import Swal from 'sweetalert2';

const CartProducts = ({ product, carts, setCarts }) => {

    const {brand, _id, name, photo, price, rating, type} = product;

    const handleDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                console.log(_id)

                fetch(`http://localhost:5000/cart/${_id}`,{
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your product has been deleted.',
                            'success'
                          )
                          const remaining = carts.filter(cart => cart._id !== id);
                          setCarts(remaining)
                    }
                    
                })
              
            }
          })
    }

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='h-full w-full lg:w-[330px]' src={photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brand}</h2>
                <p><span className='font-semibold'>Model:</span> {name}</p>
                <p><span className='font-semibold'>Type:</span> {type}</p>
                <p><span className='font-semibold'>Price:</span> {price}</p>
                <p><span className='font-semibold'>Rating:</span> {rating}</p>
                <button onClick={() => handleDelete(_id)} className="outline-white p-2 rounded-lg hover:bg-[#ff6969] hover:text-white border border-[#ff6969] text-[#ff6969]">Remove From Cart</button>
            </div>
        </div>
    );
};

export default CartProducts;