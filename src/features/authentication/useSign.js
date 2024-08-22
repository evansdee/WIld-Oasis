import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuthentication";
import toast from "react-hot-toast";

export function useSign(){
    const {mutate:signup,isLoading}=useMutation({
        mutationFn: signupApi,
        onSuccess:user=>{
            console.log(user)
            toast.success('account success')
        }
    })

    return {signup,isLoading}
}