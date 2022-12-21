import React, { useEffect } from 'react';

const Popular = () => {
    useEffect(() => {
        console.log('Popular api call');
    },[])
    return (
        <div>
         <h1>popular</h1> 
        </div>
    );
}
export default Popular;