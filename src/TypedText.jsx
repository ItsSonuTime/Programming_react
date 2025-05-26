import  { useEffect, useRef } from 'react';
import Typed from 'typed.js';


const TypedText = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ['Learn web Development','Web Designer', 'Learn HTML','Learn CSS','Learn Javascript', 'Learn React.Js', 'Learn Next.Js', 'Learn MongoDB','Learn Express.Js','Learn Full Stack Web Developer'],
      typeSpeed: 50,
      backSpeed: 25,
    
      showCursor: true,
      cursorChar: '|',
    });

    return () => {
      typed.current.destroy();
    };
  }, []);

  return <span ref={el} className="typed-text" />;
};

export default TypedText;
