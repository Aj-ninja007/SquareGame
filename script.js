
const sql1=document.querySelector("#sql1");
const sql2=document.querySelector("#sql2");
const sql3=document.querySelector("#sql3");
const sql4=document.querySelector("#sql4");

sql1.addEventListener("mouseenter",function(){
    // sql2.style.backgroundColor="yellow";
    let r=Math.floor(Math.random()*100);
    sql1.innerHTML=`<h1>${r}</h1>`
})

sql1.addEventListener("mouseleave",function(){
    // sql2.style.backgroundColor="white";
    sql1.innerHTML=`<h1>1</h1>`
})

 var cl="red"
sql2.addEventListener('mouseenter',function(){
   if(cl=="red")
   {
    sql2.style.backgroundColor="red";
    cl="green";
   }
   else{
     sql2.style.backgroundColor="green";
   }
})

sql2.addEventListener('mouseleave',function(){
    sql2.style.backgroundColor=" rgb(236, 223, 223)";
})


sql3.addEventListener('mouseenter',function(){
    let r1=Math.floor(Math.random()*256)
    let r2=Math.floor(Math.random()*256)
    let r3=Math.floor(Math.random()*256)
    sql3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
})

sql3.addEventListener('mouseleave',function(){
   
    sql3.style.backgroundColor=" rgb(236, 223, 223)";
})


sql4.addEventListener('click',function(){

    let r1=Math.floor(Math.random()*256);
    let r2=Math.floor(Math.random()*256);
    let r3=Math.floor(Math.random()*256);
    sql1.style.backgroundColor=`rgb(${r1},255,255)`;
    sql2.style.backgroundColor=`rgb(255,${r2},255)`;
    sql3.style.backgroundColor=`rgb(255,255,${r3})`;
})

sql4.addEventListener('mouseleave',function(){

  
    sql1.style.backgroundColor=" rgb(236, 223, 223)";
    sql2.style.backgroundColor=" rgb(236, 223, 223)";
    sql3.style.backgroundColor=" rgb(236, 223, 223)";
})

