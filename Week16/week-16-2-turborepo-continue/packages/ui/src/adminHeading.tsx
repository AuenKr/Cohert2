export default function AdminHeading({ children }: AdminHeadingProp) {
    return <h2>{children}</h2>;
}

interface AdminHeadingProp {
    children: React.ReactNode;
}
