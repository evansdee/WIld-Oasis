import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/ButtonIcon";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuthentication";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SpinnerMini from "../../ui/SpinnerMini";

export default function Logout() {
  const navigate = useNavigate();

  const queryClient = useQueryClient()
//   THE "{REPLACE:TRUE" PREVENTS THE USER FROM GOING BACK TO THE PREVIOUS PAGE 

  const { mutate, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
        queryClient.removeQueries()
        navigate('/login', {replace:true})
      toast.success("logged out");
    },
  });
  return (
    <ButtonIcon onClick={mutate} disabled={isLoading}>
     {isLoading ? <SpinnerMini/> : <HiArrowRightOnRectangle />}
    </ButtonIcon>
  );
}
