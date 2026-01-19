import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EntryForm from "@/components/EntryForm";
import PrizeSection from "@/components/PrizeSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden max-w-[1920px] mx-auto bg-background-light dark:bg-background-dark shadow-2xl">
        <Header />
        <main className="flex flex-col flex-1">
            <Hero />
            <EntryForm />
            <PrizeSection />
        </main>
        <Footer />
    </div>
  );
}
