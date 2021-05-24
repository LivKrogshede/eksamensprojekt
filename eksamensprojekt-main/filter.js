
//arrays der indeholder billederne som skal bruges
brunSlide = ["klar.png", "bruntemp.png", "effekt.png"];
stegSlide = ["klar.png", "Stegetemp.png", "pande.png", "effekt.png"];
kogSlide = ["klar.png", "kogtemp.png", "effekt.png"];

//Koden i denne funktion udføres når der trykkes på knapperne. Den har parametret slide, som skifter mellem Brun, steg og kog
//Koden er dynamisk og derved fremtidssikret, fordi den automatisk tilpasser sig længden af arrayet
function selectSlide(slide) {

    //denne linje fjerner alt html mellem de to div i slideCon
    document.getElementById("slideCon").innerHTML ="";

    console.log("slide: " + slide);

    //hvis vores parameter (slide) er = brun så udfør den kode der står i denne if sætning. 
    if (slide == 'brun') {
        console.log("brun er valgt");

        //vores forloop kører det antal gange, som vores array er langt(man kunne ligeså godt have brugt forEach)
        //vi laver en ny variable der hedder i og sætter den =0 
        //derefter siger vi at loopet skal blive ved med at kører indtil at  i, ikke længere er mindre, end længden på arrayet(array.length) 
        //her bestemmer vi at for hver gang loppet kører skal vi sige i+1 således at den stiger med 1, for hver gang 
        for(i=0; i< brunSlide.length; i++) {
            console.log(brunSlide[i]);

            //dette er en lokal variable, hvori jeg gemmer navnet på det billede vi er nået til, baseret på i indexet
            let imgName = brunSlide[i];

            //vi går ind i dokumentet og finder elementet "slideCon" og tilføjer til dets html
            //det vi tilføjer er et img tag, hvor vi i src indsætter stien til billedemappen + navnet på det billede vi er nået til (imgName)
            document.getElementById("slideCon").innerHTML += "<img src='assets/slides/" + imgName + "'>";
        }
    }
    else if (slide == 'steg') {
        console.log("steg er valgt");

        for(i=0; i< stegSlide.length; i++) {
            console.log(stegSlide[i]);

            document.getElementById("slideCon").innerHTML += "<img src='assets/slides/" + stegSlide[i] + "'>";
        }

    }
    else if (slide == 'kog') {
        console.log("kog er valgt");
       
        for(i=0; i< kogSlide.length; i++) {
            console.log(kogSlide[i]);

            document.getElementById("slideCon").innerHTML += "<img src='assets/slides/" + kogSlide[i] + "'>";
        }
    }
}