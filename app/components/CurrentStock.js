import React from 'react';

const CurrentStock = () => {
    return (
        <div className='container mx-auto bg-red-50'>
            <h3 className='text-2xl font-semibold mb-5'>Display Current Stock</h3>


            <table className='w-full text-center'>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>product A</td>
                        <td>27</td>
                        <td>200</td>

                    </tr>
                    <tr>
                        <td>product A</td>
                        <td>27</td>
                        <td>200</td>

                    </tr>
                    <tr>
                        <td>product A</td>
                        <td>27</td>
                        <td>200</td>

                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CurrentStock;