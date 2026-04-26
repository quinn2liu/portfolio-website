"use client";

import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projectItemDetails } from "../../data/ProjectItemDetailData";
import { BitewiseDetails } from "../../data/project data/BitewiseDetails";
import Tag from "../../components/ui/Tag";

// Map slugs to rich detail components
const detailComponents: Record<string, React.ReactNode> = {
    bitewise: <BitewiseDetails />,
};

export default function ProjectDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    const project = projectItemDetails.find((p) => p.slug === params.slug);

    if (!project) {
        return (
            <div className="flex flex-col gap-6">
                <BackLink />
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Project not found.
                </p>
            </div>
        );
    }

    const { name, date, description, technologies, image, link, slug } = project;

    return (
        <div className="flex flex-col gap-8">
            {/* Back navigation */}
            <BackLink />

            {/* Header */}
            <div className="flex flex-row items-center gap-5">
                {image && (
                    <img
                        src={image}
                        alt={name}
                        className="h-16 w-16 rounded-xl object-cover shrink-0"
                    />
                )}
                <div className="flex flex-col gap-1">
                    <h1 className="font-mono font-semibold text-2xl text-gray-900 dark:text-amber-100">
                        {name}
                    </h1>
                    <p className="text-xs text-gray-400 dark:text-gray-500">{date}</p>
                </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-col gap-2">
                <p className="font-mono text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Technologies
                </p>
                <div className="flex flex-row flex-wrap gap-2">
                    {technologies.map((tech, i) => (
                        <Tag key={i}>{tech}</Tag>
                    ))}
                </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
                <p className="font-mono text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                    Description
                </p>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {description}
                </p>
            </div>

            {/* External link */}
            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                    Learn More <FaArrowUpRightFromSquare className="text-xs" />
                </a>
            )}

            {/* Project-specific detail block */}
            {detailComponents[slug] && (
                <div className="pt-2 border-t border-amber-300 dark:border-gray-700">
                    {detailComponents[slug]}
                </div>
            )}
        </div>
    );
}

const BackLink = () => (
    <Link
        href="/projects"
        className="inline-flex items-center gap-2 font-mono text-sm text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
    >
        ← projects
    </Link>
);
