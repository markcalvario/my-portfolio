const submitMessage = document.getElementById("submit-message");
let googleMapAPIKey="";

async function fetchDataFromServelet () {
    const response = await fetch("/hello");
    const text = await response.json();
    //console.log(text)

    const funFactsContainer = document.getElementById("fun-facts-container");
    const unorderedList = document.createElement('ul');
    text.map((fact,index)=>{
        const factElement = document.createElement("li");
        factElement.innerText = fact;
        unorderedList.append(factElement);
    })
    funFactsContainer.append(unorderedList);
}

async function fetchGoogleMapAPI(){
    const response = await fetch("/google-map");
    googleMapAPIKey = await response.text();
}

function createMap() {
    const columbiaUniversity = {lat: 40.807537, lng: -73.962570}
    const map = new google.maps.Map(
        document.getElementById('map-result'),
        {center: columbiaUniversity,
            zoom: 14,
            controlSize: 25
        });
    const marker = new google.maps.Marker({
        position: columbiaUniversity,
        map: map,
    });

}
fetchDataFromServelet();
fetchGoogleMapAPI();
createMap();