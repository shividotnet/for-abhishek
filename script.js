const heartLayer=document.getElementById("hearts");
function makeHeart(){
  const h=document.createElement("div");
  h.className="fheart";
  h.innerHTML=["♥","♡","✦"][Math.floor(Math.random()*3)];
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(10+Math.random()*18)+"px";
  h.style.animationDuration=(5+Math.random()*5)+"s";
  heartLayer.appendChild(h);
  setTimeout(()=>h.remove(),10000);
}
setInterval(makeHeart,850);
for(let i=0;i<7;i++)setTimeout(makeHeart,i*250);

function reveal(el){
  el.classList.toggle("open");
}
function surprise(){
  document.getElementById("modal").classList.add("show");
  for(let i=0;i<20;i++)setTimeout(makeHeart,i*80);
}
function closeModal(){
  document.getElementById("modal").classList.remove("show");
}
document.getElementById("modal").addEventListener("click",e=>{
  if(e.target.id==="modal")closeModal();
});

const musicBtn=document.getElementById("musicBtn");
musicBtn.addEventListener("click",()=>{
  alert("Add your favourite song as music.mp3 in the project folder, then connect it in script.js ❤️");
});
