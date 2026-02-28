import {useState} from "react";
import {useNavigate, Link} from "@tanstack/react-router";
import { LogIn} from "lucide-react";
import ThemeToggle from "./ThemeToggle"
import {Button} from "@/components/ui/button.tsx";

export function Header() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false); // State to close sheet on navigation

    return (
        <header
            className="bg-background border-b border-border py-3 px-6 flex justify-between items-center sticky top-0 z-50">
            {/* --- LEFT SIDE: Logo --- */}
            <div
                className="flex items-center gap-3 cursor-pointer select-none group"
                onClick={() => navigate({to: "/"})}
            >


                <div>
                    <div className="flex items-center gap-3">

                        {<img
                            src="/kaustack_logo.svg"
                            alt="KAU Logo"
                            className="md:h-12 md:w-12 h-10 w-10 object-contain transition-transform group-hover:scale-105"
                        />}

                        <div className="font-bold md:text-3xl tracking-tight text-foreground text-2xl">
                            KAU<span className="text-green-600 dark:text-green-400">Stack</span>
                        </div>
                    </div>

                    <div>
                        <span className="hidden md:flex text-sm text-muted-foreground ml-2">“Stacking Solutions, Unlocking Potential”</span>
                    </div>
                </div>
            </div>

            {/* --- RIGHT SIDE: Actions --- */}
            <nav className="flex items-center gap-3">
                {/* 1. Theme Toggle (Visible on all screens) */}

                <Button className="flex items-center gap-3 rounded-sm cursor-pointer">
                    <LogIn></LogIn>
                    <span>Login</span>
                </Button>

                <ThemeToggle/>

                {/* 2. DESKTOP LINKS (Hidden on mobile) */}
                <div className="hidden md:flex items-center gap-6 ml-2">

                </div>

                {/* 3. MOBILE MENU (Visible only on mobile) */}
                <div className="md:hidden">
                </div>
            </nav>
        </header>
    );
}