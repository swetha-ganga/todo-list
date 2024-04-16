
function add(){
    var getdiv=document.getElementById("parent")
    var a=document.getElementById("answer").value
    if(a.length!==0){
    document.getElementById("answer").value=""
    var para=document.createElement("li")
    para.classname="aaa"
    para.innerText=a;
    getdiv.appendChild(para)
  var p=document.createElement("img")
  p. src="/asset/box\ delete.jpg"
  p.classname="zzz"
  //  p.innerText="delete"
  para.appendChild(p)
  
  
    
   p.onclick=(()=>{
    para.remove()
   })
  }
  }