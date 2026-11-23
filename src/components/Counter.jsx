import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // This code runs when the component mounts
        console.log("Component mounted");

        // Cleanup function runs when the component unmounts
        return () => {
            console.log("Component unmounted");
        };
    }, []); // Empty dependency array (for mount and unmount)

    useEffect(() => {
        // This code runs every time the 'count' state changes
        console.log(`Count updated: ${count}`);
    }, [count]); // Dependency array with 'count' (for updates)

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Counter;
