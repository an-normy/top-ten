menuListArray = ["Pizza Vegetariana",
                    "Pizza De Frango",
                    "Pizza Portuguesa",
                    "Pizza Quatro Queijos",
                    "Pizza De Calabresa",
                    "Pizza Extravaganza"
                    ];

function getMenu(){
    var htmldata;
    menuListArray.sort();
    for(var i = 0;i<menuListArray.length;i++) {
        htmldata = htmldata + menuListArray[i] + '<br>'
    }
    document.getElementById("displayMenu").innerHTML = htmldata
}

function addItem(){
    var htmldata;
    var item=document.getElementById("addItem").value;
    var imgtags = '<img id="im1" src="images/pizzaImg.png"/>'
    menuListArray.sort();
    htmldata = ""
    for (var i = 0;i<menuListArray;i++) {
        htmldata = htmldata + menuListArray[i] + '<br>';
    }
    document.getElementById("displayAddedMenu").innerHTML = htmldata;
}

function addTop(){
    var item = document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem()
}