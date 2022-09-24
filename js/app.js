let password=document.getElementById("password");
let username=document.getElementById("username");
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

// let space=[];
// if(localStorage.getItem("space")){
//     space=JSON.parse(localStorage.getItem("space")); 
// }
// getDataFromLS();
// spacesItems.addEventListener("click",(e)=> {
//     if (e.target.classList.contains("remove")){
//         deleteSpace(e.target.parentElement.parentElement.getAttribute("spaceID"));
//         e.target.parentElement.parentElement.remove();
//     }
// })

// $(document).ready(function(){
//     $(".add").click(function(){
//         if (Description.value !== ""&&price.value !== "" && image.value !== ""){
//             // let realImage=image.value.replace("file:///C:/Users/C:UsersOmarDesktop%0Cinal-projectimages/C:/fakepath/","images/");
//             let image=document.querySelector("#image").files[0].name; 
//             let imagePath=("images/"+image);
//         addSpaceToArray(type.value,Description.value,price.value,imagePath);
//         Description.value="";
//         price.value="";
//         image.value="";
//         window.location.href = "AddSpace.html";
//         }
//         else{
//             alert("please enter valid information");
            
//         }
//     })
// });
// $(document).ready(function(){
//     $(".addReservation").click(function(){
//         window.location.href="AddForm.html";
//     })
// });

// function addSpaceToArray(spaceType,spaceDes,spacePrice,spaceImg){
//     let newSpace={
//         id:Date.now(),
//         type:spaceType,
//         Description:spaceDes,
//         price:spacePrice,
//         image:spaceImg
//     };
//     space.push(newSpace);
//     addSpaceToPage(space);
//     addDateToLS(space);
// }
// function addDateToLS(arr){
// window.localStorage.setItem("space",JSON.stringify(arr));

// }

// function addSpaceToPage(space){
// // TEST.innerHTML="";
//     space.forEach((space) => {
    
//     let div=document.createElement("div");
//     let imageContainer=document.createElement("div");
//     let img=document.createElement("img");
//     let sType=document.createElement("p");
//     let sDescription=document.createElement("p");
//     let sPrice=document.createElement("p");
//     var closeBtn=document.createElement("button");
//     closeBtn.setAttribute("type","button");
//     closeBtn.setAttribute("aria-label","close");
//     // closeBtn.classList.add("btn-close");
//     // closeBtn.classList.add("remove");
//     // closeBtn.classList.add("btn-danger");
//     closeBtn.className="position-absolute top-0 end-0  remove btn btn-danger";
//     closeBtn.innerText="delete";
//     if(localStorage.getItem("username")!="admin"){
//         closeBtn.classList.add("d-none");
//         }
//     // sPrice.appendChild(closeBtn);
//     // console.log(closeBtn);
//     sType.innerText=space.type;
//     sDescription.innerText=space.Description;
//     sPrice.innerText=space.price;
//     sPrice.appendChild(closeBtn);
//     img.setAttribute("src",space.image);
//     img.className="w-100";
//     console.log(space);
//     div.className="newSpace col-3 text-center position-relative";
//     div.setAttribute("spaceID",space.id);
//     imageContainer.appendChild(img);
//     div.appendChild(imageContainer);
//     div.appendChild(sType);
//     div.appendChild(sDescription);
//     div.appendChild(sPrice);
//     // div.appendChild(closeBtn);
//     spacesItems.appendChild(div);
//     // TEST.appendChild(div);
//     // console.log(TEST);
// });
// }

// function getDataFromLS(){
//     let data=window.localStorage.getItem("space");
//     if(data){
//         let space=JSON.parse(data);
//         addSpaceToPage(space);
//     }
// }
$(document).ready(function(){
    $("#signin").click(function(){
        if (password.value==="123"&& username.value != ''){
            window.localStorage.setItem("username",username.value)
            window.location.href = "index.html";
        }
        else{
            alert("username or password is incorrect");
        }
        
    })
});
// $(document).ready(function(){
//     $(".addReservation").click(function(){
//         addNewReservation();
//     })
// });
function createSpace(){
    // let x={
    //     "id":new Date(),
    //     "type":type.value,
    // "Description":Description.value,
    // "price":price.value,
    // "image":image.value
    // }
    // space.push(x);
    //     // convert object to JSON string
    //   // using JSON.stringify()
    //   const jsonObj = JSON.stringify(x);
      
    //   // save to localStorage
    //   localStorage.setItem("space", jsonObj);
      
    //   // get the string
    //   // from localStorage
    //   const str = localStorage.getItem("space");
      
    // //   convert string to valid object
    //   const parsedObj = JSON.parse(str);
      
    //   console.log(parsedObj); 

}

// function addNewReservation(){
// spaces.appendChild(div);
// div.className="container-fluid";
// // div.appendChild
// }

// function addSignInLink(){
// let logLink=document.createElement("a");
// logLink.setAttribute('href',"login.html");
// logLink.innerHTML = "Sign in";
// logLink.className="nav-items px-3 py-3 ms-0"
// rightNav.appendChild(logLink);
// }

// if(window.localStorage.username == null){
//     addSignInLink();
// }
// else{
// profilePage();
// }

// var arr= {
//     "id":"1",
//     "name":"test1",
//     "type":"office",
//     "date":"27/10/1992",
//     "time":"16:00"
// };
// var parsedarr= JSON.stringify(arr);
// localStorage.setItem("reserve",parsedarr);
// var returnedarr=localStorage.getItem("reserve");
// var test=JSON.parse(returnedarr);
// console.log(test);

// function addReservation(){
// tbody.appendChild(tr);
// for(var i=0;i<6;i++){
// td=document.createElement("td");
// tr.appendChild(td);
// for (const key in arr) {
    
//     td.innerText=arr[key];
// }
// }
// }
// addReservation()
// const John = {
    //     name: "John Doe",
    //     age: 23,
    //   };
      
    //   // convert object to JSON string
    //   // using JSON.stringify()
    //   const jsonObj = JSON.stringify(John);
      
    //   // save to localStorage
    //   localStorage.setItem("John", jsonObj);
      
    //   // get the string
    //   // from localStorage
    //   const str = localStorage.getItem("John");
      
    //   // convert string to valid object
    //   const parsedObj = JSON.parse(str);
      
    //   console.log(parsedObj); 

    // const user = {

    //     name: 'John Doe',
    
    //     email: 'john.doe@example.com',
    
    //     age: 25,
    
    //     dob: '08/02/1989',
    
    //     active: true
    // };
    
    // // iterate over the user object
    
    // for (const key in arr) {
    
    //     console.log(`${key}: ${arr[key]}`);
    // }

    // function deleteSpace(id){
    //     space=space.filter((element) => element.id != id);
    //     addDateToLS(space);
    // }