function wybor(co){
    if(co=="burger"){
            document.getElementById("obraz").src= "https://i.imgur.com/YwEszHG.png";
    }
    
    else if(co=="lody") {
       document.getElementById("obraz").src= "https://i.imgur.com/79iFW8k.png";

    }
    else if(co=="chees"){
         document.getElementById("obraz").src= "https://i.imgur.com/19ZVsu9.png";
    }
} 
var r = '118,121,129,145,148,151,154,157,161,170,171,173,176,181,191,199,201,215,216,220,232,236,246,249,252,253,256,257,276,322,335,337,338,349,359,362,364,375,380,384,390,396,400,421,431,435,437,438,448,450,452,454,455,468,480,481,483,484,485,487,489,490,491,492,493,494,495,496,497,498,499'.split(','),
gen = (co) => {
  let d = new Date(new Date().getTime()-60000),
      s = a => ('0'+a).slice(-2),
      g=()=>{let re; while(r.indexOf(re=Math.floor((Math.random() * 401) + 135))!==-1);return re;}
  document.getElementById("wygenerowanykod").innerHTML = parseInt([g(), s(d.getMonth() + 1), s(d.getDate()), s(d.getHours()), s(d.getMinutes()), '10', '05', Math.floor((Math.random() * 900) + 100)].join(''), 10).toString(36).replace(/(.{12})/g, "$1-").slice(0, -1);
    
    
}
gen();

function start(co){
    gen();
    wybor(co);
}
