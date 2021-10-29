let loginBtn = document.getElementById("login");
let depositBtn = document.getElementById("depositAmountBtn");
let withdrwaBtn = document.getElementById("withdrawBtn");
withdrwaBtn.addEventListener("click", withdrawFunction)
function withdrawFunction(){
    let withdrawInput = document.getElementById
    ("withdraw_input").value;
    if(withdrawInput === ""){
        alert ("Please inter amount digit");
    }else if(withdrawInput <= 9){
        alert ("Minimum withdraw up to $10");
    }else {
        let withdrawInput = document.getElementById
        ("withdraw_input").value;
         let withdrawInputNumber = parseFloat
        (withdrawInput);
        //using glabal function
        depositUpdate("withdrawId",withdrawInputNumber )
        // withdrawMoney("withdrawId");
        removeMoney("balanceId");
         document.getElementById("withdraw_input").value = "";
         
         function removeMoney(id){
             let leftMoney = document.getElementById(id).innerText;
             let leftMoneyNumber = parseFloat(leftMoney);
             let totalRemoveMoney = leftMoneyNumber - withdrawInputNumber;
             document.getElementById(id).innerText = totalRemoveMoney;
         };
    };
};

depositBtn.addEventListener("click", depositFunction);
function depositFunction(){
    let deposit_input = document.getElementById
    ("deposit_input").value;
    if(deposit_input === ""){
        alert ("Please enter deposit amount")
    }else if (deposit_input <=99){
        alert ("Minimum deposit  $100")
    }else{
         let deposit_input = document.getElementById("deposit_input").value;
         let depositInputNumber = parseFloat(deposit_input);
         //using global function
        depositUpdate("depositAmount" ,depositInputNumber)
        depositUpdate("balanceId" ,depositInputNumber)
        document.getElementById("deposit_input").value = ""
    }
}
function depositUpdate(id , depositInputNumber, ){
    let currentDeposit = document.getElementById(id).innerText;
    let depositNumber = parseFloat(currentDeposit);
    let totalDeposit = depositInputNumber + depositNumber;
    document.getElementById(id).innerText = totalDeposit;
}
// login area
loginBtn.addEventListener("click", enterBtn);
function enterBtn(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("pswrd").value;
    if(email === ""){
        alert ("Plaese enter your email");
    }else if (password === ""){
        alert ("Plaese enter your pssword")
    } else{
        let loginArea = document.getElementById("loginArea");
        loginArea.style.display = "none";
        let transectionArea = document.getElementById("trntion-area");
        transectionArea.style.display = "block";
    }
}

