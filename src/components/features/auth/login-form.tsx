import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { FormLabel, FormControl, FormDescription, FormField, FormItem, FormMessage, Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const LoginSchema = z.object({
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

function LoginForm() {
    type LoginSchemaType = z.infer<typeof LoginSchema>;
    const logInForm = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        shouldFocusError: true,
        shouldUseNativeValidation: false,
        progressive: true,
        resolver: zodResolver(LoginSchema),
    });

    const { control, handleSubmit } = logInForm;
    const onSubmit = (data: LoginSchemaType) => {
        console.log("Form submitted with data:", data);
    };
    return (
        <Form {...logInForm}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={control}
                    name="email"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Enter your email" required />
                            </FormControl>
                            <FormDescription>Please enter a valid email address.</FormDescription>
                            <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="password"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} placeholder="Enter your password" required />
                            </FormControl>
                            <FormDescription>Password must be at least 8 characters long.</FormDescription>
                            <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <button type="submit">Login</button>
            </form>
        </Form>
    );
}

export default LoginForm;
