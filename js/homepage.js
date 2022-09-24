// let spacesItems=document.querySelector(".spaces__items");
// let password=document.getElementById("password");
// let username=document.getElementById("username");
let rightNav=document.getElementById("nav__right");
let spaces=document.querySelector(".spaces");
let form=document.createElement("form");
let paragraph=document.createElement("p");
// let image=document.createElement("img");
let type=document.querySelector("#type");
let Description=document.querySelector("#Description");
let price=document.querySelector("#price");
// let image=document.querySelector("#image").files[0].name; 
let typeHolder=document.querySelector(".type__holder");
let DescriptionHolder=document.querySelector(".description__holder");
let priceHolder=document.querySelector(".price__holder");
let imageHolder=document.querySelector(".img");
let spacesItems=document.querySelector(".spaces__items");
let viewWorkspace=document.querySelector(".view__workspace");
if(localStorage.getItem("username")!="admin"){
    viewWorkspace.innerHTML="view new workspaces";
    }
function addSignInLink(){
    let li=document.createElement("li");
    let ul=document.querySelector("#nav__right__list");
    let row=document.querySelector(".nav__right__list");
    let logLink=document.createElement("a");
    li.className="px-4 py-3 col-4";
    logLink.setAttribute('href',"login.html");
    logLink.innerHTML = "Sign in";
    logLink.className="nav-items";
    li.appendChild(logLink);
    row.appendChild(li);

    }

    if(window.localStorage.username == null){
        addSignInLink();
    }
    else{
    profilePage();
    }

    function profilePage(){
        let savedUsername=window.localStorage.username;
        let ul=document.querySelector("#nav__right__list");
        let div=document.createElement("div");
        let row=document.querySelector(".nav__right__list");
        let li=document.createElement("li");
        let profile=document.createElement("p");
        let logOut=document.createElement("a");
        profile.innerHTML="hello, "+ savedUsername;
        let profilePicture=document.createElement("img");
        let imgCont=document.createElement("div");
        // imgCont.classList.add("img__container");
        profilePicture.setAttribute("src","images/3135715.png");
        logOut.innerHTML="log out";
        logOut.className="nav-items btn logout";
        logOut.setAttribute("href","index.html");
        imgCont.appendChild(profilePicture);
        div.appendChild(profile);
        div.appendChild(imgCont);
        li.appendChild(div);
        li.appendChild(logOut);
        row.appendChild(li);
        div.className="d-flex";
        profilePicture.className="w-100";
        li.className="px-4 py-3 col-4";
        profile.className="nav-items";
        // profilePicture.classList.add("w-100")
        // rightNav.appendChild(profile);
        // // rightNav.appendChild(pTest);
        // imgCont.appendChild(profilePicture);
        // rightNav.appendChild(imgCont);
        // pTest.appendChild(profile);
        // pTest.appendChild(imgCont);
        // pTest.appendChild(profilePicture);
        // pTest.classList.add("col-5");
        // pTest.classList.add("d-flex");
        // profile.classList.add("col-6");
        // imgCont.classList.add("col-6");
        $(document).ready(function(){
            $(".logout").click(function(){
               localStorage.removeItem('username');;
            })
        });
    }

