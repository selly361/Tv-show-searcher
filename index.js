let input = document.querySelector("input")
let body = document.body;
let value;
let body2 = document.querySelector(".actual-container")
let button = document.querySelector("button");
body2.style.backgroundColor = 'initial'
button.onclick = () => {
    body2.style.backgroundColor = 'initial'
    let arr = [...body2.children]
    arr.forEach(element => body2.removeChild(element))
}

input.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        body2.style.backgroundColor = 
        body2.style.display = "block";
        value = input.value;
        input.value = ""


        async function getData(){
        let url = `https://api.tvmaze.com/singlesearch/shows?q=${value ? value : value=''}`
        let rawData = await fetch(url);

        let information = await rawData.json();
            let div= document.createElement("div");
            div.style.display = "flex"
            div.style.justifyContent = "center"
            let str = information.genres.join(", ")
            div.innerHTML = `<main><h1>Show Name: <p>${information.name}</p></h1> 
            <h1>Genre:<p>${str}</p></h1>
            <h1>Language: <p>${information.language}</p></h1>
            <h1>Network: <p>${information.network.name}</p></h1>
            <h1>Status: <p>${information.status == 'Running' ? "Ongoing" : "Completed"}</p></h1>
            <span><img src="${information.image.original}"><p>${information.summary}</p></span>
            </main>
            
            
           
            
            `

            
            body2.prepend(div)
     
     }

        getData()
    }
    else {
        return
    }
})


// let container = document.createElement("div");

// container.append(image)
// container.insertAdjacentElement("afterbegin", div)
// body2.prepend(container)
// let span = document.createElement("span");
// body2.append(span)
