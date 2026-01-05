import { useState } from "react";

export default function Ohayo() {
  const [text, setText] = useState("Do you love me?");

  return (
    <button
      onClick={() => {
        setText("(,,>﹏<,,)👉👈");
      }}
    >
      {text}
    </button>
  );
}
