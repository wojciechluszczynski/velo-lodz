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
    difficulty: 'łatwa',
    color: '#FF5F1F',
    emoji: '🧸',
    description: 'Trasa śladami łódzkich bajek, animacji i wyobraźni. Rzeźby kultowych postaci rozsiane po całym mieście.',
    authorNote: 'Ta trasa ma dla mnie szczególne znaczenie — to Łódź, którą zna każdy Polak, a nie każdy wie, że to właśnie stąd pochodzi.',
    coverPhoto: 'https://images.unsplash.com/photo-1533158307587-828f0a76ef46?w=600&h=260&fit=crop&q=80',
    pois: [
      {
        id: 'b01',
        order: 1,
        name: 'Maurycy i Hawranek',
        shortDesc: 'Brązowa rzeźba legendarnego duetu z serialu lalkowego',
        description: 'Rzeźba z brązu autorstwa Marcina Mielczarka, projekt plastyczny Marian Kiełbaszczak. Serial lalkowy Maurycy i Hawranek, wyprodukowany przez łódzkie Studio Małych Form Filmowych w latach 1987–89, to jeden z ostatnich wielkich sukcesów polskiej animacji lalkowej.',
        authorComment: 'Kiedy przyprowadzam tu grupę, zawsze pytam: czy ktoś z was jeździł do Orientarium jako dziecko? I prawie każdy podnosi rękę. Ten serial oglądały całe pokolenia — i właśnie tutaj, w Łodzi, powstawały jego lalki i scenografie.',
        lat: 51.7639191,
        lng: 19.4123,
        emoji: '🐊',
      },
      {
        id: 'b02',
        order: 2,
        name: 'Pik Pok pingwinek',
        shortDesc: 'Rzeźba sympatycznego pingwina przy aquaparku',
        description: 'Autorzy: Marcin Mielczarek, projekt plastyczny Tadeusz Wilkosz. Mały Pingwin Pik Pok to film lalkowy animowany wyprodukowany w latach 1989–1992 w Studiu Małych Form Filmowych. Seria powstała dzięki książce Adama Bahdaja. Bajka opowiada losy małego pingwinka mieszkającego na Wyspie Śnieżnych Burz, którego marzeniem jest zwiedzanie świata. Łącznie wyemitowano 26 odcinków, około 10-minutowych.',
        authorComment: 'AquaPark Fala stoi na terenie dawnej elektrociepłowni EC3. Kiedy pokazuję grupie tę rzeźbę, opowiadam nie tylko o animacji, ale i o tym, jak transformacja przemysłowa Łódź dała miejsca do zabawy tam, gdzie kiedyś stały kotły parowe.',
        lat: 51.7646794,
        lng: 19.4212961,
        emoji: '🐧',
      },
      {
        id: 'b03',
        order: 3,
        name: 'Trzy Misie',
        shortDesc: 'Rzeźba trzech misiów w Skansenie Architektury',
        description: 'Autorzy: Marcin Mielczarek, projekt plastyczny Marian Kiełbaszczak. Trzy Misie to serial lalkowy animacji poklatkowej wyprodukowany w latach 1982–1986 w Studiu Se-Ma-For przy współpracy z Apollo Film Austria. Powstało 26 odcinków. Film opowiada o przygodach trzech pluszowych misiów: Kuby, Misi i Bartka.',
        authorComment: 'Skansen Architektury Drewnianej to mało znane miejsce, a wyjątkowo piękne. Kiedy zatrzymujemy się tu z grupą, zawsze robimy też małą wycieczkę po drewnianych chatach. Polecam — szczególnie o poranku, gdy jest spokojnie.',
        lat: 51.7462529,
        lng: 19.4642973,
        emoji: '🐻',
      },
      {
        id: 'b04',
        order: 4,
        name: 'Ferdynand Wspaniały',
        shortDesc: 'Rzeźbiony bohater kultowej polskiej bajki',
        description: 'Ferdynand Wspaniały to bohater popularnej bajki animowanej produkowanej przez łódzkie studio. Rzeźba nawiązuje do przygód sympatycznego, nieco roztargnionego bohatera, który swoim sposobem bycia rozczula kolejne pokolenia dzieci.',
        authorComment: 'Przy tej rzeźbie zawsze robimy chwilę przerwy. Ferdynand to postać, której nie trzeba nikomu przedstawiać. Wystarczy jedno spojrzenie i już widać, że ktoś się uśmiecha.',
        lat: 51.7594866,
        lng: 19.4635838,
        emoji: '🧡',
      },
      {
        id: 'b05',
        order: 5,
        name: 'Filemon i Bonifacy',
        shortDesc: 'Dwa łódzkie koty ze słynnego serialu',
        description: 'Filemon i Bonifacy to bohaterowie serialu "Przygody kota Filemona" produkowanego przez łódzkie studio. Figurki w Parku Źródliska to chętnie odwiedzany punkt na trasie bajkowej.',
        authorComment: 'Te dwa koty zawsze wywołują uśmiech. Stare łódzkie studio animacji dało Polsce setki takich postaci — Filemon i Bonifacy to jeden z najlepiej zachowanych kąsków tej historii.',
        lat: 51.7595364,
        lng: 19.4739103,
        emoji: '🐱',
      },
      {
        id: 'b06',
        order: 6,
        name: 'Wróbelek Ćwirek',
        shortDesc: 'Mały wróbel z wielkiego serialu przy Palmiarni',
        description: 'Wróbelek Ćwirek to bohater jednego z pierwszych polskich seriali animowanych dla dzieci. Figurka w Parku Źródliska, blisko Palmiarni Łódzkiej, jest chętnie fotografowana przez rodziny.',
        authorComment: 'Przy Palmiarni jest wyjątkowo pięknie. Ćwirek siedzi sobie spokojnie, a wokół rozkwita park. Polecam połączyć tę wizytę z wejściem do Palmiarni — to kilka minut drogi i zupełnie inny świat.',
        lat: 51.7605557,
        lng: 19.4792533,
        emoji: '🐦',
      },
      {
        id: 'b07',
        order: 7,
        name: 'Jednorożec',
        shortDesc: 'Baśniowy jednorożec przy węźle tramwajowym',
        description: 'Jednorożec przy przystanku Centrum to jedna z bardziej nieoczekiwanych figur na Szlaku Bajkowym. W samym sercu miasta, przy ruchliwym przystanku tramwajowym, stoi baśniowa postać jakby prosto z innego świata.',
        authorComment: 'Zawsze proszę grupę, żeby uważnie szukała — figurka jest nieoczywista w tym miejscu. Kiedy ją w końcu widzą, zawsze jest ta sama reakcja: "Nie spodziewałem się tu czegoś takiego". O to właśnie chodzi w tej trasie.',
        lat: 51.7589686,
        lng: 19.458257,
        emoji: '🦄',
      },
      {
        id: 'b08',
        order: 8,
        name: 'Miś Uszatek',
        shortDesc: 'Kultowy pluszak na głównej ulicy Łodzi',
        description: 'Miś Uszatek to jeden z najpopularniejszych bohaterów polskiej animacji, produkowanej przez łódzkie Se-ma-for Studio. Na Piotrkowskiej stoi w miejscu, gdzie każdy go może spotkać.',
        authorComment: 'Miś Uszatek na Piotrkowskiej — to dopiero połączenie! Kultowy bohater na kultowej ulicy. Kiedy tu staję z grupą, zawsze pytam: kto z was wychowywał się na Misiach? Prawie wszystkie ręce w górę.',
        lat: 51.7664887,
        lng: 19.4568139,
        emoji: '🧸',
      },
      {
        id: 'b09',
        order: 9,
        name: 'Zaczarowany Ołówek',
        shortDesc: 'Filip z magicznym ołówkiem przy Traugutta',
        description: 'Zaczarowany Ołówek to serial animowany produkowany w łódzkim Studiu Filmów Rysunkowych. Rzeźba przy Łódzkim Domu Kultury na ul. Traugutta nawiązuje do magii tworzenia i kreacji.',
        authorComment: 'Piotrkowska i Zaczarowany Ołówek — to chyba najwłaściwsze połączenie. Ta ulica sama w sobie jest jak zaklęcie rzeczywistości. Stajemy tu zawsze, kiedy jestem zmęczony i potrzebuję chwili refleksji.',
        lat: 51.7692342,
        lng: 19.4625163,
        emoji: '✏️',
      },
      {
        id: 'b10',
        order: 10,
        name: 'Miś Colargol',
        shortDesc: 'Miś z pięknym głosem, bohater kultowej bajki',
        description: 'Kim jest miś Colargol? Jest małym misiem, uwielbiającym psoty zamiast nauki. Jego marzeniem jest śpiew, jednak jego śpiewanie daleko odbiega od normalnego śpiewania. Dopiero wizyta u króla ptaków odmienia jego los i dzięki zaczarowanemu fletowi jego głos staje się czysty i przejrzysty jak u słowika.',
        authorComment: 'Colargol to postać mniej znana od Uszatka, ale bardzo lubiana przez tych, którzy go pamiętają. Przy tej figurce zawsze robię quiz: kto zna tę postać? I zawsze ktoś z grupy podchodzi ze wzruszeniem.',
        lat: 51.768703,
        lng: 19.460687,
        emoji: '🎵',
      },
      {
        id: 'b11',
        order: 11,
        name: 'Plastuś',
        shortDesc: 'Plastuś w Parku Sienkiewicza — bohater kultowej bajki',
        description: 'Autorzy rzeźby: Magdalena Walczak i Marcin Mielczarek, projekt plastyczny Adam Kilian. Plastuś trzyma w prawej dłoni szkolny dzwonek, którym w serialu budził każdego rana swoich przyjaciół z piórnika. Dzwonek ma prawdziwe, ruchomo zawieszone serce. Lewą rękę Plastuś opiera na swoim pamiętniku.',
        authorComment: 'Park Sienkiewicza jest cudowny — dużo zieleni, spokój, a w środku taki mały Plastuś. Dzieci, które tu przychodzą, rozpoznają go natychmiast. To jeden z moich ulubionych postojów na trasie.',
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
    name: 'Łódzkie Kina',
    distanceKm: 18,
    durationMinutes: 210,
    difficulty: 'łatwa',
    color: '#FF5F1F',
    emoji: '🎬',
    description: 'Historia łódzkiego kina — od pierwszych sal niemych po współczesne multipleksy. Szkoła Filmowa, Muzeum Kinematografii, Kieślowski, Wajda, Polański.',
    authorNote: 'Przed budynkiem Szkoły Filmowej zawsze zatrzymuję grupę na dłużej.',
    coverPhoto: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=260&fit=crop&q=80',
    pois: [],
    comingSoon: true,
  },
  {
    id: '3',
    slug: 'energia-lodzi',
    name: 'Energia Łodzi',
    distanceKm: 37,
    durationMinutes: 330,
    difficulty: 'trudna',
    color: '#FF5F1F',
    emoji: '⚡',
    description: 'Historia łódzkiej energetyki od węgla do przyszłości. EC1, EC2, EC3, EC4 — infrastruktura, która zbudowała nowoczesne miasto.',
    authorNote: 'EC1 to gdzie zaczęła się moja pasja do historii łódzkiej energetyki.',
    coverPhoto: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=260&fit=crop&q=80',
    pois: [],
    comingSoon: true,
  },
]

export const START_POINT = { name: 'Łódzka Informacja Turystyczna', lat: 51.7731612, lng: 19.455682 }
export const END_POINT = { name: 'EC1 NCKF, Centrum Komiksu', lat: 51.7680955, lng: 19.4692755 }
export const MAP_CENTER: [number, number] = [51.762, 19.456]
export const MAP_ZOOM = 13
