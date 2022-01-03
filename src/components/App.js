// create your App component here
import React, { useState, useEffect } from "react";

export default function App(){
    const[isLoaded, setIsLoaded] = useState(false);
    const[item, setItems] = useState([]);


    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>res.json())
        .then((data)=>{
            setIsLoaded(true);
            setItems(data);
        });
    }, [])

    if(!isLoaded){
        return <p>Loading...</p>
    }else{
        return <div><img src={item.message} alt="A Random Dog" /></div>
    }
}