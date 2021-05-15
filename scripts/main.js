function makeContentAppear(teller) {
    const collapsibleContent = document.getElementById("CollapsibleContent" + teller);
    collapsibleContent.classList.toggle("open");
}


/*
Oplossing van Codaisseur:

Geen onclick attribute in de button, maar button wel class collapsible geven (in mijn CSS: selector button)
Geen ID in the div

const collapsibles = document.querySelectorAll(".collapsible");

for (let i = 0; i < collapsibles.length; i++) {
  const collapsible = collapsibles[i];

  collapsible.addEventListener("click", function () {
    const collapsibleContent = collapsible.nextElementSibling;
    collapsibleContent.classList.toggle("visible");
  });
}
*/