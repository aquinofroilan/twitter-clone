import LoginForm from "@/components/features/auth/login-form";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui";

function LoginPage() {
    return (
        <main>
            <Card className="w-96">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Enter your credentials to access your account.</CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
                <CardFooter>
                    <CardAction>Submit</CardAction>
                </CardFooter>
            </Card>
        </main>
    );
}

export default LoginPage;
