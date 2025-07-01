
var i = 1;
setInterval(() => {
    if (i === 4) {
       
       
        document.getElementById("banner_box").style.backgroundImage = `url("../hotel${i}.jpg")`;
        i = 1;
    }
    // document.getElementById(`ban${i}`).style.zIndex = 5;
   
    document.getElementById("banner_box").style.backgroundImage = `url("../hotel${i}.jpg")`;

    i++;

}, 2000);

let location_var = document.getElementById("location");
location_var.innerText = location_name;

document.querySelectorAll(".city").forEach(element => {



    element.addEventListener("click", () => {
        console.log(element.innerHTML);
       
       
        let location_var = document.getElementById("location");
        location_name = element.innerHTML.toUpperCase();
        location_var.innerText = location_name;
       
         window.location = "/asset/page/location_page.html";

    })
});




let cheak_frame = false;

function c_frame1(){
    console.log("click");
    if(cheak_frame == false){
        window.history.back();
    }

   cheak_frame = true;
    window.location = "/asset/page/location_page.html";
    window.history.back();
  
    
}

function c_frame2(){
    console.log("click");
    if(cheak_frame == true){
        window.history.back();
    }

   cheak_frame = false;
   
    window.location = "/asset/page/location_page.html";
    window.history.back();
    window.history.back();
}





