let total = 0;
let cursors = 0;
let grandmas = 0;
let farms = 0;
let upgrade = {
    cursor: { duration: 5, cost: 15, cookies: 1, amount: 0, func: () => upgradeCookies("cursor"), button: "cursorupgrade", costid: "cursorcost" },
    grandma: { duration: 1, cost: 75, cookies: 1, amount: 0, func: () => upgradeCookies("grandma"), button: "grandmaupgrade", costid: "grandmacost" },
    farm: { duration: 1, cost: 100, cookies: 8, amount: 0, func: () => upgradeCookies("farm"), button: "farmupgrade", costid: "farmcost" }
}

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
    upgrade[upgradeType].amount++;
    addcookie(-upgrade[upgradeType].cost)
    newcps()
    upgrade[upgradeType].cost = Math.round(upgrade[upgradeType].cost * 1.1);
    document.getElementById(upgrade[upgradeType].costid).innerHTML = "Cost: " + upgrade[upgradeType].cost + " &#127850";
}

function disableUpgrade(upgradeType) {
    return (total < upgrade[upgradeType].cost ? true : false);
}

function newtotal() {
    document.getElementById("total").innerHTML = total;
}

function newcps() {
    let sum = 0;
    for (field in upgrade) {
        sum += upgrade[field].cookies * upgrade[field].amount / upgrade[field].duration;
    }
    document.getElementById("cps").innerHTML = sum.toFixed(2);
}

function removeShakeCookie() {
    document.getElementById("cookiebutton").classList.remove("shaking");
}

function shakeCookie() {
    document.getElementById("cookiebutton").classList.add("shaking");
    setTimeout(removeShakeCookie, 200);
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}