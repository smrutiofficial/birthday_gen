function newsc() {
    const newscr = document.querySelector(".newsc");
    newscr.style.display = "flex";
}

function rt() {
    var bgMusic = document.getElementById("bgMusic");
    if (bgMusic.paused) {
        bgMusic.play();
    } else {
        bgMusic.pause();
    }

    const btn12 = document.querySelector("#btn12");
    btn12.style.display = "none";
    gsap.fromTo(".balloon",
        { opacity: 0, },
        { opacity: 1, duration: 0.3, stagger: 1 });
    gsap.fromTo("#wish",
        { opacity: 0, x: 200 },
        { opacity: 1, x: 0, duration: 1, stagger: 1, delay: 5 });
    gsap.fromTo(".imgcon",
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, delay: 5.8 });
    gsap.fromTo("#cake",
        { opacity: 0, x: -2000 },
        { opacity: 1, x: 0, delay: 6.8, duration: 1 });

}