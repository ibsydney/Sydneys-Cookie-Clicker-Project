let total = 0;
let cursors = 0;
let grandmas = 0;
let farms = 0;
let upgrade = {
    cursor: { duration: 5, cost: 15, cookies: 1, amount: 0 },
    grandma: { duration: 1, cost: 30, cookies: 1, amount: 0 },
    farm: { duration: 1, cost: 40, cookies: 8, amount: 0 }
}
let cduration = 5;
let gduration = 1;
let fduration = 1;

document.getElementById("cursorupgrade").disabled = true;
document.getElementById("grandmaupgrade").disabled = true;
document.getElementById("farmupgrade").disabled = true;

let upgradeFields = Object.keys(upgrade);

for (field in upgrade) {
    setInterval(() => upgradeCookies(field), upgrade[field].duration * 1000);
}

function addcookie(number) {
    total += number;
    newtotal();
    document.getElementById("cursorupgrade").disabled = disableUpgrade("cursor");
    document.getElementById("grandmaupgrade").disabled = disableUpgrade("grandma");
    document.getElementById("farmupgrade").disabled = disableUpgrade("farm");
}

function upgradeCookies(upgradeType) {
    addcookie(upgrade[upgradeType].amount)
}

function addUpgrade(upgradeType) {
    upgrade[upgradeType].amount++
    addcookie(-upgrade[upgradeType].cost)
    newcps()
}

function disableUpgrade(upgradeType) {
    if (total <= upgrade[upgradeType].cost - 1) {
        return true;
    } else {
        return false;
    }
}

function newtotal() {
    document.getElementById("total").innerHTML = total;
}

function newcps() {
    document.getElementById("cps").innerHTML = ((upgrade["cursor"].amount / cduration) + (upgrade["grandma"].amount / gduration) + (upgrade["farm"].amount * 8 / fduration)).toFixed(2);
}

