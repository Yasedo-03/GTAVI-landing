import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const JasonVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set('.jason-vd-wrapper', { marginTop: '-130vh' });
    gsap.set('.jason-vd-inner', { opacity: 0 });
    gsap.set('.jasonNextTitle', { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.jason-vd-wrapper',
        start: 'top top',
        end: '+=300% top',
        scrub: true,
        pin: true,
      },
    });

    tl.to('.jason', { delay: 1, opacity: 0, ease: 'power1.inOut' });
    tl.to('.jason-vd-inner', { opacity: 1, scale: 1.2, duration: 2, ease: 'power1.inOut' });

    videoRef.current.onloadedmetadata = () => {
      tl.to(
        videoRef.current,
        { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' },
        '<'
      )
        .to('.jasonNextTitle', { opacity: 1, duration: 0.5, ease: 'power1.inOut' })
        .to('.jason-vd-inner', { opacity: 0, duration: 1, scale: 1, ease: 'power1.inOut' }, '>')
        .to('.jasonNextTitle', { y: '-30vh', duration: 1.5 });
    };
  }, []);

  return (
    <section className="jason-vd-wrapper relative">
      <div className="jason-vd-inner h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/Jason_Duval_opt.mp4"
          className="jason-vd"
        />
      </div>
      <h1 className="jasonNextTitle">Quoi qu'il arrive, je couvre tes arrières.</h1>
    </section>
  );
};

export default JasonVideo;
