import Header from "./components/Header";
import ColumnAbout from "./components/ColumnAbout";
import ColumnProjects from "./components/ColumnProjects";
import ColumnSidebar from "./components/ColumnSidebar";
import Footer from "./components/Footer";

export default function Portfolio() {
  return (
    <>
      <div className="container mx-auto max-w-8xl p-6 md:p-12 font-serif-body text-ink-black antialiased">
        <Header />

        <p className="text-center text-lg font-serif-fancy italic text-ink-black mb-8">
          <span className="font-bold small-caps">HEADLINE:</span> Web Scraping •
          Automation • GCP Cloud Run • CI/CD
        </p>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
          <ColumnAbout />
          <ColumnProjects />
          <ColumnSidebar />
        </main>

        <Footer />
      </div>
    </>
  );
}
