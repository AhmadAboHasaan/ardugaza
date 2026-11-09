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
  Files,
  GraduationCap,
  HandHeart,
  Handshake,
  Heart,
  Landmark,
  Laptop,
  Layers,
  Library,
  Lightbulb,
  ListOrdered,
  Mail,
  Milestone,
  Newspaper,
  Receipt,
  Recycle,
  Rocket,
  Server,
  ShieldCheck,
  Shovel,
  Smartphone,
  Sparkles,
  Sun,
  TrendingUp,
  UserRound,
  Users,
  Zap,
} from 'lucide-react';
import type { ComponentType } from 'react';
/** The glyphs themselves, for drawings that place an icon inside their own SVG. */
export const icons = {
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
  files: Files,
  graduation: GraduationCap,
  grow: TrendingUp,
  handheart: HandHeart,
  handshake: Handshake,
  heart: Heart,
  landmark: Landmark,
  laptop: Laptop,
  layers: Layers,
  learn: BookOpen,
  library: Library,
  light: Lightbulb,
  list: ListOrdered,
  mail: Mail,
  milestone: Milestone,
  newspaper: Newspaper,
  open: DoorOpen,
  people: Users,
  phone: Smartphone,
  power: Zap,
  receipt: Receipt,
  recycle: Recycle,
  rocket: Rocket,
  server: Server,
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
