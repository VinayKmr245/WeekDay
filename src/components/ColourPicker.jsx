import classNames from "classnames";
import { useState } from "react";

const ColourPicker = ()=>{
    const [color,setColor]=useState("white");
    const changeColour = (e)=>{
        const clr=e.target.textContent.toLowerCase();
        setColor(clr);
    }
    // useEffect(() => {
    //     console.log(`Color changed to: ${color}`);
    //     // You can add other side effects here if needed
    // }, [color]);
    const colorClasses = {
        red: "bg-red-500",
        green: "bg-green-500",
        blue: "bg-blue-500",
        yellow: "bg-yellow-500",
        white: "bg-white"
    };
    return(
        <>
        <div
            className={classNames(colorClasses[color],"w-full h-screen duration-200")}
        >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button
                onClick={changeColour}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-red-600"
                >Red</button>
                <button
                onClick={changeColour}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-green-600"
                >Green</button>
                <button
                onClick={changeColour}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-blue-600"
                >Blue</button>
                <button  onClick={changeColour}
                className="outline-none px-4 py-1 rounded-full text-black shadow-lg bg-yellow-600"
                >Yellow</button>
            </div>
        </div>
        </div>
        </>
    )
}

export default ColourPicker

 {/* <div className="w-1/5 h-full border-black">
                <h1 className={classNames(`bg-${colour}-600`)}>Colour Picker is now diplaying {colour} Colour</h1>
                <ul>
                    <li>
                        <button onClick={(e)=>changeColour(e)}>Red</button >
                    </li>
                    <li>
                        <button onClick={(e)=>changeColour(e)}>Green</button >
                    </li>
                    <li>
                        <button onClick={(e)=>changeColour(e)}>Blue</button >
                    </li>
                </ul>
            </div>                 */}