

function letter(){
  const l = 6
  // const c ="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲンガギグゲザジズゼゾダヂズデドバビブベボパピプペポァィゥェォッャュョヴ"
  const c ="レミオロメン"
  const cl = c.length
  const button = document.getElementById("button");

  button.disabled = true
  for(let i=0; i<l; i++){
    document.getElementById(i + 1).innerText = " "
    document.getElementById(i + 1).style.backgroundColor = "white";
  }
  for(let i=0; i<l; i++){
    (function(local) {
      setTimeout(function(){
        document.getElementById(local + 1).innerText = c[Math.floor(Math.random()*cl)];
        if (document.getElementById(local + 1).innerText === c[local]) {
          document.getElementById(local + 1).style.backgroundColor = "yellow";
        }
        if (local === l - 1 ){
          button.disabled = false
        }
      },local * 500);
    })(i);
  }
};
