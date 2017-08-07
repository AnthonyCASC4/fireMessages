//Set database object
var database = firebase.database().ref();

//button executes this function
function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name + " : " + message);

    var value = {
        NAME: name,
        MESSAGE: message
    }
    //Update database here
database.push(value);
}

database.on("child_added", function(rawData){
var row = rowData.val();
var name = row.NAME;
var message = row.MESSAGE;
var fullText = "<p>" + name + ": " + message + "</p>";
    $(".allMessages").append(fullText);
})



//class def
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.getName = function () {
        return this.name;
    }
}

var navid= new Person("Navid",17);

console.log(getName(navid));
