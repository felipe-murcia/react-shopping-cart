import React from 'react';
import CardProduct from '../CardProduct/CardProduct';
import useCollections from '../../hooks/useCollections';

interface CollectionsProps {
    handleCollection: (value:any) => void;
}


export const Collections = ({ handleCollection }: CollectionsProps) => {

    let { collections } = useCollections();

  return ( 
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>

        {
            collections.map((collection:any,i:number) => {
                // console.log('collection-',collection)
                let node = collection.node
                return(
                <div className="relative w-40 h-40 m-5" onClick={()=>handleCollection(node.id)} key={i}>
                    <img 
                        src={node.image.url}
                        alt={node.title}
                        className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-80  flex flex-col justify-center items-center rounded-lg">
                        <h2 className="text-white text-xl font-bold">{node.title}</h2>
                    </div>
                </div>
                )
            })
        }

    </div>
  )
}
