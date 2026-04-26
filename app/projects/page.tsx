import { projectItemDetails } from "../data/ProjectItemDetailData";
import ProjectCard from "../components/projects/ProjectCard";

export default function ProjectsPage() {
    return (
        <div className="flex flex-col gap-8">
            <h2 className="font-mono font-semibold text-base">{"< projects />"}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectItemDetails.map((item) => (
                    <ProjectCard
                        key={item.slug}
                        slug={item.slug}
                        name={item.name}
                        subtitle={item.subtitle}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
}
