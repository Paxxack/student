import { useState } from "react";

export default function useHandleChange() {
  const [searchValue, setValue] = useState({ name: "", tag: "" });

  /* Function reveive value from inputs and 
resend it in appropriate format for use*/

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

  return [searchValue, handleChange];
}
