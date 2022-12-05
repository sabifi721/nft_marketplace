// import React from 'react'
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// const Particle = () => {
//   const particlesInit = async (main) => {
//     console.log(main);

//     // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
//     // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//     // starting from v2 you can add only the features you need reducing the bundlesize
//     await loadFull(main);
//      };
//      const ParticlesLoaded = (container) =>{
//         console.log(container)
//      }
//     return (
     
//         <Particles
//         id="tsparticles"
//         init={particlesInit}
//         Loaded={ParticlesLoaded}
//         options={{
//         "fullScreen": {
//             "enable": true,
//             "zIndex": 1
//                },
//         "particles": {
//             "number": {
//                 "value": 10,
//                 "density": {
//                     "enable": false,
//                     "value_area": 800
//                 }
//             },
//             "color": {
//                 "value": "#fff"
//             },
//             "shape": {
//                 "type": "star",
//                 "options": {
//                     "sides": 5
//                 }
//             },
//             "opacity": {
//                 "value": 0.8,
//                 "random": false,
//                 "anim": {
//                     "enable": false,
//                     "speed": 1,
//                     "opacity_min": 0.1,
//                     "sync": false
//                 }
//             },
//             "size": {
//                 "value": 4,
//                 "random": false,
//                 "anim": {
//                     "enable": false,
//                     "speed": 40,
//                     "size_min": 0.1,
//                     "sync": false
//                 }
//             },
//             "rotate": {
//                 "value": 0,
//                 "random": true,
//                 "direction": "clockwise",
//                 "animation": {
//                     "enable": true,
//                     "speed": 5,
//                     "sync": false
//                 }
//             },
//             "line_linked": {
//                 "enable": true,
//                 "distance": 600,
//                 "color": "#000",
//                 "opacity": 0.4,
//                 "width": 2
//             },
//             "move": {
//                 "enable": true,
//                 "speed": 2,
//                 "direction": "none",
//                 "random": false,
//                 "straight": false,
//                 "out_mode": "out",
//                 "attract": {
//                     "enable": false,
//                     "rotateX": 600,
//                     "rotateY": 1200
//                 }
//             }
//         },
//         "interactivity": {
//             "events": {
//                 "onhover": {
//                     "enable": true,
//                     "mode": ["grab"]
//                 },
//                 "onclick": {
//                     "enable": false,
//                     "mode": "bubble"
//                 },
//                 "resize": true
//             },
//             "modes": {
//                 "grab": {
//                     "distance": 400,
//                     "line_linked": {
//                         "opacity": 1
//                     }
//                 },
//                 "bubble": {
//                     "distance": 400,
//                     "size": 40,
//                     "duration": 2,
//                     "opacity": 8,
//                     "speed": 3
//                 },
//                 "repulse": {
//                     "distance": 200
//                 },
//                 "push": {
//                     "particles_nb": 4
//                 },
//                 "remove": {
//                     "particles_nb": 2
//                 }
//             }
//         },
//         "retina_detect": true,
//         "background": {
//             "color": "#ffff",
//             "image": "",
//             "position": "50% 50%",
//             "repeat": "no-repeat",
//             "size": "cover"
//         }
//     }}
//     />
//   )
// }

// export default Particle
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#0d47a1",
                //     },
                // },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.8,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.05,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};
export default Particle