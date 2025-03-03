document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const replayMusicBtn = document.getElementById("replay-music");
    const message = document.getElementById("message");
    const finalMessage = document.getElementById("final-message");
    const bgMusic = document.getElementById("bg-music");

    startBtn.addEventListener("click", function() {
        startBtn.style.display = "none"; 
    bgMusic.currentTime = 14; 
    bgMusic.play();  
    bgMusic.volume = 0.5;
        typeWriter(`
Kol sana w enty tayba ya 7abebty, kol sana w enty ma3aya, kol sana w enty agmal w a7la bnt fe el donya. 💖 Kol sana w enty malakty, dahry, sandy, 3elty, okhty, sa7bety, bnty, w 7abebty. Kol sana w enty ash6ar, ang7, w a7n bnt fe el donya.

Kol sana w enty tayba ya rez2y w 7olmy, 3o2bal el 3omr koloh m3 b3d, w 3o2bal ma ne7tafel b 3eed miladek kol sana, w 3o2bal million sana ya Rab, w te7a2y kolly enty nefsek feh ya agmal 7aga fe 7ayaty. 🎈🎁

Enty agmal w a3zam bnt fe el donya, el bnt el methalya fe 3yoni, w el wa7eeda elli fe alby, 3a2ly, w 7odny. Enty kol 7aga 7elwa, enty 7ayaty w 3omry koloh. Youm miladek b3tbro youm milady, el youm elli ba7tafel beh w bashkor Rabna 3ala el ne3ma elli an3am 3alaya beha, el ne3ma elli heya enty ya 7abebet 2alb baby w ro7 baby w 3a2l baby w 7ayat baby, ya 3youn baby. 👑💖

Rabna ykhaliky leya w ye7fzek leya el 3omr koloh, w sana wara sana ne7tafel beky w b 3eed miladek, w b kol a3yad el donya ya 7abebty. 🥰🎉

Ana asf law za3lana meny, w asf law za3altak fe youm men el ayam, eftakreely el 7agat el 7elwa bas, msh aktr ya 7abebty. Rabna ye7fzek leya w ykhaliky leya el 3omr koloh.

Ana ba7ebek, bgad ba7ebek 7ob msh 6abe3y, w nafsy feki w nafsy anolky wallah. ❤️💍

Bo3dak, hayegy el youm elli ne7tafel feh b 3eed miladek fe betna, in sha2 Allah ya 7abeba. Rabna yekremna fe 7ayatna el gaya kolaha, w yba3ed 3anna kol el moshakel w kol el 3yoon, w y2areb lena kol 7aga 7elwa, w yba3ed ay 7aga we7sha. Rabna yerzo2ek w yekremek fe 7ayatek el gaya kolaha, w ana fe dahrek el 3omr koloh, w 3omry ma hasibek lw7dek, wala hastaghna 3ank abadan.

Kol sana w enty tayba ya 7abebet 2alby, w 3o2bal el 3omr koloh ya Rab. 🥳🎂💖
Ba7ebek. ❤️

`, message, function() {
            nextBtn.classList.remove("hidden");
        });
    });

    nextBtn.addEventListener("click", function() {
        nextBtn.style.display = "none"; 
        typeWriter(` Ana 3omry ma kont a7lam en fe 7ad zayek yeb2a fe 7ayaty.
        Enty el ro7 w el 7ob w a7la 7aga fe el donya kolaha.
        Kol sana w enty ma3aya w kol sana w enty bkhair.
        
        Ba7ebek mn kol 2alby, w dayman fe dahrek w omry ma hasibek lw7dek. ❤️💫`, finalMessage, function() {
            replayMusicBtn.classList.remove("hidden");
        });
    });

    replayMusicBtn.addEventListener("click", function() {
        bgMusic.currentTime = 0;
        bgMusic.play();
    });

    function typeWriter(text, element, callback) {
        let i = 0;
        element.innerHTML = "";
        element.classList.remove("hidden");

        function typing() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, 50);
            } else if (callback) {
                callback();
            }
        }

        typing();
    }

    // قلوب متحركة
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 500);
});
