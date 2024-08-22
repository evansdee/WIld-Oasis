import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../DarkModeToggle.jsx/DarkModeToggle";

export default function DarkMode() {

    const {isDark,handleToggle} = useDarkMode()
  return (
    <ButtonIcon onClick={handleToggle}>
       {isDark ? <HiOutlineSun/>: <HiOutlineMoon/>}
    </ButtonIcon>
  )
}
