function onlyCharacter(str) {
    if (!(typeof (str) === "string")) {
        return "Invalid"
    }
    else {
        let arrayOFstr = str.split(" ")
        return arrayOFstr.join("").toUpperCase();
    }

}


console.log(onlyCharacter("  h e llo wor   ld"));
console.log(onlyCharacter("Serv er :: Do wn"));
console.log(onlyCharacter(" ha ck m e 1 @ru.c  n  "));
console.log(onlyCharacter(0));
console.log(onlyCharacter(["hack", "me"]));
console.log(onlyCharacter(true));