// calls API
function getCity(){
    let i=0
    let userInput=document.getElementById("userInput").value
    console.log(userInput)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '67d628f24dmsh30640eb40d010d8p1e1b4cjsn0d847e304a46',
             'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };

    fetch(`https://hotels4.p.rapidapi.com/locations/v3/search?q=${userInput}&locale=en_US&langid=1033&siteid=300000001`, options)
    .then(response => response.json())
	.then(response => {
        document.querySelector("ul").innerHTML = "";
        response.sr.forEach(hotel=>{
            const markup=`<button><li>${hotel.regionNames.shortName}</li><button>`;
            document.querySelector('ul').insertAdjacentHTML('beforeend',markup)
        })
    })
	.catch(err => console.error(err));


}


function display() {  
    console.log("Hello World!");  
    }  

    
    
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '67d628f24dmsh30640eb40d010d8p1e1b4cjsn0d847e304a46',
//          'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
//     }
// };
    
// const getData=()=> {fetch(`https://hotels4.p.rapidapi.com/locations/v3/search?q=${userInput}&locale=en_US&langid=1033&siteid=300000001`, options)
//     .then(response => response.json())
//     .then(response => console.log(response.sr))
//     .catch(err => console.error(err));};