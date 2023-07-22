import React from 'react';

const AddProduct = () => {
    return (
        <div className='container mx-auto bg-red-50'>
            <h3 className='text-2xl font-semibold mb-5'>Add A Product</h3>

            <form >
                <label>Product Name</label>
                <input type="text" name="" id="" className='w-full px-4 py-1 border border-gray-300'/>
                <label>Quantity</label>
                <input type="text" name="" id="" className='w-full px-4 py-1 border border-gray-300'/>
                <label>Price</label>
                <input type="text" name="" id="" className='w-full px-4 py-1 border border-gray-300'/>

                <button type='submit' className='bg-blue-500 text-white py-2 px-3 rounded my-5'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;