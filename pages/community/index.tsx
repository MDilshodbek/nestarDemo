import { useState } from "react";

const CommunityList = () => {
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

export default CommunityList;
