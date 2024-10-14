import { FeaturedProducts } from "@/components/homepage/featured-products";
import { FeaturedServices } from "@/components/homepage/featured-services";
import { SideBar } from "@/components/homepage/sidebar";
import { Footer } from "@/components/navigation/footer";
import { NavBar } from "@/components/navigation/navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="w-full h-full">
        <NavBar />
        <div className="flex bg-bg-100 py-16 px-28">
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
