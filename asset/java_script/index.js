
var i = 1;
setInterval(() => {
    if (i === 3) {
        i = 1;
        document.getElementById(`ban${i + 1}`).style.zIndex = 0;
    }
    document.getElementById(`ban${i}`).style.zIndex = 5;


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




function c_frame2(){
    // let iframe = document.getElementById('frame2');
// iframe.parentNode.removeChild(iframe);

    
window.history.back();
}
function c_frame1(){
    // alert();
    // let iframe = document.getElementById('frame1');
    window.history.back();
}

