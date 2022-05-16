document.addEventListener("DOMContentLoaded", () => {
  createSquares();
  function createSquares() {
    const gameBoard = document.getElementById("board");
    for (let i = 0; i < 30; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", i + 1);
      gameBoard.appendChild(square);
    }
  }
});

const alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

window.onload = function () {
  var value = 1;            // ID OF GRID
  var flag= false;          // IF ROW IS COMPLETED OR NOT
  var isColored = [0,0,0,0,0];
  const given_string = "right";
  var cnt_given_string = new Array(26);
  for(let i=0;i<26;i++){
      cnt_given_string[i]=0;
  }
  for(let i=0;i<5;i++){
      cnt_given_string[given_string[i].charCodeAt()-97]++;
  }
 
  
    let temp= "";



  window.onkeydown = function (l) {
      if(l.keyCode === 13 && value%5===0){  // PRESS ENTER FOR NEW LINE
        

        for(let i=0;i<5;i++){
            if(given_string[i]===temp[i]){
                var demo = document.getElementById(value - (5-i-1));
                cnt_given_string[given_string[i].charCodeAt()-97]--;
                isColored[i]=1;
                demo.className+= " green ";
            }
        }

        for(let i=0;i<5;i++){
            if(isColored[i]===0){
                var demo = document.getElementById(value - (5-i-1));
                if(cnt_given_string[temp[i].charCodeAt()-97]===0){
                    demo.className+= " grey";
                }else{
                    demo.className+=" yellow";
                    cnt_given_string[temp[i].charCodeAt()-97]--;
                }
            }
        }
        

        for(let i=0;i<5;i++){
            cnt_given_string[given_string[i].charCodeAt()-97]++;
        }
        if(temp === given_string){
            alert("YOU WON!!!!")
            window.location.reload(); 
        }

        temp="";
        
        if(value===30){
              window.location.reload();
          }
        value++;
        flag=false;
      }
      if(value%5!=1 && l.keyCode === 8){  // BACKSPACE IMPLEMENTATAION
        if(!flag){          // IF 
            value--;
            var demo = document.getElementById(`${value}`);
            alert(temp[temp.length-1]);
            temp = temp.slice(0,-1);
            
            // alert(temp);
            demo.innerHTML = "";    
        }else{
            flag=false;
            var demo = document.getElementById(`${value}`);
            alert(temp[temp.length-1]);

            temp=temp.slice(0,-1);
            // alert(temp);
            demo.innerHTML = "";
        }
        // value--;    
      }
    if (l.keyCode >= 65 && l.keyCode <= 90) {       // IF VALID CHAR IS PRESSED
      var demo = document.getElementById(`${value}`);
      if(value%5===0){      // FOR LAST COLUMN OF EACH ROW
        if(!flag){          // IF ROW IS COMPLETED OR NOT
            demo.innerHTML = alpha[l.keyCode - 65];   
            temp+=alpha[l.keyCode-65];
            flag =true;
        }  
      }else {
        demo.innerHTML = alpha[l.keyCode - 65];   
        temp+=alpha[l.keyCode-65];
          value++;
      }
    }
  };
 
};

// alert("Hello");s
