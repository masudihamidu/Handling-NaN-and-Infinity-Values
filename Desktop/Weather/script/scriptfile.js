let form = document.querySelector(".top-banner form");
let input = document.querySelector(".top-banner input");
let msg = document.querySelector(".top-banner .msg");
let list = document.querySelector("ajax-section .cities");
let apiKey = "4d8fb5b93d4af21d66a2948710284366";

form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = input.value;

    let listItems = list.querySelectorAll(".ajax-section .city");
    let listItemsArray = Array.from(listItems);

    if (listItemsArray.length > 0){
        const filteredArray = listItemsArray.filter(el =>{
            let content = "";

            if (inputVal.includes(",")) {
                if (inputVal.split(",") [1].length > 2) {
                    inputVal = inputVal.split(",")[0];
                    content = el
                    .querySelector(".city-name span")
                    .textContent.toLocaleLowerCase();
                }
                else{
                    content = el.querySelector(".city-name").dataset.name.toLocaleLowerCase();
                }
            }
            else{
                content = el.querySelector (".city-name span").textContent.toLocaleLowerCase();
            }
            return content == inputVal.toLocaleLowerCase();
        });

        if (filteredArray.length > 0) {
            msg.textContent = `You are ready know the weather for ${ filteredArray[0].querySelector(".city-name span").textContent
        } be specific`;
        form.reset();
        input.focus();
        return;
        }
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const {main, name, sys, weather} = data;
        const icon = `https://s3-us-west-2-amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
    })
})