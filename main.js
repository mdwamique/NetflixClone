const imgArray=["img/lsj.jpg","img/knivesout.jpg","img/noway.jpg","img/kantara.jpg"];
const imgslide=document.getElementById("imgslider");
const slide=()=>{
    imgArray.forEach(element => {
        imgslide.style.backgroundImage=`url(${element})`;
    });
}
var i=0;
setInterval(()=>{
    i=i%imgArray.length;
    const add=imgArray[i];
    imgslide.style.backgroundImage=`url(${add})`;
    imgslide.style.backgroundsize="cover";
    i++;

},2000);
function dropdown(e){
    console.log("Clicked")
    if(document.getElementById("btn1div").style.height=="0px"){
        document.getElementById("btn1div").style.height="200px";
        document.getElementById("btn1div").innerText="how are you";        
    }
    else
    document.getElementById("btn1div").style.height="0px";
    console.log(e);
}
for(let i=1;i<=6;i++){
document.getElementById(`btn${i}`).addEventListener("click",(e)=>{
        if(document.getElementById(`btn${i}div`).style.display=="none"){
            document.getElementById(`btn${i}div`).style.display="block";
            for(let j=1;j<=6;j++){
                if(j!=i)
                document.getElementById(`btn${j}div`).style.display="none";
            }       
        }
        else
        document.getElementById(`btn${i}div`).style.display="none";
        console.log(e);
    
})}