// let spacesItems=document.querySelector(".spaces__items");
// let password=document.getElementById("password");
// let username=document.getElementById("username");
// let rightNav=document.getElementById("nav__right");
// let spaces=document.querySelector(".spaces");
// let form=document.createElement("form");
// let paragraph=document.createElement("p");
// // let image=document.createElement("img");
// let type=document.querySelector("#type");
// let Description=document.querySelector("#Description");
// let price=document.querySelector("#price");
// // let image=document.querySelector("#image").files[0].name; 
// let typeHolder=document.querySelector(".type__holder");
// let DescriptionHolder=document.querySelector(".description__holder");
// let priceHolder=document.querySelector(".price__holder");
// let imageHolder=document.querySelector(".img");
// let spacesItems=document.querySelector(".spaces__items");
let addReservation=document.querySelector(".addReservation");
let space=[];
if(localStorage.getItem("space")){
    space=JSON.parse(localStorage.getItem("space")); 
}
getDataFromLS();
if(localStorage.getItem("username")!="admin"){
    addReservation.classList.add("d-none");
    }
spacesItems.addEventListener("click",(e)=> {
    if (e.target.classList.contains("remove")){
        deleteSpace(e.target.parentElement.parentElement.getAttribute("spaceID"));
        e.target.parentElement.parentElement.remove();
    }
})
$(document).ready(function(){
    $(".add").click(function(){
        if (Description.value !== ""&&price.value !== "" && image.value !== ""){
            // let realImage=image.value.replace("file:///C:/Users/C:UsersOmarDesktop%0Cinal-projectimages/C:/fakepath/","images/");
            let image=document.querySelector("#image").files[0].name; 
            let imagePath=("images/"+image);
        addSpaceToArray(type.value,Description.value,price.value,imagePath);
        Description.value="";
        price.value="";
        image.value="";
        }
        else{
            alert("please enter valid information");
            
        }
    })
});
// $(document).ready(function(){
//     $(".addReservation").click(function(){
//         window.location.href="AddForm.html";
//     })
// });

function addSpaceToArray(spaceType,spaceDes,spacePrice,spaceImg){
    let newSpace={
        id:Date.now(),
        type:spaceType,
        Description:spaceDes,
        price:spacePrice,
        image:spaceImg
    };
    space.push(newSpace);
    addSpaceToPage(space);
    addDateToLS(space);
}
function addDateToLS(arr){
    window.localStorage.setItem("space",JSON.stringify(arr));
    
    }

function addSpaceToPage(space){
    // TEST.innerHTML="";

//     <div class="col ">
//     <div class="card h-100 ">
//      <a href="#"><img src="images/9.jpg" class="card-img-top" alt="..."> </a> 
//       <div class="card-body">
//         <h5 class="card-title">The Factory</h5>
//         <p class="card-text text-dark">Former factory of biscuit-makers Peek Frean & Co. Ltd,
//            The Biscuit Factory has been reimagined as one of Bermondsey’s most creative business hubs.</p>
//       </div>
//     </div>
//   </div>

        space.forEach((space) => {
        
        let divCOL=document.createElement("div");
        divCOL.className="col";
        let div=document.createElement("div");
        div.className="card h-100 newSpace position-relative";
        let imageContainer=document.createElement("div");
        let img=document.createElement("img");
        let sType=document.createElement("p");
        let sDescription=document.createElement("p");
        let sPrice=document.createElement("p");
        var closeBtn=document.createElement("button");
        closeBtn.setAttribute("type","button");
        closeBtn.setAttribute("aria-label","close");
        // closeBtn.classList.add("btn-close");
        // closeBtn.classList.add("remove");
        // closeBtn.classList.add("btn-danger");
        closeBtn.className="position-absolute top-0 end-0  remove btn btn-danger";
        closeBtn.innerText="delete";
        if(localStorage.getItem("username")!="admin"){
            closeBtn.classList.add("d-none");
            }
        // sPrice.appendChild(closeBtn);
        // console.log(closeBtn);
        sType.innerText=space.type;
        sType.className="card-text text-dark";
        sDescription.innerText=space.Description;
        sDescription.className="card-text text-dark";
        sPrice.innerText=space.price+" $";
        sPrice.className="card-text text-dark";


        sPrice.appendChild(closeBtn);
        img.setAttribute("src",space.image);
        img.className="w-100";
        console.log(space);
        div.setAttribute("spaceID",space.id);
        imageContainer.appendChild(img);
        div.appendChild(imageContainer);
        div.appendChild(sType);
        div.appendChild(sDescription);
        div.appendChild(sPrice);
        // div.appendChild(closeBtn);
        divCOL.appendChild(div);
        spacesItems.appendChild(divCOL);
        // TEST.appendChild(div);
        // console.log(TEST);
    });
    }


function getDataFromLS(){
        let data=window.localStorage.getItem("space");
        if(data){
            let space=JSON.parse(data);
            addSpaceToPage(space);
        }
    }

function deleteSpace(id){
        space=space.filter((element) => element.id != id);
        addDateToLS(space);
    }


function getDataFromLS(){
        let data=window.localStorage.getItem("space");
        if(data){
            let space=JSON.parse(data);
            addSpaceToPage(space);
        }
    }