import { Input } from "@/components/ui/input";
import { Form, useForm } from "react-hook-form";
import { FormLabel, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";

function LoginForm() {
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
    });
    return (
        <Form {...logInForm}>
            <form>
                <FormField
                    control={logInForm.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Enter your email" required />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={logInForm.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} placeholder="Enter your password" required />
                            </FormControl>
                        </FormItem>
                    )}
                />
                {/* Add more fields as needed */}
                <button type="submit">Login</button>
                <FormDescription>Please enter your email and password to login.</FormDescription>
                <FormMessage />
            </form>
        </Form>
    );
}

export default LoginForm;
