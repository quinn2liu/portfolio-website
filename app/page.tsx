import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";

export default function Home() {
    return (
        <div className="flex flex-col gap-10">
          <AboutSection />
          <div className="border border-amber-300 dark:border-gray-700" />
          <ExperienceSection />
        </div>
    );
}
