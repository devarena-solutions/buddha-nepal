export type SacredImage = {
  key: string;
  src: string;
  alt: string;
  label: string;
};

export const sacredImages: SacredImage[] = [
  {
    key: "buddha",
    src: "/sacred/buddha.jpg",
    alt: "Gold Buddha statue in abhaya mudra",
    label: "Buddha",
  },
  {
    key: "lumbini",
    src: "/sacred/lumbini.jpg",
    alt: "Maya Devi Temple in Lumbini at sunset",
    label: "Lumbini",
  },
  {
    key: "swayambhu",
    src: "/sacred/swayambhu.jpg",
    alt: "Swayambhunath Stupa in Kathmandu",
    label: "Swayambhu",
  },
];
