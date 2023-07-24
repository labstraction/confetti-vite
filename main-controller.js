import confetti from "canvas-confetti";

export class MainController {
    constructor() {}

    render() {
        const mainContainer = document.getElementById("main-container");

        const button1 = document.createElement("button");
        button1.appendChild(document.createTextNode("fire1"));
        button1.addEventListener("click", () => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
        });
        mainContainer.appendChild(button1);

        const button2 = document.createElement("button");
        button2.appendChild(document.createTextNode("fire2"));
        button2.addEventListener("click", () => {
            var end = Date.now() + 15 * 1000;
            var colors = ["#bb0000", "#ffffff"];

            (function frame() {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors,
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors,
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
        });
        mainContainer.appendChild(button2);

        const button3 = document.createElement("button");
        button3.appendChild(document.createTextNode("fire3"));
        button3.addEventListener('click', () => {
            var defaults = {
                spread: 360,
                ticks: 50,
                gravity: 0,
                decay: 0.94,
                startVelocity: 30,
                shapes: ['star'],
                colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
              };
              
              function shoot() {
                confetti({
                  ...defaults,
                  particleCount: 40,
                  scalar: 1.2,
                  shapes: ['star']
                });
              
                confetti({
                  ...defaults,
                  particleCount: 10,
                  scalar: 0.75,
                  shapes: ['circle']
                });
              }
              
              setTimeout(shoot, 0);
              setTimeout(shoot, 100);
              setTimeout(shoot, 200);
        })
        mainContainer.appendChild(button3);
    }
}
