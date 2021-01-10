let total = 0;
let cursors = 0;
let grandmas = 0;
let farms = 0;
let upgrade = {
    cursor: { duration: 5, cost: 15, cookies: 1, amount: 0, func: () => upgradeCookies("cursor") },
    grandma: { duration: 1, cost: 30, cookies: 1, amount: 0, func: () => upgradeCookies("grandma") },
    farm: { duration: 1, cost: 40, cookies: 8, amount: 0, func: () => upgradeCookies("farm") }
}
let cduration = 5;
let gduration = 1;
let fduration = 1;

document.getElementById("cursorupgrade").disabled = true;
document.getElementById("grandmaupgrade").disabled = true;
document.getElementById("farmupgrade").disabled = true;

let upgradeFields = Object.keys(upgrade);

for (field in upgrade) {
    setInterval(upgrade[field].func, upgrade[field].duration * 1000);
}

function addcookie(number) {
    total += number;
    newtotal();
    document.getElementById("cursorupgrade").disabled = disableUpgrade("cursor");
    document.getElementById("grandmaupgrade").disabled = disableUpgrade("grandma");
    document.getElementById("farmupgrade").disabled = disableUpgrade("farm");
}

function upgradeCookies(upgradeType) {
    addcookie(upgrade[upgradeType].cookies * upgrade[upgradeType].amount)
}

function addUpgrade(upgradeType) {
    upgrade[upgradeType].amount = upgrade[upgradeType].amount + 1;
    addcookie(-upgrade[upgradeType].cost)
    newcps()
}

function disableUpgrade(upgradeType) {
    return (total < upgrade[upgradeType].cost ? true : false);
}

function newtotal() {
    document.getElementById("total").innerHTML = total;
}

function newcps() {
    document.getElementById("cps").innerHTML = ((upgrade["cursor"].amount / cduration) + (upgrade["grandma"].amount / gduration) + (upgrade["farm"].amount * 8 / fduration)).toFixed(2);
}

