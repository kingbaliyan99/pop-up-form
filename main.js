window.addEventListener("load",init);
function init(){
  document.querySelector(".signW").addEventListener("click",fun);
  document.querySelector(".fa-times").addEventListener("click",close);
}
function fun(){
  document.querySelector(".pop").style.display="block";
}
function close(){
  document.querySelector(".pop").style.display="none";
  // document.querySelector(".fa-times").style.display="none";
}
