"use client";

import React, { useState } from "react";
import { projectItems } from "../data/ProjectItemData";
import { ProjectListItem } from "../components/projects/NewProjectItem";

const ProjectSection = () => {
    const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

    return (
        <div className="h-full w-full flex flex-col space-y-4">
            <div className="font-semibold">
                {"< projects / >"}
            </div>
            <div className="grid grid-cols-2 gap-5 overflow-y-auto">
                {projectItems.map((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedIdx(idx)}
                        className="cursor-pointer"
                    >
                        <ProjectListItem
                            isSelected={selectedIdx !== idx}
                            projectItem={item}
                            onClose={() => setSelectedIdx(null)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;