const h2Style = {
  backgroundColor: "black",
  color: "orange",
  padding: "8px",
  cursor: "pointer",
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
  return (
    <section style={{ marginBottom: "20px" }}>
      <h2 style={h2Style} onClick={onToggle}>
        {isOpen ? "▼ " : "▶ "} {title}
      </h2>
      {isOpen && (
        <div style={{ padding: "10px", border: "1px solid #ccc" }}>
          {children}
        </div>
      )}
    </section>
  );
}

export default CollapsibleSection;
