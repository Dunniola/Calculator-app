/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl-themeOne-background-redBackground':'0px 5px 0px rgba(0, 0, 0, 0.5)' ,
        
        '5xl-themeThree-keys-darkMangentakeySha':'0px 5px 0px hsl(290, 70%, 36%)',

        '5xl-themeThree-keys-darkMangentakeySha':'0px 5px 0px hsl(285, 91%, 52%)',

        '5xl-themeTwo-keys-toggleBackground':'0px 10px 0px hsl(176, 100%, 44%)',

        "5xl-themeTwo-keys-moderateKeyCyan" : " 0px 5px 0px hsl(185, 58%, 25%)",

        "5xl-themeTwo-keys-darkOrangekey" : " 0px 5px 0px hsl(25, 99%, 27%)",

        '5xl-themeThree-keys-veryDarkCyan':'0px 5px 0px hsl(185, 58%, 25%)',

        '5xl-themeOne-background-darkBlueBackground':'0px 5px 0px hsl(224, 28%, 35%)',

        "5xl-themeTwo-background-toggleBackground":'0px 5px 0px hsl(0, 5%, 81%)',

        "5xl-themeOne-background-blue":'0px 5px 0px hsl(0, 5%, 81%)',
        
        // Toggle on hover 
        "bg-themeTwo-keys-orangeKey" : "", //themeOne & themeTwo
        "bg-themeThree-keys-softCyanShadow" : "", //themeThree



        //button on hover
        "bg-text-whiteText" : "", //themeOne&two
        "bg-themeThree-keys-darkMangentakeySha" : "", //ThemeThree


        //del & reset on hover 

        "bg-themeOne-background-darkRedKeyShadow " : "",
        "bg-themeTwo-keys-moderateKeyCyan" : "",
        "bg-themeThree-keys-darkMagentaKeys" : "",//themeThree

        
        // equal on hover 
        "bg-themeOne-background-veryDarkCyan" : "",
        "bg-themeOne-backgound-darkRedKeyShadow" : "",
        "bg-themeThree-keys-softCyanShadow" : "", //themeThree
        
      },
    },
    fontFamily : {
      League: ["League Spartan", "sans-serif"]
    },
    colors: {

      
      themeOne: {
        background : {
        mainBackground : "hsl(222, 26%, 31%)",
        darkBlueBackground: "hsl(225, 21%, 49%)",
        darkBlueKeyShadow: "hsl(224, 28%, 35%)",
        redBackground: "hsl(6, 63%, 50%)",
        darkRedKeyShadow: "hsl(6, 70%, 34%)",
        lightgrayishOrange: "hsl(30, 25%, 89%)",
        grayishOrange: "hsl(28, 16%, 65%)",
        darkBlue :" hsl(224, 36%, 15%)",
        blue : " hsl(223, 31%, 20%)"

        },
        
      },
      themeTwo: {
        background: {
          mainBackground : "hsl(0, 0%, 90%)",
          toggleBackground: "hsl(0, 5%, 81%)",
          screenBackground: "hsl(0, 0%, 93%)",
        },
        keys: {
          moderateKeyCyan: "hsl(185, 42%, 37%)",
          veryDarkCyan: "hsl(185, 58%, 25%)",
          orangeKey: "hsl(25, 98%, 40%)",
          darkOrangekey: "hsl(25, 99%, 27%)",
          lightGrayishYellow: "hsl(45, 7%, 89%)",
          darkGrayishOrange: "hsl(35, 11%, 61%)",
        },
        text:{
          veryDarkGrayishYellow: "hsl(60, 10%, 19%)",
        }
      
      },
      themeThree: {
        background: {
          mainBackground : "hsl(268, 75%, 9%)",
          tksBackground: "hsl(268, 71%, 12%)",
        },
        keys: {
          darkViolet: "hsl(281, 89%, 26%)",
          vividMagenta: "hsl(285, 91%, 52%)",
          pureCyanToggle: "hsl(176, 100%, 44%)",
          softCyanShadow: "hsl(177, 92%, 70%)",
          veryDarkVioletKeyBack: "hsl(268, 47%, 21%)",
          darkMangentakeySha: "hsl(290, 70%, 36%)",
          darkMagentaKeys : "hsl(300, 100%, 27)",
        },
      },
      text: {
        darkGrayishBlue: "hsl(221, 14%, 31%)",        
        lightYellow: "hsl(52, 100%, 62%)",
        veryDarkBlue: "hsl(198, 20%, 13%)",
        whiteText: "hsl(0, 0%, 100%)",
      },

      hover: {
      toggle: "hsl(28, 16%, 65%)", // For use with hover
      button: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
