import React, { useState } from "react";
import State01 from "./a_useState/State01";
import State02 from "./a_useState/State02";
import State03 from "./a_useState/State03";
import State04 from "./a_useState/State04";
import State05 from "./a_useState/State05";
import State06 from "./a_useState/State06";
import Ref01 from "./b_useRef/Ref01";
import CollapsibleSection from "@/components/CollapsibleSection";

const h2Style = {
  backgroundColor: "black",
  color: "orange",
  padding: "8px",
  cursor: "pointer",
};

// ✅ Index 컴포넌트
function Index() {
  // 각 섹션의 열림 상태를 배열로 관리
  const [sections, setSections] = useState([true, false]);

  const toggleSection = (index: number) => {
    setSections((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white", padding: "8px" }}>
        === 리액트 Hooks ===
      </h1>

      <CollapsibleSection
        title="1. 리액트 Hooks - useState"
        isOpen={sections[0]}
        onToggle={() => toggleSection(0)}
      >
        <State01 /> <hr />
        <State02 /> <hr />
        <State03 /> <hr />
        <State04 /> <hr />
        <State05 /> <hr />
        <State06 /> <hr />
      </CollapsibleSection>

      <CollapsibleSection
        title="2. 리액트 Hooks - useRef"
        isOpen={sections[1]}
        onToggle={() => toggleSection(1)}
      >
        <Ref01 />
      </CollapsibleSection>
    </div>
  );
}

export default Index;
