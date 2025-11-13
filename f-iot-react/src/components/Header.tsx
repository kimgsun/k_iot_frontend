import { useUIStore } from "@/stores/ui.store";
import React from "react";

function Header() {
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);
  const toggleDarkMode = useUIStore((s) => s.toggleDarkMode);
  const darkMode = useUIStore((s) => s.darkMode);
  const isSidebarOpen = useUIStore((s) => s.isSidebarOpen);
  const showToast = useUIStore((s) => s.showToast);

  const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: darkMode ? "#222" : "#f2f2f2",
    borderBottom: darkMode ? "1px solid #444" : "1px solid #ccc",
    color: darkMode ? "#f5f5f5" : "#222",
  };

  const buttonGroupStyle: React.CSSProperties = {
    display: "flex",
    gap: "12px",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "8px 16px",
    borderRadius: "20px",
    border: darkMode ? "1px solid #555" : "1px solid #bbb",
    backgroundColor: darkMode ? "#333" : "#ffffff",
    color: darkMode ? "#f5f5f5" : "#222",
    cursor: "pointer",
    fontSize: "0.9rem",
    boxShadow: darkMode
      ? "0 2px 8px rgba(0, 0, 0, 0.4)"
      : "0 2px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s, color 0.3s, transform 0.2s",
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: darkMode ? "#444" : "#f0f0f0",
    color: darkMode ? "#ffffff" : "#111",
  };

  const renderButton = (
    label: string,
    onClick: () => void,
    extraProps?: React.ButtonHTMLAttributes<HTMLButtonElement>
  ) => (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={(e) =>
        Object.assign(e.currentTarget.style, buttonHoverStyle)
      }
      onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
      {...extraProps}
    >
      {label}
    </button>
  );

  const handleReserve = () => {
    // 예약 관련 코드 (프론트엔드 유효성 검사 + API 호출  + 응답 성공 완료)

    showToast("예약이 완료되었습니다.");
  };

  return (
    <header style={headerStyle}>
      <h3>Korea IoT React</h3>
      <div style={buttonGroupStyle}>
        {renderButton(isSidebarOpen ? "메뉴 닫기" : "메뉴 열기", toggleSidebar)}
        {renderButton(darkMode ? "밝게" : "어둡게", toggleDarkMode)}
        {renderButton("예약하기", handleReserve)}
      </div>
    </header>
  );
}

export default Header;
