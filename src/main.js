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
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, duration: 1, stagger: 1, delay: 6 });
    gsap.fromTo(".imgcon",
        { opacity: 0,},
        { opacity: 1, delay: 8,duration: 3 });
    gsap.fromTo("#cake",
        { opacity: 0, y: 200 },
        { opacity: 1, y: -70, delay: 9.3, duration: 1 });

}