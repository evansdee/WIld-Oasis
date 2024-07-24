import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";


export function useUpdate(){
    const queryClient = useQueryClient()

    const {mutate,isLoading:isUpdating} = useMutation({
        mutationFn:updateSetting,
        onSuccess:()=>{
            toast.success("Settings Successffully Updated")
            queryClient.invalidateQueries({
                queryKey:['setting']
            })
            console.log('work')

        },
        onError:(err)=>toast.error(err.message)
        
    })

    return {mutate,isUpdating}


}
