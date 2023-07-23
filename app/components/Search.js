import React from 'react';

const Search = () => {
    return (
        <div className='container mx-auto my-10'>
            <h3 className='text-2xl font-semibold mb-5'>Search A Product</h3>

            <div className='flex mb-6'>
                <input
                    type="text"
                    className="px-4 py-2 border flex-1 border-gray-300"
                    placeholder="Search..."
                />

                <select
                    className="px-4 py-2 border border-gray-300 rounded-l"
                >
                    <option >All Categories</option>
                    <option >Category 1</option>
                    <option >Category 2</option>
                    <option >Category 3</option>
                    {/* Add more categories as needed */}
                </select>
            </div>
        </div>
    );
};

export default Search;