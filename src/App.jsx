import CurrencyInput from "./components/Currency/CurrencyInput";
function App() {
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-black">
      {/* <div className="flex align-center justify-center">
        <p className=" p-4 m-4">Count is {result}</p>
        <button className="bg-green-400 p-4 m-4" onClick={incrementCount}>Increment</button>
        <button className="bg-red-400 p-4 m-4" onClick={decrementCount}>Decrement</button>
      </div> */}
      {/* <ColourPicker/> */}
      {/* <RandomPasswordGenerator/> */}
      <CurrencyInput/>
    </div>
  );
}

export default App;
