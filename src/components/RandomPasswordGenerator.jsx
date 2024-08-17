import React, { useCallback, useEffect, useState } from "react";

const RandomPasswordGenerator = () => {
  const [isCharecterAllowed, setIsCharecterAllowed] = useState(false);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [password,setPassword]= useState("");
const [passwordLength,setPasswordLength]= useState(6);

  const generatePassword = useCallback(() => {
    console.log("Generate Password");
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isNumberAllowed) str += "0123456789"
    if (isCharecterAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(var i=0;i<passwordLength;i++){
        pass += str.charAt(Math.floor(Math.random()*str.length+1))
    }
    setPassword(pass)
  },[isCharecterAllowed,isNumberAllowed,passwordLength])

  useEffect(() => {
     generatePassword();
  }, [isCharecterAllowed,isNumberAllowed,passwordLength]);

  const copyPasswordToClipboard = useCallback(() => {
    console.log("current password",password.current)
    password.current?.select();
    password.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

// ref={password}


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={passwordLength}
         className='cursor-pointer'
         onChange={(e) => {setPasswordLength(e.target.value)}}
          />
          <label>Length: {passwordLength}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={isNumberAllowed}
          id="numberInput"
          onChange={() => {
              setIsNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={isCharecterAllowed}
              id="characterInput"
              onChange={() => {
                  setIsCharecterAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
      </div>
    </>
  );
};

export default RandomPasswordGenerator;
