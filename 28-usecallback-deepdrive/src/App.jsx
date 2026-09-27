// use callback is used to memoize the function and return memoize function prevent function on re render when dependency array change

import React, { useCallback, useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Hello");
    }, []);

    return (
        <div>

            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>

            <Child handleClick={handleClick} />

        </div>
    );
}

const Child = React.memo(({ handleClick }) => {

    console.log("Child Rendered");

    return (
        <button onClick={handleClick}>
            Child Button
        </button>
    );
});

export default App;