document.getElementById("arrow-btn").onclick= function(){
    window.location = "TodoList.html"
}
pen = () => {
    document.getElementById("pen").style.color   = "lightblue";
}
loc = () => {
    document.getElementById("loc").style.color   = "lightblue";
}
des = () => {
    document.getElementById("des").style.color   = "lightblue";
}
Apen = () => {
    document.getElementById("pen").style.color   = "black";
}
Aloc = () => {
    document.getElementById("loc").style.color   = "black";
}
Ades = () => {
    document.getElementById("des").style.color   = "black";
}

document.getElementById("btn-2").onclick = function(){
    var Title = document.getElementById("txt1").value;
    var Location = document.getElementById("txt2").value;
    var Description = document.getElementById("txt3").value;
    var Todo = `<hr>Title: ${Title},<br> Location: ${Location},<br> Description: ${Description} <br>`
    var names = localStorage.getItem('Data');
    if(names == null){
        names = [];
    }
    else{
        names = JSON.parse(names);
    }
    names.push(Todo);
    localStorage.setItem("Data",JSON.stringify(names))
    window.location = "TodoList.html";
}