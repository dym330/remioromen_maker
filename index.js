const l = 6
// var c ="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲンガギグゲザジズゼゾダヂズデドバビブベボパピプペポァィゥェォッャュョヴ"
const c ="レミオロメン"
const cl = c.length

function letter(){
  for(let i=0; i<l; i++){
    document.getElementById(i + 1).innerText = " "
    document.getElementById(i + 1).style.backgroundColor = "white";
  }
  for(let i=0; i<l; i++){
    (function(local) {
      setTimeout(function(){
        document.getElementById(local + 1).innerText = c[Math.floor(Math.random()*cl)];
        if (document.getElementById(local + 1).innerText == c[local]) {
          document.getElementById(local + 1).style.backgroundColor = "yellow";
        }
      },local * 500);
    })(i);
  }
};
