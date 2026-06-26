import { Component } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-graph-style',
  imports: [],
  template: ` <div id="particles-js"></div> `,
  styles: `
    #particles-js {
      position: fixed;
      width: 100%;
      height: 100vh;
      z-index: 0; 
    }
  `,
})
export class GraphStyle {
  ngAfterViewInit(): void {
    // Inicializamos las partículas una vez que el DOM del componente esté listo
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 45,
          density: { enable: true, value_area: 800 },
        },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
          value: 0.5,
          random: false,
        },
        size: {
          value: 5,
          random: true,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 2,
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
            mode: 'grab',
          },
          onclick: {
            enable: true,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }
}
