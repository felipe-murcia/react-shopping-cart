import React from 'react';
import CardProduct from '../CardProduct/CardProduct';

interface SectionProductProps {
    data: any[];
}


export const SectionProduct = ({
    data = []
}: SectionProductProps) => {

  return ( 
    <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                     {
                        data?.map((product,i) => <CardProduct key={i} data={product} />)
                     } 
                </div>
            </div>
        </section>
  )
}
