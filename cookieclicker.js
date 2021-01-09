let total = 0;
let cursors = 0;

document.getElementById("cursorupgrade").disabled = nocursor();
setInterval(cursor, 3000);

function cursor() {
    addcookie(cursors);
}

function addcookie(number) {
    total += number;
    newtotal();
    document.getElementById("cursorupgrade").disabled = nocursor();
}

function addcursor() {
    cursors++;
    addcookie(-15);
}

function nocursor() {
    if (total <= 14) {
        return true;
    } else {
        return false;
    }
}

function newtotal() {
    document.getElementById("total").innerHTML = total;
}

