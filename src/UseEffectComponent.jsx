import React, {useState, useEffect} from "react";

function UseEffectComponent(){

    
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = count
    }, [count]); // whenever count updates, we will run this code.

    function handleCount(){
        setCount(c => c + 1)
    }
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)



    {
    window.addEventListener("resize", handleResize)
    console.log("event listener added")
    }
    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(
        <div>
        <p>Count: {count}</p>
        <button onClick={handleCount}>Count + 1</button>

        <p>Window Height : {width}</p>
        <p>Window Widt: {height} </p>
        </div>
    )


}

export default UseEffectComponent