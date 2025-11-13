import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import "./ToggleSection.css";

interface ToggleSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onToggle?: (nextIsOpen: boolean) => void;
}

function ToggleSection({
  title,
  children,
  defaultOpen = false,
  isOpen: controlledIsOpen,
  onToggle,
}: ToggleSectionProps) {
  const isControlled = typeof controlledIsOpen === "boolean";
  const [uncontrolledIsOpen, setUncontrolledIsOpen] =
    useState<boolean>(defaultOpen);
  const contentId = useId();
  const headerRef = useRef<HTMLButtonElement | null>(null);

  const isOpen = isControlled ? controlledIsOpen : uncontrolledIsOpen;

  useEffect(() => {
    if (!isOpen || !headerRef.current) {
      return;
    }

    const headerElement = headerRef.current;
    const headerTop =
      headerElement.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(headerTop - 12, 0),
      behavior: "smooth",
    });
  }, [isOpen]);

  const handleToggle = () => {
    if (isControlled) {
      onToggle?.(!controlledIsOpen);
      return;
    }

    setUncontrolledIsOpen((prev) => {
      const nextIsOpen = !prev;
      onToggle?.(nextIsOpen);
      return nextIsOpen;
    });
  };

  return (
    <section
      className={`toggleSection ${isOpen ? "toggleSection--open" : ""}`}
    >
      <button
        type="button"
        ref={headerRef}
        className="toggleSection__header"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="toggleSection__headerContent">
          <span className="toggleSection__icon" aria-hidden="true">
            <span className="toggleSection__chevron" />
          </span>
          <span className="toggleSection__title">{title}</span>
        </span>
        <span className="toggleSection__status">
          {isOpen ? "숨기기" : "펼치기"}
        </span>
      </button>

      <div
        id={contentId}
        className={`toggleSection__content ${isOpen ? "is-open" : ""}`}
      >
        <div className="toggleSection__contentInner">{children}</div>
      </div>
    </section>
  );
}

export default ToggleSection;