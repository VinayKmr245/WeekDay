import ColourPicker from "./components/ColourPicker";
function App() {
  return (
    <div className="App">
      {/* <div className="flex align-center justify-center">
        <p className=" p-4 m-4">Count is {result}</p>
        <button className="bg-green-400 p-4 m-4" onClick={incrementCount}>Increment</button>
        <button className="bg-red-400 p-4 m-4" onClick={decrementCount}>Decrement</button>
      </div> */}
      <ColourPicker/>
    </div>
  );
}

export default App;
