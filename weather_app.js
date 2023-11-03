
var input=document.getElementById("searchbox");
var btn=document.getElementById("btn");
var city=document.getElementById("CityName");
var info=document.getElementById("Discription");
var temp=document.getElementById("temp");
var wind=document.getElementById("wind");
var btn2=document.getElementById("btn2");
//var box=document.getElementsByClassName("container");

apik = '633a5cb424a444ab2cba622697104551';

picik="1QFl87El6BzQH5rJgYUnV6HwdVO_Bqp3iTouKP8CvAA";
//GET https://api.unsplash.com/search/photos?query=cityname&client_id=YOUR_ACCESS_KEY

let city_img;
btn2.addEventListener("click", () =>{
    fetch("https://api.unsplash.com/search/photos?query=" + input.value + '&client_id=' + picik)
    .then((res) => res.json())
   .then((data) =>{
        city_img=data.results[0].urls.raw
        //var info2=data.weather[0].description
        console.log("Data :",data);
        console.log("Id",city_img);
  })
  //.catch(err =>alert("Api is not working"));
});

setTimeout(() =>console.log("Id2",city_img), 8000);
//console.log("Id2",city_img);



// btn.addEventListener("click", () =>{
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//    .then((data) =>{
//     data.forEach(element => {
//         console.log(element.id)
//         console.log(element.name)
//         console.log(element.address.street)
//         console.log(element.address.geo.lat)
//         console.log(element.address.geo.lng)

//     });
//    }) 

// })


// btn.addEventListener("click",() =>{
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input.value + '&APPID=' + apik)
//     .then((res) => res.json())
//     .then((data) =>{
//         //console.log(Object.keys(data));
//         Object.keys(data).forEach(element =>{
//             console.log(`${element}`,data[element])

//         })
//     })
// })


btn.addEventListener("click", ()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input.value + '&APPID=' + apik)
    .then((res) => res.json())
    .then((data) =>{
        //get values from APP & STORE IN varaibles
        var city_name=data.name
        var info2=data.weather[0].description
        var temperature=(parseFloat(data.main.temp)-273).toFixed(2)

        var wind1=data.wind.speed
        console.log("Name :",info);
        //pass values to browser
        city.innerHTML=`City :${city_name}`;
        info.innerHTML=`Sky Condition :${info2}`;
        temp.innerHTML=`Temperature : ${temperature}C`;
        wind.innerHTML=`Wind Speed :${wind1} m/s`;
        console.log("img:",city_img);
        document.getElementsByClassName(".container").style.backgroundImage= "url(E:\Html Exercise\img\adventure-trips-in-india_1440486703_aNbqdJ.avif)";

//        document.getElementsByClassName("container").backgroundImage="url("+city_img+")";
//        box.style.backgroundImage='url('+city_img+')';
    })
 //   .catch(err =>alert('Wrong CITY name'))
})


// btn.addEventListener("click", () => {
//     const inputValues = input.value.split(','); // Assuming values are comma-separated
//     inputValues.forEach((value) => {
//         fetch("https://api.openweathermap.org/data/2.5/weather?q=" + value + '&APPID=' + apik)
//             .then(res => res.json())
//             .then(data => console.log("Data for " + value + ":", data))
//             .catch(error => console.error("Error fetching data for " + value + ":", error));
//     });
// });
//get Data from jason
// btn.addEventListener("click", () => {
//     console.log(input.value);
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input.value + '&APPID=' + apik)
//         .then(res => res.json())
//         .then(data => {
//             console.log("Data :", data);
//             // Iterate over all values in the 'data' object
//             Object.keys(data).forEach(key => {
//                 console.log(`${key}:`, data[key]);
//             });
//         });
// });

