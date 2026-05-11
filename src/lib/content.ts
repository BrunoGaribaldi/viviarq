// Copy centralizado, datos de contacto y metadata SEO.
// TODO: reemplazar todos los placeholders marcados con valores reales.

export const SITE = {
  name: 'Viviana Girardi',
  role: 'Arquitecta',
  domain: 'vivianagirardi.com',
  url: 'https://vivianagirardi.com',
  city: 'Villa Carlos Paz',
  province: 'Córdoba',
  country: 'AR',
};

export const SEO = {
  title: 'Viviana Girardi · Arquitecta en Villa Carlos Paz, Córdoba',
  description:
    'Estudio de arquitectura en Villa Carlos Paz y Córdoba. Proyectos, dirección de obra, remodelaciones y planos. Diseño funcional, honesto y accesible para tu casa.',
  keywords: [
    'arquitecta',
    'arquitecto',
    'estudio arquitectónico',
    'arquitectura Villa Carlos Paz',
    'arquitectura Córdoba',
    'constructora casa',
    'constructor',
    'proyecto casa Carlos Paz',
    'dirección de obra Córdoba',
    'remodelaciones',
    'planos municipales Córdoba',
    'arquitecta independiente Carlos Paz',
  ].join(', '),
  ogImage: '/images/carrusel/hero-2.jpeg',
};

export const CONTACT = {
  // TODO: número real con código de país, sin signos. Ej: 5493541234567
  whatsappNumber: '5490000000000',
  whatsappMessage: 'Hola Viviana, me gustaría charlar sobre un proyecto.',
  email: 'arqvivianagirardi@gmail.com',
  // TODO: handles reales
  instagram: 'https://instagram.com/vivianagirardi',
  linkedin: 'https://linkedin.com/in/vivianagirardi',
};

export const waLink = (() => {
  const text = encodeURIComponent(CONTACT.whatsappMessage);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`;
})();

export const SERVICE_AREAS = [
  'Villa Carlos Paz',
  'Córdoba',
  'Alta Gracia',
  'La Falda',
  'Villa Allende',
];

export const SERVICES = [
  {
    n: '01',
    title: 'Proyecto y Dirección de Obra',
    desc: 'Acompañamiento integral desde la idea hasta la entrega de llaves, en Villa Carlos Paz y zonas de Córdoba.',
  },
  {
    n: '02',
    title: 'Remodelaciones',
    desc: 'Repensamos tu casa, departamento o local actual con foco en uso real y presupuesto.',
  },
  {
    n: '03',
    title: 'Planos y Documentación',
    desc: 'Planos municipales, modificaciones y regularizaciones para trámites en Córdoba.',
  },
  {
    n: '04',
    title: 'Asesoramiento',
    desc: 'Una hora de consultoría para destrabar decisiones puntuales antes de empezar.',
  },
];

// Hero — 5 imágenes landscape de alta resolución (≥1300px ancho).
// Orden: hero-2, hero-4, hero-5, hero-1, hero-3
export const HERO_SLIDES = [
  {
    src: '/images/carrusel/hero-2.jpeg',
    alt: 'Interior cálido con materiales nobles · proyecto residencial Córdoba',
    width: 1600,
    height: 910,
  },
  {
    src: '/images/carrusel/hero-4.jpeg',
    alt: 'Detalle constructivo · obra en Villa Carlos Paz',
    width: 1600,
    height: 738,
  },
  {
    src: '/images/carrusel/hero-5.png',
    alt: 'Proyecto arquitectónico — estudio Viviana Girardi en Córdoba',
    width: 1324,
    height: 676,
  },
  {
    src: '/images/carrusel/hero-1.jpeg',
    alt: 'Vivienda contemporánea diseñada por estudio de arquitectura en Villa Carlos Paz',
    width: 1523,
    height: 1007,
  },
  {
    src: '/images/carrusel/hero-3.jpeg',
    alt: 'Espacio integrado con luz natural · arquitectura funcional Carlos Paz',
    width: 1473,
    height: 820,
  },
];

export const ABOUT_PHOTO = {
  src: '/images/vivi/viviana-girardi.png',
  alt: 'Viviana Girardi, arquitecta independiente con estudio en Villa Carlos Paz, Córdoba',
  width: 449,
  height: 732,
};

// Trabajos — grilla editorial 12-col que respeta el aspect ratio real de cada imagen.
// Tipos:
//   - kind: 'image' | 'video' | 'collage'
//   - aspect: clase Tailwind (aspect-square, aspect-[4/3], etc.)
//   - colSpan: 1-12 (md+)
export const PROJECTS = [
  {
    id: 'vivienda-unifamiliar-1',
    kind: 'image',
    title: 'Vivienda Unifamiliar',
    location: 'Córdoba',
    year: '2024',
    type: 'Vivienda unifamiliar',
    src: '/images/fotos/vivienda-unifamiliar-1.png',
    alt: 'Vivienda unifamiliar diseñada por estudio Viviana Girardi · Córdoba',
    width: 426,
    height: 717,
    aspect: 'aspect-[3/4]',
    colSpan: 6,
  },
  {
    id: 'vivienda-unifamiliar-2',
    kind: 'image',
    title: 'Vivienda Unifamiliar',
    location: 'Córdoba',
    year: '2024',
    type: 'Vivienda unifamiliar',
    src: '/images/fotos/vivienda-unifamiliar-2.jpeg',
    alt: 'Detalle de vivienda unifamiliar · proyecto residencial Córdoba',
    width: 655,
    height: 885,
    aspect: 'aspect-[3/4]',
    colSpan: 6,
  },
  {
    id: 'casa-pileta',
    kind: 'image',
    title: 'Casa con Pileta',
    location: 'Villa Carlos Paz, Córdoba',
    year: '2023',
    type: 'Vivienda + exterior',
    src: '/images/piletas/casa-pileta-villa-carlos-paz.jpeg',
    alt: 'Vivienda con pileta y jardín en Villa Carlos Paz · proyecto integral',
    width: 1600,
    height: 1200,
    aspect: 'aspect-[4/3]',
    colSpan: 8,
  },
  {
    id: 'pileta-exterior',
    kind: 'image',
    title: 'Pileta Exterior',
    location: 'Villa Carlos Paz, Córdoba',
    year: '2023',
    type: 'Diseño exterior',
    src: '/images/piletas/pileta-exterior.jpeg',
    alt: 'Pileta exterior con deck de madera · diseño paisajístico',
    width: 1206,
    height: 2137,
    aspect: 'aspect-[9/16]',
    colSpan: 4,
  },
  {
    id: 'plano-arquitectonico',
    kind: 'collage',
    title: 'Plano Arquitectónico',
    location: 'Estudio · Córdoba',
    year: '2024',
    type: 'Documentación + obra',
    src: '/images/planos/plano-arquitectonico.jpeg',
    alt: 'Plano arquitectónico de vivienda · documentación técnica',
    overlaySrc: '/images/planos/obra-plano.png',
    overlayAlt: 'Obra en construcción correspondiente al plano',
    width: 1257,
    height: 1416,
    aspect: 'aspect-[8/9]',
    colSpan: 7,
  },
  {
    id: 'behind-the-scenes',
    kind: 'video',
    title: 'Detrás de la obra',
    location: 'Visita de obra',
    year: '2025',
    type: 'Video',
    src: '/videos/achicar.mp4',
    alt: 'Video corto durante una visita de obra',
    width: 1920,
    height: 1080,
    aspect: 'aspect-video',
    colSpan: 5,
  },
  {
    id: 'interior-causana-1',
    kind: 'image',
    title: 'Interiores',
    location: 'Causana Malagueño, Córdoba',
    year: '2024',
    type: 'Interior',
    src: '/images/interiores/vivienda-familiar/causana-malagueno-1.jpeg',
    alt: 'Interior de vivienda familiar en Causana Malagueño · arquitectura Córdoba',
    width: 960,
    height: 960,
    aspect: 'aspect-square',
    colSpan: 4,
  },
  {
    id: 'interior-causana-2',
    kind: 'image',
    title: 'Interiores',
    location: 'Causana Malagueño, Córdoba',
    year: '2024',
    type: 'Interior',
    src: '/images/interiores/vivienda-familiar/causana-malagueno-2.jpeg',
    alt: 'Detalle de interior con paleta cálida · vivienda en Causana Malagueño',
    width: 960,
    height: 960,
    aspect: 'aspect-square',
    colSpan: 4,
  },
  {
    id: 'interior-causana-3',
    kind: 'image',
    title: 'Interiores',
    location: 'Causana Malagueño, Córdoba',
    year: '2024',
    type: 'Interior',
    src: '/images/interiores/vivienda-familiar/causana-malagueno-3.jpeg',
    alt: 'Espacio integrado · vivienda familiar en Causana Malagueño',
    width: 960,
    height: 960,
    aspect: 'aspect-square',
    colSpan: 4,
  },
  {
    id: 'interior-detalle-1',
    kind: 'image',
    title: 'Interiores',
    location: 'Vivienda Familiar',
    year: '2024',
    type: 'Interior',
    src: '/images/interiores/vivienda-familiar/interior-vivienda-familiar.jpeg',
    alt: 'Detalle de interior cálido · vivienda familiar',
    width: 960,
    height: 1280,
    aspect: 'aspect-[3/4]',
    colSpan: 7,
  },
  {
    id: 'interior-detalle-2',
    kind: 'image',
    title: 'Interiores',
    location: 'Vivienda Familiar',
    year: '2024',
    type: 'Interior',
    src: '/images/interiores/vivienda-familiar/interior-detalle.png',
    alt: 'Detalle de ambientación interior · vivienda familiar',
    width: 426,
    height: 717,
    aspect: 'aspect-[3/4]',
    colSpan: 5,
  },
];

// Detalles — fotos auxiliares usadas como acentos visuales en otras secciones.
export const DETAIL_RENDER = {
  src: '/images/renders/render-vivienda.jpeg',
  alt: 'Render arquitectónico 3D de vivienda en proceso de proyecto',
  width: 1280,
  height: 720,
};

export const DETAIL_OBRA = {
  src: '/images/obras/obra-en-construccion.jpeg',
  alt: 'Obra en construcción en Villa Carlos Paz · dirección técnica',
  width: 900,
  height: 1402,
};
