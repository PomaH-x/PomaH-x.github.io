document.addEventListener("DOMContentLoaded", function() 
{
    let calculateButton = document.getElementById("calculate");
    calculateButton.addEventListener("click", calculateCost);
});
    
function calculateCost() 
{
    let quantityInput = document.getElementById("quantity");
    let productSelect = document.getElementById("product");
    let resultDiv = document.getElementById("result");
    
    let quantity = quantityInput.value;
    let quantityPattern = /^[1-9]\d*$/; 
    if (!quantityPattern.test(quantity)) 
    {
        return alert("Количество товара должно быть положительным числом!");;
    }
    
    let productPrice = parseInt(productSelect.value);
    let totalCost = quantity * productPrice;
    
    alert("Стоимость заказа: " + totalCost + " $");
}