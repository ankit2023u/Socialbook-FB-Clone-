var settingsmenu =document.querySelector(".settings-menu");
var darkbtn = document.getElementById("dark-btn");

function settingsDropdown(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-mode-on");
    document.body.classList.toggle("dark-mode");
    if (localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    } 
    else {
        localStorage.setItem("theme", "light");
    }
}

if (localStorage.getItem("theme") == "light"){
    darkbtn.classList.remove("dark-mode-on");
    document.body.classList.remove("dark-mode");
}
else if(localStorage.getItem("theme") == "dark"){
    darkbtn.classList.add("dark-mode-on");
    document.body.classList.add("dark-mode");
}
else {
    localStorage.setItem("theme", "light");
}
