'use client'
import React from 'react';

const AddProduct = () => {

    const addProduct = async(event) => {
        event.preventDefault();

        const form = event.target;
        const productSlug = form.productSlug.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        

        const productData = { productSlug, quantity, price }

        

        try{
            const response = await fetch('/api/product', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(productData)
            })
            console.log('run', productData);
            if(response.ok){
                console.log('product added succesfully')
            }
            else{
                console.log('Error adding product')
            }
        }
        catch(error){
            console.log("Error:",error)
        }

      };


    return (
        <div className='container mx-auto bg-red-50'>
            <h3 className='text-2xl font-semibold mb-5'>Add A Product</h3>

            <form onSubmit={addProduct}>
                <label>Product Slug</label>
                <input type="text" name="productSlug" id="" className='w-full px-4 py-1 border border-gray-300'/>

                <label>Quantity</label>
                <input type="text" name="quantity" id="" className='w-full px-4 py-1 border border-gray-300'/>

                <label>Price</label>
                <input type="text" name="price" id="" className='w-full px-4 py-1 border border-gray-300'/>

                <button type='submit' className='bg-blue-500 text-white py-2 px-3 rounded my-5'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;