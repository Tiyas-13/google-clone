import React from 'react';
import { ColorRing} from 'react-loader-spinner';

export const Loading = () => {
    return(
        <div className="flex justify-center items-center">
            <ColorRing height={550} width={80}/>
        </div>
    )
}