import React from 'react';



export const CardProduct = ({ data }:any) => {

    // console.log('data item-',data)
    let node = data?.node

    let getPrice = (dataPrice) => {

        let price = dataPrice?.edges[0]?.node?.price.amount
        return price

    }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img className="rounded-t-lg" src={node?.featuredImage?.url} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" >{node?.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-2" data-tooltip-target="tooltip-default" >{node?.description}.</p>

            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-lime-800 dark:text-white">${getPrice(node?.variants)}</span>
                <a href="#" className="text-white bg-lime-700 hover:bg-lime-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar</a>
            </div>
 
        </div>
    </div>

  )

}

export default CardProduct
