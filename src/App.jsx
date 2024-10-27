import { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import {themeOne }from "./Themes/themeOne";
import { themeThree } from "./Themes/themeThree";
import { themeTwo } from "./Themes/themeTwo";
import Footer from "./Footer";

const themes = [themeOne, themeTwo, themeThree]

const App = () => {
  const [result, setResult] = useState("0");
  const [toggle, setToggle] = useState(0)

useEffect(() => {
  document.body.classList.remove (
    "bg-themeOne-background-mainBackground",
      "bg-themeTwo-background-mainBackground",
      "bg-themeThree-background-mainBackground"
  );

  const themeClass = toggle === 0 ? "bg-themeOne-background-mainBackground" 
  : toggle === 1 
  ? "bg-themeTwo-background-mainBackground" 
  : "bg-themeThree-background-mainBackground";

  document.body.classList.add(themeClass)
 
}, [toggle])


  const currentTheme = themes[toggle]
 

  const handleClick = (e) => {
    const value = e.target.name;
    if (result === "0" || result === "") {
      setResult(value);
    } else {
       const opeartors = ["+", "-", "*", "/"];
       const lastChar = result[result.length-1]
       if(opeartors.includes(lastChar) && opeartors.includes(value)){
        return
       }
       setResult(result + value)
    }
  };

  const handleCheck = () => {
    try {
      const filteredResult = result.replace(/,/g, "")
      const evaluatedResult = eval(filteredResult)
      setResult(evaluatedResult.toLocaleString());
    } catch (error) {
      setResult(result);
    }

  };

  const handleReset = () => {
    setResult("0");
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };



const handleToggle = () =>{
  
 setToggle((prevToggle) => (prevToggle + 1) % 3 )
 setIsSelectedTheme(true)
 setThemeChange(true)
 }

 

  

  return (
    <>
      <div className="container w-[20rem bg-$">
        <div className={`grid grid-cols-2 gap-[6rem] grid-rows-1 items-center max-md:gap-[1rem]  ${currentTheme.containerText}`}>
          <span className="font-extrabold text-[1.4rem] max-md:text-[1.2rem] max-md:sm:text-[1rem]">calc</span>
          <div className="grid">
            <div className="flex items-center gap-10 ">
              <span className="text-xs font-extrabold ">THEME</span>
              <div>
                <div className="flex gap-4 font-bold">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                </div>
                <div className={`h-5 w-[4rem] rounded-full  cursor-pointer ${currentTheme.toggle}`} onClick={handleToggle}></div>
                <FaCircle className={`text-themeOne-redBackground relative bottom-[1rem]  h-[0.8rem] cursor-pointer animate-spin-slow  ${currentTheme.icon} ${currentTheme.iconHover}`} onClick={handleToggle} style={{ left: toggle === 0 ? "0.3rem": toggle === 1  ? "1.5rem": "2.8rem"  }}/>
              </div>
            </div>
          </div>
        </div>

        

        <form action="">
          <input
            type="text"
            value={result}
            style={{ textAlign: "end", fontSize: "30px",}}
            className={` px-[1rem] mt-[1rem] py-3 rounded-lg focus:outline-none place-items-end max-md:w-[20rem] w-[25rem] max-sm:w-[15rem]shadow-themeTwo-keys-darkOrangekey font-extrabold ${currentTheme.inputBackground} ${currentTheme.inputText}`}
          />
        </form>

        <div className={`grid grid-cols-4 grid-rows-5 mt-[1rem] w-[25rem] max-md:w-[20rem] max-sm:w-[15rem]bg-themeThree-background-veryDarkViolet p-[1rem] rounded-md ${currentTheme.mainScreen}`}>
          <button 
            className={`m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md  ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`}
            name="7"
            onClick={handleClick}
          >
            7
          </button>
          <button
            className={`m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md  ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`}
            name="8"
            onClick={handleClick}
          >
            8
          </button>
          <button
            className={` m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`}
            name="9"
            onClick={handleClick}
          >
            9
          </button>
          <button
            className={`text-text-white  m-[0.5rem]   font-bold text-[1.2rem] rounded-md ${currentTheme.delButton} ${currentTheme.delText} ${currentTheme.delShadow} ${currentTheme.delHover}`}
            id="del"
            onClick={handleDelete}
          >
            DEL
          </button>
          <button
            className={`m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`}
            name="4"
            onClick={handleClick}
          >
            4
          </button>
          <button
            className={`m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md  ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`}
            name="5"
            onClick={handleClick}
          >
            5
          </button>
          <button
            className={`m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`}
            name="6"
            onClick={handleClick}
          >
            6
          </button>
          <button
            className={`m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`}
            name="+"
            onClick={handleClick}
          >
            +
          </button>
          <button
            className= {`m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md  ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`}
            name="1"
            onClick={handleClick}
          >
            1
          </button>
          <button
            className= {`m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`} name="2"
            onClick={handleClick}
          >
            2
          </button>
          <button
            className= {`m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`}
            name="3"
            onClick={handleClick}
          >
            3
          </button>
          <button
            className= {`m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`}
            name="-"
            onClick={handleClick}
          >
            -
          </button>
          <button
            className= {`m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md  ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`}
            name="."
            onClick={handleClick}
          >
            .
          </button>
          <button
            className= {`m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`}
            name="0"
            onClick={handleClick}
          >
            0
          </button>
          <button
            className={`m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`}
            name="/"
            onClick={handleClick}
          >
            /
          </button>
          <button
            className= {`m-[0.5rem]  text-text-darkGrayishBlue font-extrabold text-[2rem] rounded-md ${currentTheme.buttonkeys} ${currentTheme.buttonText} ${currentTheme.buttonShadow} ${currentTheme.buttonHover}`}
            name="*"
            onClick={handleClick}
          >
            *
          </button>
          <button
            className= {`py-[0.3rem] m-[0.5rem] text-text-white font-bold text-[1.2rem] rounded-md col-span-2 ${currentTheme.resetButton} ${currentTheme.resetText} ${currentTheme.resetShadow} ${currentTheme.resetHover}`}
            id="reset"
            onClick={handleReset}
          >
            RESET
          </button>
          <button
            className= {`m-[0.5rem] text-text-white font-bold text-[2rem] rounded-md col-span-2 ${currentTheme.equalButton} ${currentTheme.equalShadow} ${currentTheme.equalHover}`}
            id="equal"
            onClick={handleCheck}
          >
            =
          </button>

         <Footer/>
        </div>
      </div>

      
      
    </>
  );
};

export default App;
