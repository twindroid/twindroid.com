"use client"

import { FeaturedProducts } from "@/components/homepage/featured-products";
import { FeaturedServices } from "@/components/homepage/featured-services";
import { SideBar } from "@/components/homepage/sidebar";
import { Footer } from "@/components/navigation/footer";
import { NavBar } from "@/components/navigation/navbar";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setSelectedTheme(theme);
      document.body.classList.add(theme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.body.classList.add("dark");
    }
    else{
      document.body.classList.add("light");
    }
  }, []);

  return (
    <main className="flex min-h-screen">
      <div className="w-full h-full">
        <NavBar />
        <div className="flex bg-background-100 py-16 px-28">
          <SideBar />
          <div id="featuring">
            <FeaturedProducts />
            <FeaturedServices />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
