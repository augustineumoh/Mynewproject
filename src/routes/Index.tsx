


// Duplicate list to simulate endless scroll
const loopedItems = [...foodItems, ...foodItems];

const mainpage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { addToCart } = useCart();

  // ✅ Scroll animation effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frameId: number;
    let paused = false;

    const scroll = () => {
      if (!paused) {
        container.scrollLeft += 0.5;

        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;

        if (container.scrollLeft >= scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);

    const pause = () => (paused = true);
    const resume = () => (paused = false);

    container.addEventListener('mouseenter', pause);
    container.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(frameId);
      container.removeEventListener('mouseenter', pause);
      container.removeEventListener('mouseleave', resume);
    };
  }, []);

  // ✅ AOS animation effect
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => AOS.init({ duration: 1000 }));
      import('aos/dist/aos.css');
    }
  }, []);


  return (
    
  );
};

export default mainpage;