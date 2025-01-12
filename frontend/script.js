const svgObject = document.getElementById("mapa");
    svgObject.addEventListener("load", () => {
        const svgDoc = svgObject.contentDocument;
        const time1 = svgDoc.getElementById("sacramento-kings");
        const time2 = svgDoc.getElementById("golden-state-warriors");
        const time3 = svgDoc.getElementById("los-angeles-lakers");
        const time4 = svgDoc.getElementById("los-angeles-clippers");
        const time5 = svgDoc.getElementById("phoenix-suns");

        const time6 = svgDoc.getElementById("portland-trail-blazers");
        const time7 = svgDoc.getElementById("utah-jazz");
        const time8 = svgDoc.getElementById("denver-nuggets");
        const time9 = svgDoc.getElementById("oklahoma-city-thunder");
        const time10 = svgDoc.getElementById("minnesota-timberwolves");

        const time11 = svgDoc.getElementById("san-antonio-spurs");
        const time12 = svgDoc.getElementById("hounston-rockets");
        const time13 = svgDoc.getElementById("dallas-mavericks");
        const time14 = svgDoc.getElementById("memphis-grizzlies");
        const time15 = svgDoc.getElementById("new-orleans-pelicans");

        const time16 = svgDoc.getElementById("indiana-pacers");
        const time17 = svgDoc.getElementById("chicago-bulls");
        const time18 = svgDoc.getElementById("milwaukee-bucks");
        const time19 = svgDoc.getElementById("detroit-pistons");
        const time20 = svgDoc.getElementById("cleveland-cavaliers");

        const time21 = svgDoc.getElementById("miami-heat");
        const time22 = svgDoc.getElementById("orlando-magic");
        const time23 = svgDoc.getElementById("charlotte-hornets");
        const time24 = svgDoc.getElementById("atlanta-hawks");
        const time25 = svgDoc.getElementById("washington-wizards");

        const time26 = svgDoc.getElementById("toronto-raptors");
        const time27 = svgDoc.getElementById("brooklyn-nets");
        const time28 = svgDoc.getElementById("philadelphia-76ers");
        const time29 = svgDoc.getElementById("new-york-kinicks");
        const time30 = svgDoc.getElementById("boston-celtics");

        time1.addEventListener("click", () => alert("sacramento-kings"));
        time2.addEventListener("click", () => alert("golden-state-warriors"));
        time3.addEventListener("click", () => alert("los-angeles-lakers"));
        time4.addEventListener("click", () => alert("los-angeles-clippers"));
        time5.addEventListener("click", () => alert("phoenix-suns"));

        time6.addEventListener("click", () => alert("portland-trail-blazers"));
        time7.addEventListener("click", () => alert("utah-jazz"));
        time8.addEventListener("click", () => alert("denver-nuggets"));
        time9.addEventListener("click", () => alert("oklahoma-city-thunder"));
        time10.addEventListener("click", () => alert("minnesota-timberwolves"));

        time11.addEventListener("click", () => alert("san-antonio-spurs"));
        time12.addEventListener("click", () => alert("hounston-rockets"));
        time13.addEventListener("click", () => alert("dallas-mavericks"));
        time14.addEventListener("click", () => alert("memphis-grizzlies"));
        time15.addEventListener("click", () => alert("new-orleans-pelicans"));

        time16.addEventListener("click", () => alert("indiana-pacers"));
        time17.addEventListener("click", () => alert("chicago-bulls"));
        time18.addEventListener("click", () => alert("milwaukee-bucks"));
        time19.addEventListener("click", () => alert("detroit-pistons"));
        time20.addEventListener("click", () => alert("cleveland-cavaliers"));

        time21.addEventListener("click", () => alert("miami-heat"));
        time22.addEventListener("click", () => alert("orlando-magic"));
        time23.addEventListener("click", () => alert("charlotte-hornets"));
        time24.addEventListener("click", () => alert("atlanta-hawks"));
        time25.addEventListener("click", () => alert("washington-wizards"));

        time26.addEventListener("click", () => alert("toronto-raptors"));
        time27.addEventListener("click", () => alert("brooklyn-nets"));
        time28.addEventListener("click", () => alert("philadelphia-76ers"));
        time29.addEventListener("click", () => alert("new-york-kinicks"));
        time30.addEventListener("click", () => alert("boston-celtics"));
    });

let lastScrollPosition = 0; // Posição do scroll anterior
const nav = document.querySelector("nav"); // Seleciona o menu de navegação

window.addEventListener("scroll", () => {
  const currentScrollPosition = window.scrollY;

  if (currentScrollPosition > lastScrollPosition) {
      // Rolando para baixo - Esconder o nav
      nav.style.transform = "translateY(-100%)";
  } else {
      // Rolando para cima - Mostrar o nav
      nav.style.transform = "translateY(0)";
  }

  lastScrollPosition = currentScrollPosition; // Atualiza a posição anterior
});

const object = document.getElementById("mapa");
object.addEventListener("load", () => {
  const svgDoc = object.contentDocument;
  const times = svgDoc.querySelectorAll("rect.team");

  times.forEach(time => {
      time.style.transition = "transform 0.4s"; // Transição suave

      time.addEventListener("mouseenter", () => {
        time.style.transform = "scale(1.004)"; // Aumenta em 10%
      });

      time.addEventListener("mouseleave", () => {
        time.style.transform = "scale(1)"; // Retorna ao tamanho original
      });
  });
});