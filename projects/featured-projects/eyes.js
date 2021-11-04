import { EyesSimulation } from '../../components/eyes-simulation.js';

let eyesStructure = {
    title: 'Eyes',
    buttons: {
        'Activate Eyes': function activateEyes() {
            let balls = document.getElementsByClassName("eye-ball");
            document.onmousemove = function trackMouse() {
                let x = (event.clientX * 100) / window.innerWidth + "%";
                let y = (event.clientY * 100) / window.innerHeight + "%";

                for (let i = 0; i < 2; i++) {
                    balls[i].style.left = x;
                    balls[i].style.top = y;
                    balls[i].transform = "translate(-" + x + ",-" + y + ")";
                }
            };
        }
    },
    repoLink: {
        href: 'https://github.com/DylanAvernon/eyes',
        textContent: 'GitHub Repo'
    },
    classList: {
        eyesSimulation: ['simulation'],
        header3: ['header3'],
        navigationBar: {
            navigationBar: ['navigation-bar'],
            buttons: {
                'Activate Eyes': ['activate-eyes-button', 'btn', 'btn-primary'],
            }
        },
        container: ['eye-container'],
        eyes: {
            eyes: ['eyes'],
            eyeOne: {
                eye: ['eye'],
                ball: ['eye-ball']
            },
            eyeTwo: {
                eye: ['eye'],
                ball: ['eye-ball']
            }
        },
        repoLink: ['repo-link', 'link-info']
    },
    ids: {
        eyesSimulation: 'eyes-simulation',
        header3: 'eyes-simulation-header3',
        navigationBar: {
            navigationBar: 'eyes-simulation-navigation-bar',
            buttons: {
                'Activate Eyes': 'activate-eyes-button',
            }
        },
        container: 'eyes-simulation-container',
        eyes: {
            eyes: 'eyes-simulation-eyes',
            eyeOne: {
                eye: 'eye-one',
                ball: 'ball-one'
            },
            eyeTwo: {
                eye: 'eye-two',
                ball: 'ball-two'
            }
        },
        repoLink: 'eyes-simulation-repo-link'
    }
};
let eyesProperties = {
    project: new EyesSimulation(eyesStructure)
};
eyesProperties.project.render();
eyesProperties.project.style();
eyesProperties.project.activate();

export { eyesProperties };