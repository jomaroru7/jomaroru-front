import { useEffect, useState } from "react";
import { Lightbulb, LightbulbOff } from "lucide-react";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState<boolean>(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="flex items-center gap-3">
            {darkMode ? (
                <LightbulbOff className="text-gray-600 w-6 h-6" />
            ) : (
                <Lightbulb className="text-yellow-400 w-6 h-6" />
            )}

            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => setDarkMode((prev) => !prev)}
                    className="sr-only peer"
                />
                <div className="w-11 h-6 peer-focus:ring-2 peer-focus:ring-primary bg-inverse rounded-full peer peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
        </div>
    );
}
