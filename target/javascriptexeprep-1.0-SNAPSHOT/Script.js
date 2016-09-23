$("path").each(function () {
    this.addEventListener("click", LoadEmployee);

});
var JSONObjects;

var xmlhttp;
function loader(url, cfunc)
{

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = cfunc;
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
var JSONObjects;
var lastobject;
function LoadEmployee()
{
    if (lastobject !== undefined)
        lastobject.css("fill", "c0c0c0");
    lastobject = $(this).css("fill", "ff0000");
    //$(target).css("fill","");
    //this.css("fill","ff0000");
    console.log("test");
    //opgave 1
    //loader("http://restcountries.eu/rest/v1/alpha?codes=" + this.id, function ()
    //opgave2
    // fordi at det er muligt at åbne en anden hjemmeside og så fat i objecter fra den hjemmeside.
    // 
    //opgave 3
    loader("http://localhost:8080/javascriptexeprep/JasonServlet?name=" + this.id, function ()
    {
        console.log(this.readyState + " " + this.status);
        if (this.readyState == 4 && this.status == 200)
        {
            //console.log(this.responseText);
            JSONObjects = JSON.parse(this.responseText);
            //console.log(JSONObjects);
            console.log(JSONObjects[0]);
            if (JSONObjects[0] == null)
                document.getElementById("demo").innerHTML = "error <br>404:not found";
            else {
                document.getElementById("demo").innerHTML = "Name: " + JSONObjects[0].name + "<br>Population: " + JSONObjects[0].population + "<br>Area: " + JSONObjects[0].area + "<br>Borders: " + JSONObjects[0].borders;
            }
            console.log(document.getElementById("demo"));
        }
    });
}

