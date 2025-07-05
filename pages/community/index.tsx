import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  console.log("Community component - Pages Router");

  const [title, setTitle] = useState<string>("hello");

  return (
    <div>
      Community List
      <button onClick={() => alert("Hello MIT")} style={{ margin: "15px" }}>
        PressMe
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);
