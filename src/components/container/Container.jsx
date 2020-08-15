import React from "react";

export default function Container({ styles, children }) {
  return <div className={styles}>{children}</div>;
}
