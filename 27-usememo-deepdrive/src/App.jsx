// use memo used for memoize the result of an expensive calculation. it store the calculated value and recalculates it when its dependencies change
//what is memoization - is a technique to improve the performance of code
//it is avoid expensive calculation on every render when the returned value is not change

// this is same as but its store the value it will render when state is change same as 
import { useMemo, useState } from "react";

function App() {

    const [number, setNumber] = useState(1);
    const [count, setCount] = useState(0);

    const square = useMemo(() => {
        console.log("Calculating...");
        return number * number;
    }, [number]);

    return (
        <div>

            <h1>Square: {square}</h1>

            <button onClick={() => setNumber(number + 1)}>
                Change Number
            </button>

            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>

        </div>
    );
}

export default App;