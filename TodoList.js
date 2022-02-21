var Datee = new Date();
document.getElementById("date").innerText = Datee;


var Name = localStorage.getItem('Data');
if(Name == null){
document.getElementById("hurray").innerText ="Hurray!! You don't have any pending work." ;

}else{
    Name = JSON.parse(Name);
    document.getElementById("hurray").innerHTML = Name;   
}

document.getElementById("btn-1").onclick= function(){
    window.location = "Info.html"
}

// document.getElementById("delTodo").innerHTML =`<button id="btn-2"><i class="fas fa-trash" id="del"></i></button>`
// if(!Name == null){
//     document.getElementById("delTodo").innerHTML =`<button id="btn-2"><i class="fas fa-trash" id="del"></i></button>`
//     }

document.getElementById("btn-2").onclick = function(){
    localStorage.removeItem('Data');
    document.getElementById("hurray").innerText ="Hurray!! You don't have any pending work." ;
}

document.getElementById("Nav").onclick= function(){
    openNav();  
}
// document.getElementById("close").onclick= function(){
//     closeNav();  
// }
openNav = function(){
    document.getElementById("Navbar").style.width = "200px";
}
closeNav = function(){
    document.getElementById("Navbar").style =`
        width: 0;
        background: skyblue;
        position: fixed;
        z-index: 1;
        overflow-x: hidden;
        transition: o.5s;
        height: 100%;`
}
document.getElementById("Sun1").onclick = function(){
    window.location.reload();
}

document.getElementById("plus2").onclick = function(){
    window.location = "Info.html";
}