//string legth//
let string = "nagagopi";
console.log(string.length);

//string slice//
//index  012345678
let a = "nagagopi4";
console.log(a.slice(3,6));
console.log(a.slice(6));
console.log(a.slice(-4));
console.log(a.slice(0,4));
console.log(a.slice(-5));
console.log(a.slice(-4,-1));

//substring//
let b = "chandinijarugu";
console.log(b.substring(2,7));
console.log(b.substring(-6));// if we give any  -ve values in sub string it start from '0' index//
console.log(b.substring(6,-4));

//substr//
let c = "eshwarkumar";
console.log(c.substr(1,3));

//replace//
let e = "CHAITANYAKUMAR";
console.log(e.replace("t","m"));

let t =e.replace("t","99");
console.log(t);

let g = "meghana";
console.log(g.replace("meghana","eshwar"));

//to upper case//
console.log(g.toUpperCase());

//to lowercase//
console.log(e.toLowerCase());

//conact//
console.log(g.concat("eshwar"));
console.log(e.concat(" ","gopi"));
  
let h = "  10kcoders  ";
console.log(h.concat("10k","ssss"));


 //trim//
console.log(h.trim());


//trim inside the string using replace//
let j = "naga   gopi";
console.log(j.replace("   ","hi"));

// padstart pad end//
 n="chinni";
console.log(n.padStart(13,"l"));


//charAt//
let o = "srinu";
console.log(o.charAt(2));
 //split//
 let u = "naga+gopi";
 console.log(u.split("+"));
