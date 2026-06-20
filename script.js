function checkPass(){

    const code = document.getElementById("passcode").value;

    if(code === "1818"){

        document.getElementById("passcodePage").classList.add("hidden");
        document.getElementById("page1").classList.remove("hidden");

        document.getElementById("music").play();

    }else{
        alert("Wrong Passcode");
    }
}

function nextPage(current,next){

    document.getElementById(current).classList.add("hidden");
    document.getElementById(next).classList.remove("hidden");

}

function blowCandles(){

    document.querySelector(".cake").innerHTML="💨🎂";
    setTimeout(()=>{

        document.getElementById("cakePage").classList.add("hidden");
        document.getElementById("finalPage").classList.remove("hidden");

    },1500);

}
