const apiKey = "dfa205cf10b7e36759c430e8ba5a5393";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=banglore`;

async function checkWeather(){
    const response = await fetch(apiURL + `&appid=${apiKey}`);
    let data = await response.json();

    console.log((data));
}
checkWeather();
