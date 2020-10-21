import React from 'react';
import Collection from './Collection';
import {useSelector} from 'react-redux';

const Prints = () => {
    const allPrints = useSelector((state) => state.prints);
    return(
        <section> 
            {allPrints.map(item => {
                return(
                    <Collection key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} added={item.added} number={item.number}/>
                )
            })}
        </section>
    )
}

export default Prints;