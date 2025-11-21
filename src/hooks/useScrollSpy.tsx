import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds, options = {}) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observers = [];
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const opts = { ...defaultOptions, ...options };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        opts
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return activeId;
}
