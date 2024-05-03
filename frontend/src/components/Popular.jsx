
import Item from "./Item"
import {useEffect, useState} from "react";


const Popular = () => {

    const [popular, setPopular] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/popularcollections')
            .then((res) => res.json())
            .then((data) => setPopular(data));
    },[]);
  return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="text-7xl font-bold text-dark-magenta tracking-tight text-center">Popular Products</h2>
            <hr className="w-full h-6 text-dark-magenta"/>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
                {popular.map((item, i) => (
                    <Item key={i} id={item.id} name={item.name}
                    image={item.image} description={item.description}
                    new_price={item.new_price} old_price={item.old_price}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Popular