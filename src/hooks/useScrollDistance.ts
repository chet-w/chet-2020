import React, { useState, useEffect } from 'react'

interface Props {
  threshold: number
};

const useScrollDistance = ({ threshold }: Props) => {
  
  const [hasBeenScrolled, setHasBeenScrolled] = useState();

  useEffect(() => {
    const handleScroll = () => {
      setHasBeenScrolled(threshold && window.scrollY >= threshold)
    };

    window.addEventListener("scroll", () => handleScroll());
    return () => window.removeEventListener("scroll", () => handleScroll());
  }, []);

  console.log(hasBeenScrolled);

  return hasBeenScrolled;
}

export default useScrollDistance
