type SectionHeadingProps = {
    children: React.ReactNode;
    className?: string;
};

const SectionHeading = ({ children, className = "" }: SectionHeadingProps) => (
    <h2
        className={`font-mono font-semibold text-base text-gray-900 dark:text-amber-100 ${className}`}
    >
        {children}
    </h2>
);

export default SectionHeading;
