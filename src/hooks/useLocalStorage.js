import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue != null ? JSON.parse(storedValue) : initialValue;
  });

  const updateValue = (newValue) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  const removeValue = () => {
    setValue(initialValue)
    localStorage.removeItem(key)
  }

  return [value, updateValue, removeValue]
}

export default useLocalStorage
