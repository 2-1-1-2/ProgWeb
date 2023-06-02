//Au chargement on affiche la liste des absences
document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("/PokimacDresseur");
});


const buttons = document.getElementsByTagName("button");

const buttonPressed = e => {
    if (e.target.className.split(" ")[1] == "delete") delete_(e.target.id)
    else if (e.target.className.split(" ")[1] == "update") update_(e.target.id)
    // Get ID of Clicked Element
}

for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
}

async function delete_(id) {
    console.log(id)
    const response = await fetch("/PokimacDresseur/" + id, { method: 'DELETE' });
}


async function update_(id) {
    console.log(id)
    const response = await fetch("/PokimacDresseur/" + id, { method: 'PUT' });
}



document.getElementById("orderBy").addEventListener("change", trie)

async function trie() {
    const column = document.getElementById("orderBy").value;
    console.log("on trie par " + column);
    const response = await fetch("/PokimacDresseur", {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 'column_tri': column }),
    });

    const data = await response.json();

    changeData(data)

}
