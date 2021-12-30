import {useState} from "react"

const Child2 = ({count}) => {
  //render value from counter to determine the number of cards that display
   const [display, setDisplay]=useState("grid");
   const [color, setColor]=useState("black");

   const handleDisplay = () => {(display==="list") ? setDisplay("grid") : setDisplay("list")};
   const switchColor = () => {(color==="white") ? setColor("black") : setColor("white")};

   return (
      <div className="my-list">
         <h3>My List</h3>
         <div>
            <button onClick={handleDisplay} type="button">Grid/List</button>
            <button onClick={switchColor} type="button">Black/White</button>
            {/* card block start here */}
               <div className = {(display === "grid") ? "list":"grid"}>
                  {[...Array(count)].map((el, index)=>(
                        <div 
                           className = {(color ==="black") ? "white":"black"} 
                           style={{ border: "1px solid #000", margin: "8px" }}
                        >
                           <h4>Card #{index+1}</h4>
                        </div>
                  ))}
               </div>
            {/* card block ends here */}
         </div>
      </div>
   );
};


export default Child2;
