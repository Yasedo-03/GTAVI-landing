import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const JasonNext = () => {
  useGSAP(() => {
    gsap.set('.jasonNext', { marginTop: '-50vh' });

    gsap.to('.jasonNext-left', {
      scrollTrigger: {
        trigger: '.jasonNext',
        start: 'top center',
        end: '80% center',
        scrub: 2,
      },
      y: -150,
      ease: 'power1.inOut',
    });

    gsap.to('.jasonNext-right', {
      scrollTrigger: {
        trigger: '.jasonNext',
        start: 'top center',
        end: '80% center',
        scrub: 2,
      },
      y: -250,
      ease: 'power1.inOut',
    });
  });

  return (
    <section className="jasonNext">
      <div className="jasonNext-columns">
        <div className="jasonNext-left">
          <h2>Un jour de plus au paradis, pas vrai ?</h2>
          <div className="jason-6">
            <img src="/images/jason-6.webp" />
          </div>
          <div className="jason-4">
            <img src="/images/jason-4.webp" />
          </div>
        </div>

        <div className="jasonNext-right">
          <p>
            Sa rencontre avec Lucia pourrait être la meilleure chose qui lui soit arrivée, ou bien
            la pire. Jason espère que tout ira pour le mieux, mais rien n'est plus incertain.
          </p>
          <div className="jason-5">
            <img src="/images/jason-5.webp" />
          </div>
        </div>
      </div>
    </section>
  );
};
