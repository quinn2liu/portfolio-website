import Link from "next/link";
import { ProjectItemDetails } from "../../data/ProjectItemDetailData";

const ProjectCard = ({ slug, name, subtitle, image }: Pick<ProjectItemDetails, "slug" | "name" | "subtitle" | "image">) => (
    <Link href={`/projects/${slug}`}>
        <div
            className="group flex flex-row items-start justify-between
                p-4 rounded-2xl border border-amber-300 dark:border-gray-700
                hover:border-emerald-400 dark:hover:border-emerald-600
                hover:bg-amber-200 dark:hover:bg-gray-800
                transition-all duration-200 cursor-pointer h-full"
        >
            <div className="flex flex-col gap-1 pr-3">
                <p className="font-mono font-semibold text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {subtitle}
                </p>
            </div>
            {image && (
                <img
                    src={image}
                    alt={name}
                    className="h-16 w-16 rounded-lg object-cover shrink-0"
                />
            )}
        </div>
    </Link>
);

export default ProjectCard;
