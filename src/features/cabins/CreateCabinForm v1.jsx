
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createCabin } from "../../services/apiCabins";
import FormRow from "../../ui/FormRow";



function CreateCabinForm() {
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, getValues,formState } = useForm();

  const {errors} = formState

  console.log(errors)
  const { isLoading, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success("Cabin Successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate({...data,image:data.image[0]});
    // console.log(data)
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message} >
        <Input
          type="text"
          id="name"
          {...register("name", { required: "FIll the form nigga" })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", { required: "FIll the form nigga" })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", { required: "FIll the form nigga" })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "FIll the form nigga",
            validate: (value) =>
              value <= getValues().regularPrice || "discount",
          })}
        />
      </FormRow>

      <FormRow label={'Description for website'}>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "FIll the form nigga" })}
        />
      </FormRow>

      <FormRow label={"Cabin photo"}>
        <FileInput id="image" type="file" accept="image/*" 
          {...register("image", { required: "FIll the form nigga" })}
      
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>Create cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
