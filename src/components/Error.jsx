
import React from 'react'

const Error = ({children}) => {
    return (
        <div className="shadow-md hover:shadow-none text-center my-4 bg-red-600  rounded-md text-white hover:text-gray-900 ease-in duration-200 font-bold p-3 uppercase">
            {children}
        </div>
    )
}

export default Error
