"use client"

import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("La page a chargé")
    },[]);

    useEffect(() => {
        console.log("count a changé")
    },[count]);


    return (
        <div>
            <p>Nombre d'articles : {count}</p>
            <button onClick={() => setCount(count + 1)}>Ajouter</button>
            <button onClick={() => setCount(count - 1)}>Retirer</button>
        </div>
    );
};

export default Counter;