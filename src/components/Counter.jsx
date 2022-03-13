import {useState} from 'react'

export function Counter(){
    //let counter = useState(0)
    //está quebrando a array em duas variaveis
    const [counter, setCounter] = useState(0)

    function increment(){
        setCounter(counter+1); 
    }


    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment Butn</button>
        </div>        
    );
}


