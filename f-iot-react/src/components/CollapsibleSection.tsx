import React, { useRef, useLayoutEffect } from "react";

const h2Style: React.CSSProperties = {
  backgroundColor: "#222",
  color: "#815854",
  padding: "6px 16px 10px",
  cursor: "pointer",
  borderRadius: "6px",
  userSelect: "none",
  transition: "0.2s",
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

function CollapsibleSection({
  title,
  children,
  isOpen,
  onToggle,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (isOpen && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      
      requestAnimationFrame(() => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTop = 0;
        }
        requestAnimationFrame(() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0;
          }
          
          setTimeout(() => {
            if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollTop = 0;
            }
          }, 10);
        });
      });
    }
  }, [isOpen]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle();
    requestAnimationFrame(() => {
      if (headerRef.current) {
        const headerTop = headerRef.current.getBoundingClientRect().top + window.scrollY;
        const offset = 20;
        window.scrollTo({
          top: headerTop - offset,
          behavior: 'smooth'
        });
      }
    });
  };

  return (
    <section style={{ marginBottom: "20px", scrollMargin: "0" }}>
      <h2
        ref={headerRef}
        style={{
          ...h2Style,
          color: isOpen ? "#815854" : "#F9EBDE",
          backgroundColor: isOpen ? "#F9EBDE" : "#815854",
          border: isOpen ? "3px solid #815854" : "3px solid transparent",
        }}
        onClick={handleClick}
        tabIndex={-1}
        onMouseDown={(e) => e.preventDefault()}
      >
        <span
          style={{
            width: 0,
            height: 0,
            marginTop: "3px",
            borderLeft: isOpen ? "15px solid #815854" : "15px solid #F9EBDE",
            borderTop: "8px solid transparent",
            borderBottom: "8px solid transparent",
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
        />
        {title}
      </h2>
      {isOpen && (
        <div
          ref={scrollContainerRef}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "12px",
            marginTop: "6px",
            backgroundColor: "#fafafa",
            overflowY: "auto",
            height: "100vh",
          }}
          className="custom-scrollbar"
        >
          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 40px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #F9EBDE;
              border-radius: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #815854;
              border-radius: 6px;
              border: 15px solid #F9EBDE;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #6d4a45;
            }
            .custom-scrollbar {
              scrollbar-width: thin;
              scrollbar-color: #815854 #F9EBDE;
            }
          `}</style>
          {children}
        </div>
      )}
    </section>
  );
}

export default CollapsibleSection;
