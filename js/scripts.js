//Now we define the variables, ok?

var pizzaFlavor = ["Italian", "Tuscan", "Portabella", "Prima", "Paradiso", "Napoletana"];

var pizzaSize = ["Small", "Medium", "Large", "Jumbo"];

var pizzaCrust = ["Thin", "Thick", "Cripsy", "Gluten-free"];

var topping = ["Fruits", "Bacon", "Cheese", "Mushroom"];

//Now let's define our calling functions, is that okay?

function getType() {
    var flavour = $("#pizzatype :selected").val();
    return parseInt(flavour);
}

function getSize() {
    var size = $("#pizzasize :selected").val();
    return parseInt(size);
}

function getCrust() {
    var crust = $("#pizzacrust :selected").val();
    return parseInt(crust);
}

function getTopping() {
    var topping = $("#pizzatopping :selected").val();
    return parseInt(topping);
}

function getNumber() {
    var number = $("#number").val();
    return parseInt(number);
}

//Now we write a funtion to collect all the information above.

function getAmount(flavour, size, crust, topping, number) {
    var results =
        (parseInt(flavour.val()) + parseInt(size.val()) + parseInt(crust.val()) +
            parseInt(topping.val())) * parseInt(number.val());
    alert(
        "You've ordered " + number.val() + " " + "pizza's" +
        " " + flavour.html() + " " + size.html() +
        " " + crust.html() + " " + topping.html() +
        " " +
        " which amounts to Ksh. " +
        results +
        " Thanks for your order,welcome again!"
    );
    prompt("Enter your location");
    prompt("Enter your name");
    prompt("Enter your phone number");
    alert("Your order will be delivered in a while, delivery fee is  Ksh.1000/=");
}

function getPick(flavour, size, crust, topping, number) {
    var results =
        (parseInt(flavour.val()) +
            parseInt(size.val()) +
            parseInt(crust.val()) +
            parseInt(topping.val())) *
        parseInt(number.val());
    alert(
        "You've ordered " +
        number.val() +
        " " +
        " pizza's, " +
        flavour.html() +
        " " +
        size.html() +
        " " +
        crust.html() +
        "  " +
        topping.html() +
        "  " +
        " which amounts to Ksh. " +
        results +
        "  Thanks for shopping with us  "
    );
}
$(document).ready(function () {
    $("#make-delivery").click(function (event) {
        var flavour = $("#pizzaflavour :selected");
        var size = $("#pizzasize :selected");
        var crust = $("#pizzacrust :selected");
        var topping = $("#pizzatopping :selected");
        var number = $("#number");

        getAmount(flavour, size, crust, topping, number);
        event.preventDefault();
    });
});
$(document).ready(function () {
    $("#pick-up").click(function (event) {
        var flavour = $("#pizzaflavour :selected");
        var size = $("#pizzasize :selected");
        var crust = $("#pizzacrust :selected");
        var topping = $("#pizzatopping :selected");
        var number = $("#number");

        getPick(flavour, size, crust, topping, number);
        event.preventDefault();
    });
});