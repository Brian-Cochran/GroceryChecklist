const categories = [
    {name: "Staple Foods", id: "staple", items:[]},
    {name: "Snacks", id: "snack", items:[]},
    {name: "Beverages", id: "beverage", items:[]},
    {name: "Produce", id: "produce", items:[]},
    {name: "Cold Items", id: "cold", items:[]},
    {name: "Frozen Items", id: "frozen", items:[]}
];

const main = document.getElementById("cardsArea");

function setStyle(element){
    if (element.style["text-decoration"] === "line-through"){
        element.style = "text-decoration: none";
    } else {
        element.style = "text-decoration: line-through";
    }
}

function addItem(id){
    // Getting items and input elements
    const items = document.getElementById(id+"Items");
    const input = document.getElementById(id+"Input");

    const item = document.createElement("h5");

    // Setting attributes and values
    item.setAttribute("class", "item");
    item.innerHTML = input.value;
    item.setAttribute("onclick", "setStyle(this)");
    item.setAttribute("ondblclick", "this.remove()");

    // Adding item
    items.appendChild(item);

    // Clear input field
    input.value="";
}

function createLayout(){
    categories.forEach(element => {
        // Creating card structure
        const column = document.createElement("div");
        column.setAttribute("class", "col-md-4");

        const card = document.createElement("div");
        card.setAttribute("class", "contentCard");

        const title = document.createElement("h2");
        title.setAttribute("class", "cardTitle");

        const hr = document.createElement("hr");

        const items = document.createElement("div");
        items.setAttribute("class", "addedItems");
        items.setAttribute("id", element.id+"Items");

        const centered = document.createElement("div");
        centered.setAttribute("class", "centered");

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Enter Item");
        input.setAttribute("id", element.id+"Input");

        const button = document.createElement("button");
        button.setAttribute("id", element.id);
        button.setAttribute("onclick", "addItem(this.id)");
        button.setAttribute("class", "addItemButton");

        // Setting values
        title.innerHTML = element.name;
        button.innerHTML = "Add Item";

        // Appending elements
        centered.appendChild(input);
        centered.appendChild(document.createElement("br"));
        centered.appendChild(document.createElement("br"));
        centered.appendChild(button);
        card.appendChild(title);
        card.appendChild(hr);
        card.appendChild(items);
        card.appendChild(centered);
        column.appendChild(card);
        main.appendChild(column);
    })
}

createLayout();