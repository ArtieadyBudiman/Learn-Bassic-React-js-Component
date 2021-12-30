// import React from "react";
import Child2 from "./Child2";
import {useState, useEffect} from "react";

const Child1 = () => {
   const [count, setCount] = useState(0);
   const [click, setClick] = useState(0);

   const handleAdd = () => {
      setCount (count+1);
      setClick (click+1);
   }
   const handleMin = () => {
      if(count>0){
            setCount (count-1);
            setClick (click+1);
      }
   }
   const handleRes = () => {
      setCount (0);
      setClick (click+1);
   }
   useEffect(()=>{
      if(click % 5 === 0 && click !== 0){
         alert("'You have update 5 times' every 5 time")
      }
   }, [click]);
   
   return (
      <>
         <h3>Counter</h3>
         <div>Value is {count % 2 === 0 ? "Even":"Odd"}</div>
         <h2>{count}</h2>
         <button onClick={handleAdd}>ADD</button>
         <button onClick={handleMin}>MIN</button>
         <button onClick={handleRes}>RESET</button>
         <Child2 count ={count}/>
      </>
   );
};

export default Child1;
