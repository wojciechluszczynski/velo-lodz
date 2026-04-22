export interface Poi {
  id: string
  order: number
  name: string
  shortDesc: string
  description: string
  authorComment: string
  lat: number
  lng: number
  emoji: string
  needsVerification?: boolean
}

export interface Route {
  id: string
  slug: string
  name: string
  distanceKm: number
  durationMinutes: number
  difficulty: string
  color: string
  emoji: string
  description: string
  authorNote: string
  coverPhoto: string
  pois: Poi[]
  comingSoon?: boolean
}

export const ROUTES: Route[] = [
  {
    id: '1',
    slug: 'szlak-bajkowy',
    name: 'Trasa Bajkowa',
    distanceKm: 14,
    durationMinutes: 180,
    difficulty: 'latwa',
    color: '#FF5F1F',
    emoji: 'T',
    description: 'Trasa sladami lodzkich bajek, animacji i wyobrazni. Rzezby kultowych postaci rozsiane po calym miescie.',
    authorNote: 'Ta trasa ma dla mnie szczegolne znaczenie — to Lodz, ktora zna kazdy Polak, a nie kazdy wie, ze to wlasnie stad pochodzi.',
    coverPhoto: 'https://images.unsplash.com/photo-1533158307587-828f0a76ef46?w=600&h=260&fit=crop&q=80',
    pois: [
      {
        id: 'b01',
        order: 1,
        name: 'Maurycy i Hawranek',
        shortDesc: 'Brazowa rzezba legendarnego duetu z serialu lalkowego',
        description: 'Rzezba z brazu autorstwa Marcina Mielczarka, projekt plastyczny Marian Kielbaszczak. Serial lalkowy Maurycy i Hawranek, wyprodukowany przez lodzkie Studio Malych Form Filmowych w latach 1987\u201389, to jeden z ostatnich wielkich sukcesow polskiej animacji lalkowej.',
        authorComment: 'Kiedy przyprowadzam tu grupe, zawsze pytam: czy ktos z was jezdzil do Orientarium jako dziecko? I prawie kazdy podnosi reke. Ten serial ogladaly cale pokolenia \u2014 i wlasnie tutaj, w Lodzi, powstawaly jego lalki i scenografie.',
        lat: 51.7639191,
        lng: 19.4123,
        emoji: '🐊',
      },
      {
        id: 'b02',
        order: 2,
        name: 'Pik Pok pingwinek',
        shortDesc: 'Rzezba sympatycznego pingwina przy aquaparku',
        description: 'Autorzy: Marcin Mielczarek, projekt plastyczny Tadeusz Wilkosz. Maly Pingwin Pik Pok to film lalkowy animowany wyprodukowany w latach 1989\u20131992 w Studiu Malych Form Filmowych. Seria powstala dzieki ksiazce Adama Bahdaja. Bajka opowiada losy malego pingwinka mieszkajacego na Wyspie Snieznych Burz, ktorego marzeniem jest zwiedzanie swiata. Lacznie wyemitowano 26 odcinkow, okolo 10-minutowych.',
        authorComment: 'AquaPark Fala stoi na terenie dawnej elektrocieplowni EC3. Kiedy pokazuje grupie te rzezbe, opowiadam nie tylko o animacji, ale i o tym, jak transformacja przemyslowa Lodz dala miejsca do zabawy tam, gdzie kiedys staly kotly parowe.',
        lat: 51.7646794,
        lng: 19.4212961,
        emoji: '🐧',
      },
      {
        id: 'b03',
        order: 3,
        name: 'Trzy Misie',
        shortDesc: 'Rzezba trzech misiow w Skansenie Architektury',
        description: 'Autorzy: Marcin Mielczarek, projekt plastyczny Marian Kielbaszczak. Trzy Misie to serial lalkowy animacji poklatkowej wyprodukowany w latach 1982\u20131986 w Studiu Se-Ma-For przy wspolpracy z Apollo Film Austria. Powstalo 26 odcinkow. Film opowiada o przygodach trzech pluszowych misiow: Kuby, Misi i Bartka.',
        authorComment: 'Skansen Architektury Drewnianej to malo znane miejsce, a wyjatkowo piekne. Kiedy zatrzymujemy sie tu z grupa, zawsze robimy tez mala wycieczke po drewnianych chatach. Polecam \u2014 szczegolnie o poranku, gdy jest spokojnie.',
        lat: 51.7462529,
        lng: 19.4642973,
        emoji: '🐻',
      },
      {
        id: 'b04',
        order: 4,
        name: 'Ferdynand Wspanialy',
        shortDesc: 'Rzezbiony bohater kultowej polskiej bajki dla dzieci',
        description: 'Ferdynand Wspanialy to bohater popularnej bajki animowanej produkowanej przez lodzkie studio. Rzezba nawiazuje do przygod sympatycznego, nieco roztargnionego bohatera, ktory swoim sposobem bycia rozczula kolejne pokolenia dzieci.',
        authorComment: 'Przy tej rzeznie zawsze robimy chwile przerwy. Ferdynand to postac, ktorej nie trzeba nikomu przedstawiac. Wystarczy jedno spojrzenie i juz widac, ze ktos sie usmiecha.',
        lat: 51.7594866,
        lng: 19.4635838,
        emoji: '🧡',
      },
      {
        id: 'b05',
        order: 5,
        name: 'Filemon i Bonifacy',
        shortDesc: 'Dwa lodzkie koty ze slynnego serialu',
        description: 'Filemon i Bonifacy to bohaterowie serialu "Przygody kota Filemona" produkowanego przez lodzkie studio. Figurki w Parku Zrodliska to chetnie odwiedzany punkt na trasie bajkowej.',
        authorComment: 'Te dwa koty zawsze wywoluja usmiech. Stare lodzkie studio animacji dalo Polsce setki takich postaci \u2014 Filemon i Bonifacy to jeden z najlepiej zachowanych kaszkow tej historii.',
        lat: 51.7595364,
        lng: 19.4739103,
        emoji: '🐱',
      },
      {
        id: 'b06',
        order: 6,
        name: 'Wrobelek Cwirek',
        shortDesc: 'Maly wrobel z wielkiego serialu przy Palmiarni',
        description: 'Wrobelek Cwirek to bohater jednego z pierwszych polskich seriali animowanych dla dzieci. Figurka w Parku Zrodliska, blisko Palmiarni Lodzkiej, jest chetnie fotografowana przez rodziny.',
        authorComment: 'Przy Palmiarni jest wyjatkowo pieknie. Cwirek siedzi sobie spokojnie, a wokol rozkwita park. Polecam polaczyc te wizyte z wejsciem do Palmiarni \u2014 to kilka minut drogi i zupelnie inny swiat.',
        lat: 51.7605557,
        lng: 19.4792533,
        emoji: '🐦',
      },
      {
        id: 'b07',
        order: 7,
        name: 'Jednorozec',
        shortDesc: 'Basnowy jednorozec przy wezle tramwajowym',
        description: 'Jednorozec przy przystanku Centrum to jedna z bardziej nieoczekiwanych figur na Szlaku Bajkowym. W samym sercu miasta, przy ruchliwym przystanku tramwajowym, stoi basnowa postac jakby prosto z innego swiata.',
        authorComment: 'Zawsze prosze grupe zeby uwaznieszukala \u2014 figurka jest nieoczywista w tym miejscu. Kiedy ja w koncu widza, zawsze jest ta sama reakcja: "Nie spodziewalem sie tu czegos takiego". O to wlasnie chodzi w tej trasie.',
        lat: 51.7589686,
        lng: 19.458257,
        emoji: '🦄',
      },
      {
        id: 'b08',
        order: 8,
        name: 'Mis Uszatek',
        shortDesc: 'Kultowy pluszak na glownej ulicy Lodzi',
        description: 'Mis Uszatek to jeden z najpopularniejszych bohaterow polskiej animacji, produkowanej przez lodzkie Se-ma-for Studio. Na Piotrkowskiej stoi w miejscu, gdzie kazdy go moze spotkac.',
        authorComment: 'Mis Uszatek na Piotrkowskiej \u2014 to dopiero polaczenie! Kultowy bohater na kultowej ulicy. Kiedy tu staje z grupa, zawsze pytam: kto z was wycho wywywaw sie na Misiach? Prawie wszystkie rece w gore.',
        lat: 51.7664887,
        lng: 19.4568139,
        emoji: '🧸',
      },
      {
        id: 'b09',
        order: 9,
        name: 'Zaczarowany Olowek',
        shortDesc: 'Filip z magicznym olowkiem przy Traugutta',
        description: 'Zaczarowany Olowek to serial animowany produkowany w lodzkim Studiu Filmow Rysunkowych. Rzezba przy Lodzkim Domu Kultury na ul. Traugutta nawiazuje do magii tworzenia i kreacji.',
        authorComment: 'Piotrkowska i Zaczarowany Olowek \u2014 to chyba najwlasciwsze polaczenie. Ta ulica sama w sobie jest jak zaklanie rzeczywistosci. Stajemy tu zawsze, kiedy jestem zmeczony i potrzebuje chwili refleksji.',
        lat: 51.7692342,
        lng: 19.4625163,
        emoji: '✏️',
      },
      {
        id: 'b10',
        order: 10,
        name: 'Mis Colargol',
        shortDesc: 'Mis z pieknym glosem, bohater kultowej bajki',
        description: 'Kim jest mis Colargol? Jest malym misiem, uwielbiajacym psoty zamiast nauki. Jego marzeniem jest spiew, jednak jego spiewanie daleko odbiega od normalnego spiewania. Dopiero wizyta u krola ptakow odmienia jego los i dzieki zaczarowanemu fletowi jego glos staje sie czysty i przejrzysty jak u slowika.',
        authorComment: 'Koralgol to postac mniej znana od Uszatka, ale bardzo lubiana przez tych, ktorzy go pamietaja. Przy tej figurce zawsze robie quiz: kto zna te postac? I zawsze ktos z grupy podchodzi ze wzruszeniem.',
        lat: 51.768703,
        lng: 19.460687,
        emoji: '🐠',
      },
      {
        id: 'b11',
        order: 11,
        name: 'Plastus',
        shortDesc: 'Plastus w Parku Sienkiewicza \u2014 bohater kultowej bajki',
        description: 'Autorzy rzezby: Magdalena Walczak i Marcin Mielczarek, projekt plastyczny Adam Kilian. Plastus trzyma w prawej dloni szkolny dzwonek, ktorym w serialu budzil kazdego rana swoich przyjaciol z piornika. Dzwonek ma prawdziwe, ruchomo zawieszone serce. Lewa reke Plastus opiera na swoim pam terniku.',
        authorComment: 'Park Sienkiewicza jest cudowny \u2014 duzo zieleni, spokoj, a w srodku taki maly Plastus. Dzieci, ktore tu przychodza, rozpoznaja go natychmiast. To jeden z moich ulubionych postojow na trasie.',
        lat: 51.764842,
        lng: 19.464882,
        needsVerification: true,
        emoji: '🖍️',
      },
    ],
  },
  {
    id: '2',
    slug: 'lodzkie-kina',
    name: 'Lodzkie Kina',
    distanceKm: 18,
    durationMinutes: 210,
    difficulty: 'latwa',
    color: '#FF5F1F',
    emoji: 'K',
    description: 'Historia lodzkiego kina \u2014 od pierwszych sal niemych po wspolczesne multipleksy. Szkola Filmowa, Muzeum Kinematografii, Kieslowski, Wajda, Polanski.',
    authorNote: 'Przed budynkiem Szkoly Filmowej zawsze zatrzymuje grupe na dluzej.',
    coverPhoto: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=260&fit=crop&q=80',
    pois: [],
    comingSoon: true,
  },
  {
    id: '3',
    slug: 'energia-lodzi',
    name: 'Energia Lodzi',
    distanceKm: 37,
    durationMinutes: 330,
    difficulty: 'trudna',
    color: '#FF5F1F',
    emoji: 'E',
    description: 'Historia lodzkiej energetyki od wegla do przyszlosci. EC1, EC2, EC3, EC4, podstacje elektryczne \u2014 infrastruktura ktora zbudowala nowoczesne miasto.',
    authorNote: 'EC1 to gdzie zaczela sie moja pasja do historii lodzkiej energetyki.',
    coverPhoto: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=260&fit=crop&q=80',
    pois: [],
    comingSoon: true,
  },
]

export const START_POINT = { name: 'Lodzka Informacja Turystyczna', lat: 51.7731612, lng: 19.455682 }
export const END_POINT = { name: 'EC1 NCKF, Centrum Komiksu', lat: 51.7680955, lng: 19.4692755 }
export const MAP_CENTER: [number, number] = [51.768, 19.456]
export const MAP_ZOOM = 13
