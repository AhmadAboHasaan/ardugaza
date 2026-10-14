import {
  Armchair,
  Award,
  BookOpen,
  BookOpenCheck,
  Briefcase,
  Building,
  CalendarCheck,
  ChartColumn,
  Check,
  Clock,
  Code,
  DoorOpen,
  GraduationCap,
  HandHeart,
  Handshake,
  Heart,
  Landmark,
  Laptop,
  Lightbulb,
  ListOrdered,
  Mail,
  Milestone,
  Newspaper,
  Receipt,
  Recycle,
  ShieldCheck,
  Shovel,
  Sparkles,
  Sun,
  TrendingUp,
  UserRound,
  Users,
  Zap,
} from 'lucide-react';
import type { ComponentType } from 'react';
const icons = {
  armchair: Armchair,
  award: Award,
  book: BookOpen,
  bookcheck: BookOpenCheck,
  briefcase: Briefcase,
  building: Building,
  calendar: CalendarCheck,
  chart: ChartColumn,
  check: Check,
  clear: Shovel,
  clock: Clock,
  code: Code,
  graduation: GraduationCap,
  grow: TrendingUp,
  handheart: HandHeart,
  handshake: Handshake,
  heart: Heart,
  landmark: Landmark,
  laptop: Laptop,
  learn: BookOpen,
  light: Lightbulb,
  list: ListOrdered,
  mail: Mail,
  milestone: Milestone,
  newspaper: Newspaper,
  open: DoorOpen,
  people: Users,
  power: Zap,
  receipt: Receipt,
  recycle: Recycle,
  shield: ShieldCheck,
  sparkles: Sparkles,
  sun: Sun,
  user: UserRound,
  users: Users,
  work: Briefcase,
} satisfies Record<
  string,
  ComponentType<{
    size?: number;
    strokeWidth?: number;
    'aria-hidden'?: boolean;
  }>
>;
export type IconName = keyof typeof icons;
type Props = {
  name: IconName;
  size?: number;
  tone?: 'teal' | 'sand' | 'cream' | 'deep';
  className?: string;
};
/** A decorative icon in a round chip. Every icon on the site goes through here so the set stays consistent. */
export function Icon({
  name,
  size = 22,
  tone = 'teal',
  className = '',
}: Props) {
  const Glyph = icons[name];
  return (
    <span className={`icon icon--${tone} ${className}`} aria-hidden="true">
      <Glyph size={size} strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}
