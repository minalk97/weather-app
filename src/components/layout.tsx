import { type PropsWithChildren } from "react";
import Header from "./header";
import { Link } from "react-router-dom";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="backdrop-blur border-t py-12 supports-[backdrop-filter]-bg-background/60">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <div>Data Source: </div>
          <div>
            Weather data provided by
            <Link
              to={`https://openweathermap.org/`}
              className="ml-2 text-blue-600 underline"
              target="_blank"
            >
              OpenWeather
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
