
import React, { useEffect, useRef, useState } from "react";

const LazySection = ({ children }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
  }, []);

  return <div ref={ref}>{visible ? children : null}</div>;
};

export default LazySection;
