let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "yukina-chibi") {
            event.target.setAttribute("src", "yukina-2.png");
            return;
        } else if (event.target.id === "sayo-chibi") {
            event.target.setAttribute("src", "sayo-2.png");
            return;
        } else if (event.target.id === "ako-chibi") {
            event.target.setAttribute("src", "ako-2.png");
            return;
        } else if (event.target.id === "rinko-chibi") {
            event.target.setAttribute("src", "rinko-2.png");
            return;
        } else if (event.target.id === "lisa-chibi") {
            event.target.setAttribute("src", "lisa-2.png");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "yukina-chibi") {
            event.target.setAttribute("src", "yukina-1.png");
            return;
        }
        if (event.target.id === "sayo-chibi") {
            event.target.setAttribute("src", "sayo-1.png");
            return;
        }
        if (event.target.id === "ako-chibi") {
            event.target.setAttribute("src", "ako-1.png");
            return;
        }
        if (event.target.id === "rinko-chibi") {
            event.target.setAttribute("src", "rinko-1.png");
            return;
        }
        if (event.target.id === "lisa-chibi") {
            event.target.setAttribute("src", "lisa-1.png");
            return;
        }
    });
}