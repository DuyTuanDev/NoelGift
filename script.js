$(document).ready(function() {

    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
      if (req.readyState == XMLHttpRequest.DONE) {
        console.log(req.responseText);
      }
    };
    let value = document.getElementById("inputName").value;
        req.open("POST", "https://api.jsonbin.io/v3/b", true);
        req.setRequestHeader("Content-Type", "application/json");
        req.setRequestHeader("X-Master-Key", "$2a$10$HWHGT6mI.PQaK4er7vrHt.X1K8eeHyQtg6v5/gDZzgM1uDxgLYwQi");
        req.setRequestHeader("X-Bin-Name", "Login");
        req.setRequestHeader("X-Collection-Id", "657ef0a6266cfc3fde69f5db");
        req.send('{"Login": "web"}');
    

    var audio = new Audio('nhac.m4a');
    audio.loop = true;
    audio.play();

    $('.nameId').hide();
    $('.origin').hide();
    $('.tree10').hide();
    $('.tree9').hide();
    $('.tree8').hide();
    $('.tree7').hide();
    $('.tree6').hide();
    $('.tree5').hide();
    $('.tree4').hide();
    $('.tree3').hide();
    $('.tree2').hide();
    $('.tree1').hide();
    $('.tree0').hide();
    $('.tree-1').hide();
    $('.tree-2').hide();
    $('.tree-3').hide();

    $('.ball1').hide();
    $('.ball2').hide();
    $('.ball3').hide();
    $('.ball4').hide();
    $('.ball5').hide();
    $('.ball6').hide();
    $('.ball7').hide();
    $('.ball8').hide();
    $('.ball9').hide();
    $('.ball10').hide();
    $('.ball11').hide();
    $('.star').hide();

})

function clickShow(){

    // document.getElementById("welcomePopup").style.display = "block";
    
    $('.nameId').delay(500).fadeIn();
    $('.origin').delay(500).fadeIn();
    
    $('.tree10').delay(1000).fadeIn();
    $('.tree9').delay(1500).fadeIn();
    $('.tree8').delay(2000).fadeIn();
    $('.tree7').delay(2500).fadeIn();
    $('.tree6').delay(3000).fadeIn();
    $('.tree5').delay(3500).fadeIn();
    $('.tree4').delay(4000).fadeIn();
    $('.tree3').delay(4500).fadeIn();
    $('.tree2').delay(5000).fadeIn();
    $('.tree1').delay(5500).fadeIn();
    $('.tree0').delay(6000).fadeIn();
    $('.tree-1').delay(6500).fadeIn();
    $('.tree-2').delay(7000).fadeIn();
    $('.tree-3').delay(7500).fadeIn();
    
    $('.star').delay(8000).fadeIn();
    
    $('.ball1').delay(8300).fadeIn();
    $('.ball2').delay(8600).fadeIn();
    $('.ball3').delay(8900).fadeIn();
    $('.ball4').delay(9200).fadeIn();
    $('.ball5').delay(9500).fadeIn();
    $('.ball6').delay(9700).fadeIn();
    $('.ball7').delay(10000).fadeIn();
    $('.ball8').delay(10300).fadeIn();
    $('.ball9').delay(10600).fadeIn();
    $('.ball10').delay(10900).fadeIn();
    $('.ball11').delay(11200).fadeIn();
    $('.star').delay(11500).fadeIn();
    
    $('#welcomePopup').delay(14000).fadeIn();
}
function opentGift(){
    let valueNameCheck = document.getElementById("inputName").value;
    var a = valueNameCheck;
    if (a != "" && a != null){
        let req = new XMLHttpRequest();

        req.onreadystatechange = () => {
          if (req.readyState == XMLHttpRequest.DONE) {
            console.log(req.responseText);
          }
        };
        let value = document.getElementById("inputName").value;
            req.open("POST", "https://api.jsonbin.io/v3/b", true);
            req.setRequestHeader("Content-Type", "application/json");
            req.setRequestHeader("X-Master-Key", "$2a$10$HWHGT6mI.PQaK4er7vrHt.X1K8eeHyQtg6v5/gDZzgM1uDxgLYwQi");
            req.setRequestHeader("X-Bin-Name", "Reward");
            req.send('{"NameRewardNoel": "' + a +'"}');
        
            $('#welcomePopup').delay(100).fadeOut();
            $('#welcomePopup1').delay(100).fadeIn();
    }
    else{
        alert("Vui lòng nhập lại tên!!!");
    }
}
