//1.Compare two JSON have the same properties without order:
// let obj1 = {name: "Person 1", age: 5};
// let obj2 = {age: 5, name: "Person 1"};

function isEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};

console.log(isEqual(obj1, obj2)); // Output: true
//-------------------------------------------------------------------------

//2.XMLHttpRequest
//Print all country flags
var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send()
request.onload = function()
{
    var data = request.response;
    var result = JSON.parse(data)
    for(var i=0;i<result.length;i++)
    {
        console.log(result[i].flags.png);
    }
};
//------------------------------------------------------------------------

//3.Print all countries names, region, subregion and populations
var request = new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send()
request.onload = function()
{
    var data = request.response;
    var result = JSON.parse(data)
    for(var i=0;i<result.length;i++)
    {
        console.log("countryname:"+" "+result[i].name.common,"Region:"+" "+result[i].region,"subregion"+" "+result[i].subregion,"population"+" "+result[i].population)
    }
}







