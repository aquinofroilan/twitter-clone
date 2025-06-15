import TweetCard from "@/components/features/tweets/tweet-card";

export interface Tweet {
    id: string;
    authorId: string;
    authorName: string;
    authorUsername: string;
    content: string;
    image?: string;
    createdAt: string;
}

export const dummyTweets: Tweet[] = [
    {
        id: "1",
        authorId: "user1",
        authorName: "Sarah Chen",
        authorUsername: "sarahdev",
        content:
            "Just shipped a new feature using React 19! The new concurrent features are game-changing for user experience. Can't wait to see what the community builds with it. 🚀",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
        createdAt: "2025-06-15T09:30:00Z",
    },
    {
        id: "2",
        authorId: "user2",
        authorName: "Alex Rodriguez",
        authorUsername: "alexcodes",
        content:
            "Hot take: TypeScript has made me a better JavaScript developer, even when I'm not using TypeScript. The type thinking carries over.",
        createdAt: "2025-06-15T08:45:00Z",
    },
    {
        id: "3",
        authorId: "user3",
        authorName: "Maya Patel",
        authorUsername: "mayatech",
        content:
            "Morning coffee ☕ + debugging session = the perfect start to any day. Found the bug that was haunting me for 3 days!",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
        createdAt: "2025-06-15T07:15:00Z",
    },
    {
        id: "4",
        authorId: "user4",
        authorName: "David Kim",
        authorUsername: "davidbuilds",
        content:
            "Working on a new open-source project. It's a developer tool that I wish existed 5 years ago. Sometimes you have to build what you want to see in the world. 🛠️",
        createdAt: "2025-06-14T16:20:00Z",
    },
    {
        id: "5",
        authorId: "user5",
        authorName: "Jessica Wong",
        authorUsername: "jesswong",
        content:
            "Reminder: Your side project doesn't have to be perfect. Ship it, get feedback, iterate. Perfection is the enemy of progress.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        createdAt: "2025-06-14T14:30:00Z",
    },
    {
        id: "6",
        authorId: "user6",
        authorName: "Marcus Johnson",
        authorUsername: "marcusj",
        content:
            "Just learned about CSS container queries and my mind is blown 🤯 Web development keeps getting better every year!",
        createdAt: "2025-06-14T12:45:00Z",
    },
    {
        id: "7",
        authorId: "user7",
        authorName: "Emily Foster",
        authorUsername: "emilyux",
        content:
            "Design systems are like good architecture - invisible when done right, but everything falls apart without them. Spent today documenting our component library.",
        image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
        createdAt: "2025-06-14T11:10:00Z",
    },
    {
        id: "8",
        authorId: "user8",
        authorName: "Ryan O'Connor",
        authorUsername: "ryandev",
        content:
            "Pro tip: Write code comments for your future self. That person who will maintain your code in 6 months deserves some kindness.",
        createdAt: "2025-06-14T09:30:00Z",
    },
    {
        id: "9",
        authorId: "user9",
        authorName: "Lisa Zhang",
        authorUsername: "lisacodes",
        content:
            "Attending my first tech conference since 2019! The energy here is incredible. So many brilliant minds sharing knowledge and building the future together. 🌟",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
        createdAt: "2025-06-13T15:45:00Z",
    },
    {
        id: "10",
        authorId: "user10",
        authorName: "Tom Mitchell",
        authorUsername: "tommitchell",
        content:
            "Debugging is like being a detective in a crime movie where you are also the murderer. 🔍😅 Anyone else relate?",
        createdAt: "2025-06-13T13:20:00Z",
    },
];

const HomeFeed = () => {
    return (
        <div className="flex flex-col">
            {dummyTweets.map((t) => (
                <TweetCard
                    authorId={t.authorId}
                    authorName={t.authorName}
                    authorUsername={t.authorUsername}
                    content={t.content}
                    createdAt={t.createdAt}
                    image={t.image}
                    key={t.id}
                />
            ))}
        </div>
    );
};

export default HomeFeed;
