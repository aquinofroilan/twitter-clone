import { Card, CardContent, CardFooter, CardTitle, CardHeader, CardDescription, CardAction } from "@/components/ui";

const TweetCard = ({
    authorName,
    content,
    image,
    createdAt,
    authorUsername,
}: {
    authorName: string;
    content: string;
    image?: string;
    createdAt: string;
    authorId: string;
    authorUsername: string;
}) => {
    return (
        <Card className="w-full max-w-md mx-auto my-4">
            <CardHeader>
                <CardTitle>
                    <p>{authorName}</p>
                    <p className="text-muted-foreground">@{authorUsername}</p>
                </CardTitle>
                <CardDescription>{new Date(createdAt).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{content}</p>
                {image && <img src={image} alt="Tweet image" className="w-full h-auto mt-2 rounded" />}
            </CardContent>
            <CardFooter>
                <CardAction>Like</CardAction>
                <CardAction>Reply</CardAction>
            </CardFooter>
        </Card>
    );
};

export default TweetCard;
