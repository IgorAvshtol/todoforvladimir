import { ChangeEvent, useState } from 'react';

export const useInput = () => {

  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  return {
    value,
    setValue,
    error,
    onChange: (e: ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value)
        setError("")
    },
    onBlur: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      if (!e.target.value) setError("Required field")
      else setError("")
    }
  }
}
