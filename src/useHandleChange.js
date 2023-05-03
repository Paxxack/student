import { useState } from "react";

export default function useHandleChange() {
  const [value, setValue] = useState({ name: "", tag: "" });

  function handleChange(event) {
    if (event.keyCode === 13) {
      setValue({ [event.target.name]: "" });
    } else {
      setValue((prevValue) => {
        return {
          ...prevValue,
          [event.target.name]: event.target.value.trim(),
        };
      });
    }
  }

  return [value, handleChange];
}
