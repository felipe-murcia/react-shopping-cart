import React from 'react';
import useCollections from '../../hooks/useCollections';

interface CollectionsProps {
    handleCollection: (value: any) => void;
}

export const Collections = ({ handleCollection }: CollectionsProps) => {
    let { collections } = useCollections();

    return (
        <div
            className="flex gap-5 p-5 overflow-x-auto no-scrollbar"
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
            }}
        >
            {collections.map((collection: any, i: number) => {
                let node = collection.node;
                return (
                    <div
                        className="relative w-40 h-40 flex-shrink-0"
                        onClick={() => handleCollection(node.id)}
                        key={i}
                        style={{
                            margin: '0.3rem',
                        }}
                    >
                        <img
                            src={node.image.url}
                            alt={node.title}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-80 flex flex-col justify-center items-center rounded-lg">
                            <h2 className="text-white text-xl font-bold">{node.title}</h2>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
