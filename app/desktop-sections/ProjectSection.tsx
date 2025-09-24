"use client";

import { useState } from "react";
import { projectItems } from "../data/ProjectItemData";
import { ProjectListItem } from "../components/projects/NewProjectItem";

const ProjectSection = () => {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    return (
        <div className="h-full w-full flex flex-col space-y-4">
            <div className="font-semibold">{"< projects / >"}</div>
            <div className="grid grid-cols-2 gap-5 overflow-y-auto scrollbar-hide">
                {projectItems.map((item, idx) => (
                    <ProjectListItem
                        key={idx}
                        isSelected={selectedIdx === idx}
                        projectItem={item}
                        onClose={() => setSelectedIdx(null)}
                        onClick={() => setSelectedIdx(idx)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;