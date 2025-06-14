import { Card, CardDescription, CardHeader, CardContent, CardTitle } from "@/components/ui";
import SignUpForm from "@/components/features/auth/sign-up-form";

function SignUpPage() {
    return (
        <main>
            <Card className="w-96">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Create a new account to get started.</CardDescription>
                </CardHeader>
                <CardContent>
                    <SignUpForm />
                </CardContent>
            </Card>
        </main>
    );
}

export default SignUpPage;
