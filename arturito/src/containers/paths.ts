export interface Path {
  name: string;
  href: string;
}

export const paths: Record<string, Path> = {
  home: { name: 'Home', href: '/' },
  planets: { name: 'Planets', href: '/planets' },
  starships: { name: 'Starships', href: '/starships' },
  people: { name: 'People', href: '/people' },
  species: { name: 'Species', href: '/species' },
};
