import { useState } from 'react'

export const useModal = (initialValue = false) => {
  const [IsOpen, setIsOpen] = useState(initialValue);
  // const openModal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);
  const toggle = () => setIsOpen(!IsOpen);
  return [IsOpen, setIsOpen, toggle];
}
