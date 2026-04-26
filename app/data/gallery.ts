export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: 'campus' | 'events' | 'activities' | 'facilities';
}

const allImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/Screenshot 2026-04-26 at 01-02-24 Gallery – Home.png',
    alt: 'School campus building',
    caption: 'Main School Building',
    category: 'campus',
  },
  {
    id: '2',
    src: '/images/Screenshot 2026-04-26 at 01-02-38 Gallery – Home.png',
    alt: 'School courtyard',
    caption: 'Campus Courtyard',
    category: 'campus',
  },
  {
    id: '3',
    src: '/images/Screenshot 2026-04-26 at 01-02-45 Gallery – Home.png',
    alt: 'Classroom activities',
    caption: 'Learning in Progress',
    category: 'campus',
  },
  {
    id: '4',
    src: '/images/Screenshot 2026-04-26 at 01-02-53 Gallery – Home.png',
    alt: 'Science laboratory',
    caption: 'Science Laboratory',
    category: 'facilities',
  },
  {
    id: '5',
    src: '/images/Screenshot 2026-04-26 at 01-02-59 Gallery – Home.png',
    alt: 'Library resources',
    caption: 'School Library',
    category: 'facilities',
  },
  {
    id: '6',
    src: '/images/Screenshot 2026-04-26 at 01-03-04 Gallery – Home.png',
    alt: 'Sports activities',
    caption: 'Sports Day',
    category: 'events',
  },
  {
    id: '7',
    src: '/images/Screenshot 2026-04-26 at 01-03-11 Gallery – Home.png',
    alt: 'Student activities',
    caption: 'Student Activities',
    category: 'activities',
  },
  {
    id: '8',
    src: '/images/Screenshot 2026-04-26 at 01-03-16 Gallery – Home.png',
    alt: 'Group projects',
    caption: 'Group Projects',
    category: 'activities',
  },
  {
    id: '9',
    src: '/images/Screenshot 2026-04-26 at 01-03-21 Gallery – Home.png',
    alt: 'Technology center',
    caption: 'Technology Center',
    category: 'facilities',
  },
  {
    id: '10',
    src: '/images/Screenshot 2026-04-26 at 01-03-28 Gallery – Home.png',
    alt: 'Outdoor activities',
    caption: 'Outdoor Fun',
    category: 'activities',
  },
  {
    id: '11',
    src: '/images/Screenshot 2026-04-26 at 01-03-34 Gallery – Home.png',
    alt: 'School assembly',
    caption: 'Morning Assembly',
    category: 'events',
  },
  {
    id: '12',
    src: '/images/Screenshot 2026-04-26 at 01-03-40 Gallery – Home.png',
    alt: 'Laboratory experiment',
    caption: 'Chemistry Experiment',
    category: 'facilities',
  },
  {
    id: '13',
    src: '/images/Screenshot 2026-04-26 at 01-03-47 Gallery – Home.png',
    alt: 'Field day',
    caption: 'Sports Competition',
    category: 'events',
  },
  {
    id: '14',
    src: '/images/Screenshot 2026-04-26 at 01-03-52 Gallery – Home.png',
    alt: 'Creative activities',
    caption: 'Creative Arts',
    category: 'activities',
  },
  {
    id: '15',
    src: '/images/Screenshot 2026-04-26 at 01-04-00 Gallery – Home.png',
    alt: 'Learning environment',
    caption: 'Study Areas',
    category: 'campus',
  },
  {
    id: '16',
    src: '/images/Screenshot 2026-04-26 at 01-04-06 Gallery – Home.png',
    alt: 'School building exterior',
    caption: 'School Exterior',
    category: 'campus',
  },
];

export default allImages;