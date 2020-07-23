// product 1
//plus button
const  plusBtn  = document.getElementById("increaseBtn","decreaseBtn");
plusBtn.addEventListener("click", function(event){
    processNumber("inputAmount" , "insideTotal", 1 , 100 );
    
 })
 
//minsBtn 
 const  minsBtn  = document.getElementById("decreaseBtn");
 minsBtn.addEventListener("click", function(event){
   processNumber("inputAmount" ,"insideTotal", -1 , 100 );
   
})

// product 2 
const  plusBtn1  = document.getElementById("increaseBtn1");
plusBtn1.addEventListener("click", function(event){
   let  x =  processNumber("inputAmount1", "insideTotal1"  , 1 , 69 );
 })
 
//minsBtn 
 const  minsBtn1  = document.getElementById("decreaseBtn1");
 minsBtn1.addEventListener("click", function(event){
   processNumber("inputAmount1" ,"insideTotal1" , -1 , 69 );
})

 //add amount in input
 function  processNumber(id ,id2, num , amount ){
    const  inputValue  = document.getElementById(id).value; //increaseInput
    const inputResult =  parseFloat(inputValue);
    const totalValue =  inputResult  + num ; 
    document.getElementById(id2).innerText= totalValue * amount;
    document.getElementById(id).value=totalValue;
  
    return totalValue;
}

//  const firstValue = minsBtn + minsBtn;
//  console.log(firstValue)
//  const firstNumber = parseFloat(firstValue);
//  const secondValue = document.getElementById("insideTotal1").innerText;
// const secondNumber = parseFloat(secondValue);
// const total = firstNumber + secondNumber;
// document.getElementById("subTotal").innerText = total;
// total amount 

// function adds(id){
//     const subtotalValue = document.getElementById(id).innerText;
//     const subtotalNumber = parseFloat(subtotalValue);
//     return subtotalNumber;
// }
//  const subTotal = adds("subTotal");
//  const totalTax = adds("tax");
//  const Total = adds("total");
  
//  const totalFinal =
//      const totalAmount = subTotal+totalTax+Total;
//      return totalAmount;
 


// this is for relation with input and inside board 
  function myFunction() {
    var values =  document.getElementById("inputAmount").value;
    var check  = parseFloat(values);
      document.getElementById("insideTotal").innerText=check * 100;
    }


 


































