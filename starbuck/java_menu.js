var menu={
    "Caffé Americano":{ price: 3.99, image:"image/pexels-beyza-efe-8340102.jpg"},
    "Caffé latte":{ price: 4.59, image:"image/pexels-photo-2396220.jpeg"},
    "Cappcino":{ price: 3.99, image:"image/cappucino.jpg"},
    "Expresso":{ price: 2.99, image:"image/pexels-chevanon-photography-302894.jpg"},
    "Mocha":{ price: 4.79, image:"image/mocha.jpg"},
    "Caramel Macchiato":{ price: 4.79, image:"image/caramel.jpeg"},
    "White chocolate Macchiato":{ price: 4.99, image:"image/white_chocolate.jpg"},
    "Frappuccino":{ price: 5.49, image:"image/frappuccino.jpeg"},
    "Green Tea latte":{ price: 4.99, image:"image/green_tea.jpg"},
};

function createDrinkMenu(){
    var menuContainer= document.getElementById("menu-container");
    var menuList = document.createElement("ul");

    for(var drink in menu) {
        var price = menu[drink].price.toFixed(2);
        var image = menu[drink].image;
        
        var menuItem = document.createElement("li");
        var drinkImage = document.createElement("img");
        var drinkName = document.createElement("p");
        var drinkPrice = document.createElement("p");

        drinkImage.src = image;
        drinkImage.alt = drink;
        drinkName.textContent = drink;
        drinkPrice.textContent = "$"+ price;

        menuItem.appendChild(drinkImage);
        menuItem.appendChild(drinkName);
        menuItem.appendChild(drinkPrice);

        menuList.appendChild(menuItem);

    }
    menuContainer.appendChild(menuList);
}
window.onload = createDrinkMenu;