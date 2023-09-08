document.addEventListener('DOMContentLoaded', () => {
    const infos = document.querySelector('.infos');
    const btn = document.getElementById('btn');

    let pContinent = document.createElement('p');
    let pCountry = document.createElement('p');
    let pCapital = document.createElement('p');
    let imgFlag = document.createElement('img');

    btn.addEventListener('click', () => {
        let input = document.querySelector('.inputCountry').value;
        pCountry.innerText = input;

        async function fetchData(url) {
            try {
                const response = await fetch(url);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error("Erreur : ", error);
            }
        }
        
        fetchData('https://restcountries.com/v3.1/name/' + input)
        .then((data) => {
            const country = data[0];
            const capital = country.capital;
            const continent = country.continents;
            const flag = country.flags.svg;

            pCapital.innerText = "Capital : " + capital;
            pContinent.innerText = "Continent : " + continent;
            imgFlag.src = flag;
            imgFlag.alt = "Drapeau : " + pCountry;

            infos.appendChild(pCountry);
            infos.appendChild(pContinent);
            infos.appendChild(pCapital);
            infos.appendChild(imgFlag);
        })

        
    })
})