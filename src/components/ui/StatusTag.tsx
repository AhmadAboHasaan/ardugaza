import { projectStatus, type ProjectStatus } from '@/content/projects';
type Props = { status: ProjectStatus; className?: string };
/** The crown on every project card and page: where the project stands today. */
export function StatusTag({ status, className = '' }: Props) {
  const { label, tone } = projectStatus[status];
  return (
    <span className={`status-tag status-tag--${tone} ${className}`}>
      <i aria-hidden="true" />
      {label}
    </span>
  );
}
