'use client'
import React, { useEffect, useState } from 'react';

const CurrentStock = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('/api/product')
        .then(res=>res.json())
        .then(data=> setProduct(data.allproducts))
    }, [])


console.log(product);



    return (
        <div className='container mx-auto my-10'>
            <h3 className='text-2xl font-semibold mb-5'>Display Current Stock</h3>


            <table className='w-full table-auto'>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        product.map((item, index) => <tr key={index}>
                            <td className='border px-4 py-2'>{item.productSlug}</td>
                            <td className='border px-4 py-2'>{item.quantity}</td>
                            <td className='border px-4 py-2'>${item.price}</td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default CurrentStock;