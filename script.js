console.log("Sprint Review");

const input = document.getElementById("tache");
const btnAjouter = document.getElementById("btn-ajouter");
const liste = document.getElementById("liste-taches");

function ajouterTache() {
    const texte = input.value.trim();
    if (texte === "") {
        alert("Veuillez saisir une tâche !");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = texte;
    span.style.cursor = "pointer";
    span.onclick = function () {
        li.classList.toggle("terminee");
    };

    const btn = document.createElement("button");
    btn.textContent = "Supprimer";
    btn.classList.add("btn-supprimer");
    btn.onclick = function () {
        liste.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(btn);
    liste.appendChild(li);

    input.value = "";
    input.focus();
}

btnAjouter.addEventListener("click", ajouterTache);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        ajouterTache();
    }
});
