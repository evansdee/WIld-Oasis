import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { register, formState, getValues,handleSubmit } = useForm();

  const {error} = formState

  function onSubmit(data){
    console.log(data)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={error?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "og run am na" })}
        />
      </FormRow>

      <FormRow label="Email address" error={error?.email?.message}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "og run am na",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "og run the mail well",
            },
          })}
        />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={error?.password?.message}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "og run am na",
            minLength: {
              value: 8,
              message: "og password ti wa",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={error?.passwordConfirm?.message}>
        <Input
          type="password" 
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "og run am na",
            validate: (value) => {
              value === getValues.password || "og password no follow join";
            },
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
