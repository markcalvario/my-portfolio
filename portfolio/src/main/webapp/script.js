async function fetchDataFromServelet () {
    const response = await fetch("/hello");
    const text = await response.text();

    const fetchContainer = document.getElementById("fetch-container");
    fetchContainer.innerHTML = text;
    fetchContainer.classList.add("text-center");
}
fetchDataFromServelet();

