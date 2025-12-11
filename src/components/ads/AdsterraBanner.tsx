import { useEffect, useRef } from "react";

const AdsterraBanner = () => {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = "//pl28234622.effectivegatecpm.com/f5ace0cc99c86efe9085df7ac09c1189/invoke.js";
    
    if (adContainerRef.current) {
      adContainerRef.current.appendChild(script);
    }

    return () => {
      if (adContainerRef.current && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="w-full py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div ref={adContainerRef}>
          <div id="container-f5ace0cc99c86efe9085df7ac09c1189"></div>
        </div>
      </div>
    </section>
  );
};

export default AdsterraBanner;
