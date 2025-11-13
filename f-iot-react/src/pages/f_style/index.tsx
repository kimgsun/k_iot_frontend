import { Fragment, useEffect, useState } from "react";
import ToggleSection from "@/components/ToggleSection";
import A_CSS from "./A_CSS";
import B_Module from "./B_Module";
import C_StyleComponents from "./C_StyleComponents";
import D_Emotion from "./D_Emotion";
import EmotionPractice from "./emotion-practice/EmotionPractice";

function Index() {
  const sectionsData = [
    {
      title: "1. 일반 CSS",
      contents: [<A_CSS />],
    },
    {
      title: "2. Module CSS",
      contents: [<B_Module />],
    },
    {
      title: "3. Styled Components",
      contents: [<C_StyleComponents />],
    },
    {
      title: "4. Emotion",
      contents: [<D_Emotion />],
    },
    {
      title: "5. Emotion + 반응형",
      contents: [<EmotionPractice />],
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
        === 리액트 스타일(Style) ===
      </h1>

      <div style={{ marginTop: "12px" }}>
        {sectionsData.map(({ title, contents }, index) => (
          <ToggleSection
            key={title}
            title={title}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          >
            {contents.map((content, contentIndex) => (
              <Fragment key={`${title}-${contentIndex}`}>
                {contentIndex > 0 && <hr />}
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
