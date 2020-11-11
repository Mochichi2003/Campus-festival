import React, { useState } from "react";
import posed from "react-pose";

const props = {
  visible: { opacity: 1 },
  hidden: { opacity: 0.1 },
};

const Box = posed.div(props);

export default function ReactPoseSample() {
  const [visible, setVisible] = useState(true);

  return (
    <Box
      style={{
        margin: "0 auto",
        width: 100,
        height: 100,
        backgroundColor: "green",
      }}
      pose={visible ? "visible" : "hidden"}
      onClick={() => {
        setVisible(!visible);
      }}
    />
  );
}
