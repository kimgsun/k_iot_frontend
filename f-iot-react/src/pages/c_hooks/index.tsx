import { Fragment, useEffect, useState } from "react";
import ToggleSection from "@/components/ToggleSection";

import State01 from "./a_useState/State01";
import State02 from "./a_useState/State02";
import State03 from "./a_useState/State03";
import State04 from "./a_useState/State04";
import State05 from "./a_useState/State05";
import State06 from "./a_useState/State06";
import Ref01 from "./b_useRef/Ref01";
import Ref02 from "./b_useRef/Ref02";
import Ref_Practice01 from "./b_useRef/Practice01";
import Ref_Practice02 from "./b_useRef/Practice02";
import Effect01 from "./c_useEffect/Effect01";
import Effect02 from "./c_useEffect/Effect02";
import Effect_Practice01 from "./c_useEffect/Practice01";
import UseCallback from "./d_callback_memo/A_UseCallback";
import UseMemo from "./d_callback_memo/B_UseMemo";
import Reducer01 from "./e_useReducer/Reducer01";
import Reducer02 from "./e_useReducer/Reducer02";
import Custom01 from "./f_custom/Custom01";
import Custom02 from "./f_custom/Custom02";
import Custom03 from "./f_custom/Custom03";
import TodoAppLocalStorage from "@/_practices/c_hooks/TodoAppLocalStorage";

function Index() {
  const sectionsData = [
    {
      title: "1. 리액트 Hooks - useState",
      contents: [
        <State01 />,
        <State02 />,
        <State03 />,
        <State04 />,
        <State05 />,
        <State06 />,
      ],
    },
    {
      title: "2. 리액트 Hooks - useRef",
      contents: [
        <Ref01 />,
        <Ref02 />,
        <Ref_Practice01 />,
        <Ref_Practice02 />,
      ],
    },
    {
      title: "3. 리액트 Hooks - useEffect",
      contents: [<Effect01 />, <Effect02 />, <Effect_Practice01 />],
    },
    {
      title: "4. 리액트 Hooks - useCallback & useMemo",
      contents: [<UseCallback />, <UseMemo />],
    },
    {
      title: "5. 리액트 Hooks - useReducer",
      contents: [<Reducer01 />, <Reducer02 />],
    },
    {
      title: "6. 리액트 Hooks - custom Hooks",
      contents: [<Custom01 />, <Custom02 />, <Custom03 />],
    },
    {
      title: "7. 리액트 Hooks - Todo(LocalStorage)",
      contents: [<TodoAppLocalStorage />],
    },
    {
      title: "8. 리액트 Hooks - Webcam",
      contents: [<p>Webcam</p>],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    setOpenIndex(sectionsData.length - 1);
  }, [sectionsData.length]);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div style={{ fontFamily: "Pretendard, sans-serif" }}>
      <h1
        style={{
          background: "linear-gradient(90deg, #111, #333)",
          color: "#fff",
          padding: "12px 16px",
          borderRadius: "6px",
        }}
      >
        === 리액트 Hooks ===
      </h1>

      <div style={{ marginTop: "12px" }}>
        {sectionsData.map(({ title, contents }, index) => (
          <ToggleSection
            key={title}
            title={title}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          >
          {contents.map((content, index) => (
              <Fragment key={`${title}-${index}`}>
                {index > 0 && <hr />}
                <div style={{ marginBottom: "16px" }}>{content}</div>
              </Fragment>
            ))}
          </ToggleSection>
        ))}
      </div>
    </div>
  );
}

export default Index;
