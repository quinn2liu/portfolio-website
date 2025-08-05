export interface SectionProps {
  selectedSection: SectionType;
  onToggle: () => void;
  sectionType: NonNullable<SectionType>;
}

export type SectionType = 'about' | 'experiences' | 'projects' | 'blog' | null;
