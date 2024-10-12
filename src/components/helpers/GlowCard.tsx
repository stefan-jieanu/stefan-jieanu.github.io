import { useEffect } from 'react';

// @ts-ignore
const GlowCard = ({ children, identifier }) => {
  useEffect(() => {
    const CONTAINER = Array.from(document.querySelector(`.glow-container-${identifier}`) as unknown as HTMLCollectionOf<HTMLElement>);
    const CARDS = Array.from(document.querySelectorAll(`.glow-card-${identifier}`) as unknown as HTMLCollectionOf<HTMLElement>);

    const CONFIG = {
      proximity: 40,
      spread: '80',
      blur: '12',
      gap: '32',
      vertical: false,
      opacity: '0',
    };

    const UPDATE = (event: PointerEvent) => {
      for (const CARD of CARDS) {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          event?.x > CARD_BOUNDS.left - CONFIG.proximity &&
          event?.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          event?.y > CARD_BOUNDS.top - CONFIG.proximity &&
          event?.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty('--active', '1');
        } else {
          CARD.style.setProperty('--active', CONFIG.opacity);
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(event?.y - CARD_CENTER[1], event?.x - CARD_CENTER[0]) *
            180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty('--start', (ANGLE + 90).toString());
      }
    };

    document.body.addEventListener('pointermove', UPDATE);

    const RESTYLE = () => {
      for (const CON of CONTAINER) {
        CON.style.setProperty('--gap', CONFIG.gap);
        CON.style.setProperty('--blur', CONFIG.blur);
        CON.style.setProperty('--spread', CONFIG.spread);
        CON.style.setProperty(
          '--direction',
          CONFIG.vertical ? 'column' : 'row'
        );
      }
    };

    RESTYLE();
    // UPDATE();

    // Cleanup event listener
    return () => {
      document.body.removeEventListener('pointermove', UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;