async function fetchDataFromServelet () {
    const response = await fetch("/hello");
    const text = await response.json();
    console.log(text)

    const funFactsContainer = document.getElementById("fun-facts-container");
    const unorderedList = document.createElement('ul');
    text.map((fact,index)=>{
        const factElement = document.createElement("li");
        factElement.innerText = fact;
        unorderedList.append(factElement);
    })
    funFactsContainer.append(unorderedList);


    //funFactsContainer.innerHTML = text;
    //fetchContainer.classList.add("text-center");
}
fetchDataFromServelet();

