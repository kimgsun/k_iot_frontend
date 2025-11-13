import { Fragment, useEffect, useState } from "react";
import ToggleSection from "@/components/ToggleSection";
import A_Context from "./A_Context";
import B_Zustand from "./B_Zustand";
import SignIn from "./SignIn";
import GlobalData from "./GlobalData";
import TruckDetailPage from "./TruckDetailPage";

function Index() {
  const sectionsData = [
    {
      title: "1. Context API",
      contents: [<A_Context />],
    },
    {
      title: "2. Zustand",
      contents: [<B_Zustand />],
    },
    {
      title: "3. SignIn 페이지",
      contents: [<SignIn />],
    },
    {
      title: "4. zustand 연습(global-data)",
      contents: [<GlobalData />],
    },
    {
      title: "5. zustand 연습(reservation)",
      contents: [<TruckDetailPage />],
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
        === 리액트 전역 상태 관리 ===
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
