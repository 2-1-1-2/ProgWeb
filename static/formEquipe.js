document.addEventListener("DOMContentLoaded", async function () {
    const response = await fetch("/AjoutEquipe");
});

document.getElementById("addEquipe").onclick = function create() {
    console.log("ça marche");
    const nom = document.getElementById("nom").value;
    const pokimacEquipe = { nom };

    const response = fetch("/ajouterPokimacEquipe", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ 'pokimacE': pokimacEquipe }),
    });

    alert("enregistré !");

}