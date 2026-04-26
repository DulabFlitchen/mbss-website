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
    alt: 'Project-based learning',
    caption: 'Project presentations',
    category: 'campus',
  },
  {
    id: '2',
    src: '/images/Screenshot 2026-04-26 at 01-02-38 Gallery – Home.png',
    alt: 'Science fair',
    caption: 'Project presentations',
    category: 'campus',
  },
  {
    id: '3',
    src: '/images/Screenshot 2026-04-26 at 01-02-45 Gallery – Home.png',
    alt: 'Computer lab',
    caption: 'Learning in Progress',
    category: 'campus',
  },
  {
    id: '4',
    src: '/images/Screenshot 2026-04-26 at 01-02-53 Gallery – Home.png',
    alt: 'School building exterior',
    caption: 'Exterior View',
    category: 'facilities',
  },
  {
    id: '5',
    src: '/images/Screenshot 2026-04-26 at 01-02-59 Gallery – Home.png',
    alt: 'Exterior view of the school',
    caption: 'School Campus',
    category: 'facilities',
  },
  {
    id: '6',
    src: '/images/Screenshot 2026-04-26 at 01-03-04 Gallery – Home.png',
    alt: 'Students in a classroom',
    caption: 'Learning in Action',
    category: 'events',
  },
  {
    id: '7',
    src: '/images/Screenshot 2026-04-26 at 01-03-11 Gallery – Home.png',
    alt: 'Student activities',
    caption: 'School Assembly',
    category: 'activities',
  },
  {
    id: '8',
    src: '/images/Screenshot 2026-04-26 at 01-03-16 Gallery – Home.png',
    alt: 'Group projects',
    caption: 'Laboratory Experiments',
    category: 'activities',
  },
  {
    id: '9',
    src: '/images/Screenshot 2026-04-26 at 01-03-21 Gallery – Home.png',
    alt: 'Students teachers group photo',
    caption: 'Professional Facilitation',
    category: 'facilities',
  },
  {
    id: '10',
    src: '/images/Screenshot 2026-04-26 at 01-03-28 Gallery – Home.png',
    alt: 'Staff photo',
    caption: 'Dedicated Staff',
    category: 'activities',
  },
  {
    id: '11',
    src: '/images/Screenshot 2026-04-26 at 01-03-34 Gallery – Home.png',
    alt: 'Project presentation',
    caption: 'Project Presentation',
    category: 'events',
  },
  {
    id: '12',
    src: '/images/Screenshot 2026-04-26 at 01-03-40 Gallery – Home.png',
    alt: 'Speech and debate',
    caption: 'Speech and Debate',
    category: 'facilities',
  },
  {
    id: '13',
    src: '/images/Screenshot 2026-04-26 at 01-03-47 Gallery – Home.png',
    alt: 'Project-based learning',
    caption: 'Project-based Learning',
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
    caption: 'Modern Learning Environment',
    category: 'campus',
  },
  {
    id: '16',
    src: '/images/Screenshot 2026-04-26 at 01-04-06 Gallery – Home.png',
    alt: 'Graduation ceremony',
    caption: 'Congratulations to our Graduates',
    category: 'campus',
  },
];

export default allImages;