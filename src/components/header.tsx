import { useTheme } from "@/context/themeProvider";
import { Moon, Sun } from "lucide-react";
import react from "react";
import { Link } from "react-router-dom";
import { CitySearch } from "./city-search";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b py-2 supports-[backdrop-filter]-bg-background/60">
      {/* border-b sets bottom border */}
      <div className="container mx-auto flex justify-between h-16 px-8 items-center">
        <Link to={"/"}>
          <img src="/3845731.png" alt="climate logo" className="h-14" />
        </Link>
        <div className="flex gap-4">
          <CitySearch />
          <div
            className={`flex items-center cursor-pointer transition-transform duration-500 ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? (
              <Sun className="h-14 w-6 rotate-0 text-yellow-500 transition-all" />
            ) : (
              <Moon className="h-14 w-6 rotate-0 text-blue-500 transition-all" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
