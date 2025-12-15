import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b bg-white">
            <nav className="mx-auto flex max-w-5xl gap-6 px-6 py-4">
                <Link href="/" className="font-semibold">
                    Home
                </Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </header>
    );
}
