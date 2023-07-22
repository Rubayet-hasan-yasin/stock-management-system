import React from 'react';

const Search = () => {
    return (
        <div className='container mx-auto bg-red-50'>
            <h3 className='text-2xl font-semibold mb-5'>Search A Product</h3>

            <div className='flex mb-6'>
                <input
                    type="text"
                    className="px-4 py-2 border flex-1 border-gray-300"
                    placeholder="Search..."
                />

                <select
                    className="px-4 py-2 border border-gray-300 rounded-l"
                    value="category"
                >
                    <option value="all">All Categories</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                    {/* Add more categories as needed */}
                </select>
            </div>
        </div>
    );
};

export default Search;