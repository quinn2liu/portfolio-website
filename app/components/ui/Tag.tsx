type TagProps = {
    children: React.ReactNode;
    className?: string;
};

const Tag = ({ children, className = "" }: TagProps) => (
    <span
        className={`font-mono rounded-lg text-xs py-1 px-2 border-2
            dark:bg-amber-600 bg-amber-200
            dark:border-amber-600 border-amber-400
            dark:bg-opacity-50
            text-gray-800 dark:text-amber-100
            ${className}`}
    >
        {children}
    </span>
);

export default Tag;
