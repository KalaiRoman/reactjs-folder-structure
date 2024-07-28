// import React, { useState } from 'react';
// // import './Calculator.css'; // You can style your calculator with CSS

// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState('');

//   const handleClick = (value) => {
//     setInput(input + value);
//   };

//   const handleClear = () => {
//     setInput('');
//     setResult('');
//   };

//   const handleEqual = () => {
//     try {
//       setResult(eval(input)); // Note: eval() can be dangerous; consider a safer alternative for production
//     } catch (error) {
//       setResult('Error');
//     }
//   };

//   return (
//     <div className="calculator">
//       <div className="display">
//         <input type="text" value={input} readOnly />
//         <div className="result">{result}</div>
//       </div>
//       <div className="buttons">
//         <button onClick={() => handleClick('1')}>1</button>
//         <button onClick={() => handleClick('2')}>2</button>
//         <button onClick={() => handleClick('3')}>3</button>
//         <button onClick={() => handleClick('+')}>+</button>
//         <button onClick={() => handleClick('4')}>4</button>
//         <button onClick={() => handleClick('5')}>5</button>
//         <button onClick={() => handleClick('6')}>6</button>
//         <button onClick={() => handleClick('-')}>-</button>
//         <button onClick={() => handleClick('7')}>7</button>
//         <button onClick={() => handleClick('8')}>8</button>
//         <button onClick={() => handleClick('9')}>9</button>
//         <button onClick={() => handleClick('*')}>*</button>
//         <button onClick={() => handleClick('0')}>0</button>
//         <button onClick={() => handleClick('.')}>.</button>
//         <button onClick={handleClear}>C</button>
//         <button onClick={() => handleClick('/')}>/</button>
//         <button onClick={handleEqual}>=</button>
//       </div>
//     </div>
//   );
// };

// export default Calculator;


import React, { useEffect, useState } from 'react';
import { Profiler } from 'react';

function Calculator() {
  const [count, setCount] = useState(0);

  const [min,setMin]=useState(0)

  const onRenderCallback = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) => {
    setMin(startTime)
    console.log({ id, phase, actualDuration, baseDuration, startTime, commitTime, interactions });
  };

  useEffect(()=>{

  },[min])

  const secondsTotal = Math.floor(min / 1000);
  const minutes = Math.floor(secondsTotal / 60);
  const seconds = secondsTotal % 60;

  const formattedMinutes = `${minutes}`.padStart(2, "0");
  const formattedSeconds = `${seconds}`.padStart(2, "0");
  const finalTime = `${formattedMinutes}:${formattedSeconds}`;
  return (
    <div>





    <Profiler id="ExampleComponent" onRender={onRenderCallback}>
      <div>
        <p>Count: {count}</p>
        <div>
        Render Start Time: {finalTime}
        </div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </Profiler>
  


    </div>

  )
}

export default Calculator




// import React, { useEffect, useMemo, useState } from 'react'

// function Calculator() {

//     const [count,setCount]=useState(0);
//     const [another,setAnother]=useState(0);


//     useEffect(()=>{
// console.log("useeffect calling")
//     },[])

//     const handleCount=()=>{
//         console.log("another function calling")
//         setCount(count+1);
//     }

//     const handleChnageAnother=useMemo(()=>{
//         setAnother(another+1);
//     },[another])
//   return (
//     <div>
//         <div>
//             <button onClick={handleCount}>count</button>
// <CallFunction handleChnageAnother={handleChnageAnother}/>
//         </div>
//     </div>
//   )
// }

// export default Calculator





// function CallFunction({handleChnageAnother})
// {

//     console.log("waste of time calling")

//     return(
//         <>
//         another
//         <button onClick={handleChnageAnother}>another</button>

//         </>
//     )
// }