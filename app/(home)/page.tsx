import HeroSection from "./components/HeroSection";
import ReadBlogsSection from "./components/ReadBlogsSection";

const HomePage = () => {
  return (
    <main className="min-h-screen py-10 space-y-40">
      <HeroSection />

      <ReadBlogsSection />
    </main>
  );
};

export default HomePage;
