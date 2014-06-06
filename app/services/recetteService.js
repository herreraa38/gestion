//This handles retrieving data and is used by controllers. 3 options (server, factory, provider) with 
//each doing the same thing just structuring the functions/data differently.
app.service('recetteService', function () {
    this.getRecette = function () {
        return recettes;
    };

    this.insertRecette = function (month, year) {
        var topID = recettes.length + 1;
        recettes.push({
            id: topID,
            month: month,
            year: year,
            city: city
        });
    };

    this.deleteRecette = function (id) {
        for (var i = recettes.length - 1; i >= 0; i--) {
            if (recettes[i].id === id) {
                recettes.splice(i, 1);
                break;
            }
        }
    };

    this.getRecette = function (id) {
        for (var i = 0; i < recettes.length; i++) {
            if (recettes[i].id === id) {
                return recettes[i];
            }
        }
        return null;
    };

    var recettes = [
        {
            id: 1, month: 'Lee', year: 'Carroll',
            orders: [
                { product: 'Basket', price: 29.99, quantity: 1, orderTotal: 29.99 },
                { product: 'Yarn', price: 9.99, quantity: 1, orderTotal: 39.96 },
                { product: 'Needes', price: 5.99, quantity: 1, orderTotal: 5.99 }
            ]
        },
        {
            id: 2, month: 'Jesse', year: 'Hawkins', 
            orders: [
                { product: 'Table', price: 329.99, quantity: 1, orderTotal: 329.99 },
                { product: 'Chair', price: 129.99, quantity: 4, orderTotal: 519.96 },
                { product: 'Lamp', price: 89.99, quantity: 5, orderTotal: 449.95 },
            ]
        },
        {
            id: 3, month: 'Charles', year: 'Sutton', 
            orders: [
                { product: 'Call of Duty', price: 59.99, quantity: 1, orderTotal: 59.99 },
                { product: 'Controller', price: 49.99, quantity: 1, orderTotal: 49.99 },
                { product: 'Gears of War', price: 49.99, quantity: 1, orderTotal: 49.99 },
                { product: 'Lego City', price: 49.99, quantity: 1, orderTotal: 49.99 }
            ]
        }
    ];

});