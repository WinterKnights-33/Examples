
function change_image () {
    document.getElementById("suc-1").setAttribute("src", "succulents-2.jpg")
}
document.getElementById("suc-1").addEventListener("mouseover", function(event) {
    setTimeout(function() {
        event.target.setAttribute("src", "succulents-1.jpg")
    }, 300);
    change_image();
});

function myalert() {
    alert.onclick ("This Page Says.\n " +
        "Your Cart Is Empty");
};


window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        2000 
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});