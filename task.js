



document.forms[0].onsubmit = () => {
    let input = document.querySelector(`input[type="text"]`).value ;
    
    //https://api.weatherapi.com/v1/current.json?key=5a5264842f1f4299900144200232204&q=alex&aqi=no
    let url = "https://api.weatherapi.com/v1/current.json?key=5a5264842f1f4299900144200232204&q=" + input + "&aqi=no" ;
    
    let country , temp , cond , icon , Wspeed ;
    let a = fetch(url);
    a.then((res) => {
        return res.json();
    }).then((data) => {
        // console.log(data) ;
        country = data.location.country ;
        temp = data.current.temp_c ;
        cond = data.current.condition.text ;
        icon = data.current.condition.icon ;
        Wspeed = data.current.wind_kph ;
        
        document.querySelector(`.container div p`).textContent = `Country: ${country}` ;
        document.querySelector('.container div .temp').textContent = `Tempreature: ${temp}c` ;
        document.querySelector(`.container div .cond`).innerHTML = `
        Condition: ${cond} <img src="${icon}" style="width=50px">
        ` ;
        document.querySelector(`.container div .speed`).textContent= `Wind Speed: ${Wspeed}kph` ;
        
    }); 
    
    return false;
}
