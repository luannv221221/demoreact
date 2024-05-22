import React from "react";

export default function StopPropagationWrapper({ children }) {
  return <div onClick={(e) => e.stopPropagation()}>{children}</div>;
}
