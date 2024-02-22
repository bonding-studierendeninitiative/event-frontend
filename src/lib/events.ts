import {
  SunIcon,
  MoonIcon,
  FireIcon,
  QuestionMarkCircleIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  BuildingLibraryIcon,
  InformationCircleIcon,
  AcademicCapIcon,
  GlobeEuropeAfricaIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  RocketLaunchIcon,
  CalendarIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import { API_V0_Event } from './api';
import * as cheerio from 'cheerio';
export type EventCategory =
  | 'Engineering Competition'
  | 'European Workshop'
  | 'Exkursion'
  | 'Fallstudie'
  | 'Industry Night'
  | 'Infoabend'
  | 'Infostand'
  | 'Kamin-Abend'
  | 'Kompass'
  | 'Messe'
  | 'nicht bonding'
  | 'Runder Tisch'
  | 'Semesterplaner'
  | 'Sonstige Events'
  | 'Thementag'
  | 'Training'
  | 'Vortrag'
  | 'Workshop'
  | 'Unbekannt';

type Heroicon = React.ForwardRefExoticComponent<
  Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>
>;

export type EventSize = 'small' | 'medium' | 'large';

export type EventType = {
  size?: EventSize;
  category: EventCategory;
  icon: Heroicon;
};

export const eventTypes: EventType[] = [
  { category: 'Engineering Competition', size: 'medium', icon: LightBulbIcon },
  { category: 'European Workshop', size: 'medium', icon: LightBulbIcon },
  { category: 'Exkursion', size: 'medium', icon: GlobeEuropeAfricaIcon },
  { category: 'Fallstudie', size: 'small', icon: MagnifyingGlassIcon },
  { category: 'Industry Night', size: 'large', icon: MoonIcon },
  { category: 'Infoabend', icon: InformationCircleIcon },
  { category: 'Infostand', icon: InformationCircleIcon },
  { category: 'Kamin-Abend', size: 'small', icon: FireIcon },
  { category: 'Kompass', size: 'small', icon: SparklesIcon },
  { category: 'Messe', size: 'large', icon: BuildingLibraryIcon },
  { category: 'nicht bonding', icon: QuestionMarkCircleIcon },
  { category: 'Runder Tisch', size: 'small', icon: RocketLaunchIcon },
  { category: 'Semesterplaner', icon: CalendarIcon },
  { category: 'Sonstige Events', icon: QuestionMarkCircleIcon },
  { category: 'Thementag', size: 'large', icon: SunIcon },
  { category: 'Training', size: 'small', icon: AcademicCapIcon },
  { category: 'Vortrag', size: 'small', icon: ChatBubbleOvalLeftEllipsisIcon },
  { category: 'Workshop', size: 'small', icon: LightBulbIcon },
];

export function getTypeByCategory(category: EventCategory): EventType {
  return (
    eventTypes.find((eventType) => eventType.category === category) || {
      category: 'Unbekannt',
      icon: QuestionMarkCircleIcon,
    }
  );
}

export function strip(html: string) {
  const $ = cheerio.load(html);
  return $.text() || '';
}

export function formatEventType(event: API_V0_Event) {
  return event.Typ.substring(0, event.Typ.length - 9) as EventCategory;
}
