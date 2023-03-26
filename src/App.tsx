import React from "react";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
};

const App = () => {
  const schema: ZodType<FormData> = z
    .object({
      firstName: z.string().min(2).max(20),
      lastName: z.string().min(2).max(20),
      email: z.string().email(),
      age: z.number().min(13),
      password: z.string().min(8).max(20),
      confirmPassword: z.string().min(8).max(20),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    });

  // Now connect zod with react-hook-form using Resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    console.log("It Worked! ", data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(submitData)}>
        <label>First Name: </label>
        <input type="text" {...register("firstName")} />
        {errors.firstName && <span>{errors.firstName.message}</span>}

        <label>Last Name: </label>
        <input type="text" {...register("lastName")} />
        {errors.lastName && <span>{errors.lastName.message}</span>}

        <label>Email: </label>
        <input type="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}

        <label>Age: </label>
        <input type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age && <span>{errors.age.message}</span>}

        <label>Password: </label>
        <input type="password" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
        
        <label>Confirm Password: </label>
        <input type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
        
        <button type="submit">Submit Details</button>
      </form>
    </div>
  );
};

export default App;
