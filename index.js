function hisob(yil, oy, kun) {
    
    let joriy_sana = new Date(yil, oy - 1, kun);

    let millisaniya_farki = joriy_sana.getTime() - new Date("1970-01-01").getTime();

    let kun_farki = Math.floor(millisaniya_farki / (1000 * 3600 * 24));

    console.log("1970 yilning 1 yanvaridan " + yil + "-" + oy + "-" + kun + " gacha " + kun_farki + " kun o'tgan.");
}

let yil = parseInt(prompt("Iltimos, joriy yilni kiriting:"));
let oy = parseInt(prompt("Iltimos, joriy oyni kiriting:"));
let kun = parseInt(prompt("Iltimos, joriy kunni kiriting:"));


hisob(yil, oy, kun);

