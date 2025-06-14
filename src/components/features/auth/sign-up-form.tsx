import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Input,
    Button,
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui";
import { SignUpSchema, type SignUpSchemaType } from "@/schemas";

function SignUpForm() {
    const signUpForm = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        mode: "onSubmit",
        reValidateMode: "onSubmit",
        shouldFocusError: true,
        shouldUseNativeValidation: false,
        progressive: true,
        resolver: zodResolver(SignUpSchema),
    });
    const { control, handleSubmit } = signUpForm;
    const onSubmit = (data: SignUpSchemaType) => {
        console.log("Form submitted with data:", data);
        // Handle sign-up logic here
    };
    return (
        <Form {...signUpForm}>
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
                    name="firstName"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Enter your first name" required />
                            </FormControl>
                            <FormDescription>Please enter your first name.</FormDescription>
                            <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name="lastName"
                    render={({ field, fieldState }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="Enter your last name" required />
                            </FormControl>
                            <FormDescription>Please enter your last name.</FormDescription>
                            <FormMessage>{fieldState.error?.message}</FormMessage>
                        </FormItem>
                    )}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </Form>
    );
}

export default SignUpForm;
