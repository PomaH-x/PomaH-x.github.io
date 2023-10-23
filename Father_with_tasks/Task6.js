document.addEventListener("DOMContentLoaded", function() 
{
    document.getElementById('option1').addEventListener("change", function() {
        updatePrice();
    });

    document.getElementById('quantity').addEventListener("change", function() {
        updatePrice();
       });
});

function updatePrice() 
{
    // Находим select по имени в DOM.
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) 
    {
      price = prices.prodTypes[priceIndex];
    }
    
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "block";

    // Скрываем или показываем select.
    let SelectDiv = document.getElementById("sele");
    SelectDiv.style.display = (select.value == "2" ? "block" : "none");
    
    // Смотрим какая товарная опция выбрана.
    let option1Price = parseInt(document.getElementById('option1').value);
    price += option1Price;

    // Смотрим какая товарная опция выбрана.
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) 
    {
      if (radio.checked) 
      {
        let optionPrice = prices.prodOptions[radio.value];
        if (optionPrice !== undefined) 
        {
          price *= optionPrice;
        }
      }
    });
  
    // Скрываем или показываем чекбоксы.
    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "3" ? "block" : "none");
    
    // Смотрим какие товарные свойства выбраны.
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) 
    {
      if (checkbox.checked) 
      {
        let propPrice = prices.prodProperties[checkbox.name];
        if (propPrice !== undefined) 
        {
          price += propPrice;
        }
      }
    });
    

    let quantity = parseInt(document.getElementById('quantity').value);
    let quantityPattern = /^[1-9]\d*$/; 
    if (!quantityPattern.test(quantity)) 
    {
        alert("Количество товара должно быть положительным числом!");
    }
    else
    {
        price *= quantity; 
        document.getElementById('price').value = price + ' $';
    }
}
  
function getPrices() 
{
    return {
      prodTypes: [300, 250, 150],
      prodOptions: {
        option1: 1,
        option2: 2,
        option3: 3,
      },
      prodProperties: {
        prop1: 10,
        prop2: 20,
      }
    };
}
  
window.addEventListener('DOMContentLoaded', function (event) 
{
    // Скрываем радиокнопки.
    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";
    
    // Находим select по имени в DOM.
    let s = document.getElementsByName("prodType");
    let select = s[0];
    // Назначаем обработчик на изменение select.
    select.addEventListener("change", function(event) 
    {
      let target = event.target;
      console.log(target.value);
      updatePrice();
    });
    
    let sel = document.getElementsByName("se");
    sel.forEach(function(s) 
    {
      s.addEventListener("change", function(event) 
      {
        let e = event.target;
        console.log(e.value);
        updatePrice();
      });
    });

    // Назначаем обработчик радиокнопок.  
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function(radio) 
    {
      radio.addEventListener("change", function(event) 
      {
        let r = event.target;
        console.log(r.value);
        updatePrice();
      });
    });
  
      // Назначаем обработчик чекбоксов.  
    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function(checkbox) 
    {
      checkbox.addEventListener("change", function(event) 
      {
        let c = event.target;
        console.log(c.name);
        console.log(c.value);
        updatePrice();
      });
    });
  
    updatePrice();
});        
