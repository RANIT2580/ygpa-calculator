console.log("YGPA")
function YGPA(a,b,f){
    console.log("enter 1st sem sgpa",a);
    console.log("enter 2nd sem sgpa",b);
    console.log("enter total marks of 1st year exam",f)
   c= (a-0.75)*10;
   d= (b-0.75)*10;
   g=(a+b)/2;
    y=(g-0.75)*10;
    console.log("1st year ygpa",y);
   z= (f*y)/100;
   console.log("1sr year num out of 1400",z)

}
YGPA(9.54,9.39,1400);
console.log(z);
