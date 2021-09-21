import { useState } from "react";
import { useModal } from "./useModal";
import detailwork from "../../data/detailsWork.json";

export const useModalWithData = (
  initialIsOpened = false,
  initialData = null
) => {

  const [isModalOpened, setIsModalOpened] = useModal(initialIsOpened);
  const [data, setData] = useState(initialData);
  let alldata = null;

  if (data != null) {
    alldata = detailwork.filter(e => e.idwork === data.id);
    //setData({ ...data, alldata });
  }
  console.log(data);
  const customSetIsModalOpened = isModalOpened => {
    setIsModalOpened(isModalOpened);
    if (isModalOpened === false) {
      setData(null);
    }
  };
  return [
    customSetIsModalOpened,
    isModalOpened,
    data,
    setData
  ]
}
