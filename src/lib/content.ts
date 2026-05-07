// Copy centralizado y datos de contacto.
// TODO: reemplazar todos los placeholders marcados con valores reales.

export const SITE = {
  name: 'Viviana Girardi',
  role: 'Arquitecta',
  domain: 'vivianagirardi.com',
};

export const CONTACT = {
  // TODO: número real con código de país, sin signos. Ej: 5493411234567
  whatsappNumber: '5490000000000',
  whatsappMessage: 'Hola Viviana, me gustaría charlar sobre un proyecto.',
  // TODO: email real
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
  // TODO: confirmar zonas reales
  'Córdoba',
  'Villa Carlos Paz',
  'Aledaños',
];

export const SERVICES = [
  {
    n: '01',
    title: 'Proyecto y Dirección de Obra',
    desc: 'Acompañamiento integral desde la idea hasta la entrega de llaves.',
  },
  {
    n: '02',
    title: 'Remodelaciones',
    desc: 'Repensamos tu casa o local actual con foco en uso real y presupuesto.',
  },
  {
    n: '03',
    title: 'Planos y Documentación',
    desc: 'Planos municipales, modificaciones y regularizaciones.',
  },
  {
    n: '04',
    title: 'Asesoramiento',
    desc: 'Una hora de consultoría para destrabar decisiones puntuales.',
  },
];

// Placeholders Unsplash — reemplazar con fotos reales de Viviana cuando estén.
export const HERO_SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80&auto=format&fit=crop',
    alt: 'Interior cálido con paleta neutra',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1800&q=80&auto=format&fit=crop',
    alt: 'Living iluminado con grandes ventanales',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&q=80&auto=format&fit=crop',
    alt: 'Cocina contemporánea minimalista',
  },
  {
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800&q=80&auto=format&fit=crop',
    alt: 'Fachada residencial con materiales nobles',
  },
];

export const ABOUT_PHOTO = {
  src: '/images/Viviana.jpeg',
  alt: 'Retrato de Viviana Girardi',
};

// Placeholders Unsplash — reemplazar con fotos reales de los trabajos de Viviana.
// El campo `span` controla el ancho dentro de la grilla editorial:
//   - 'wide'   ocupa 7/12 cols (md+)
//   - 'narrow' ocupa 5/12 cols (md+)
//   - 'half'   ocupa 6/12 cols (md+)
export const PROJECTS = [
  {
    id: 'casa-las-glicinas',
    title: 'Casa Las Glicinas',
    location: 'Villa Carlos Paz',
    year: '2024',
    type: 'Vivienda unifamiliar',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80&auto=format&fit=crop',
    alt: 'Vivienda con grandes aberturas y patio interior',
    span: 'wide',
    aspect: 'landscape',
  },
  {
    id: 'depto-nueva-cordoba',
    title: 'Refacción Nueva Córdoba',
    location: 'Córdoba',
    year: '2023',
    type: 'Remodelación integral',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80&auto=format&fit=crop',
    alt: 'Living minimalista con luz natural',
    span: 'narrow',
    aspect: 'portrait',
  },
  {
    id: 'estudio-cerro',
    title: 'Estudio en el Cerro',
    location: 'La Falda',
    year: '2023',
    type: 'Vivienda + estudio',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80&auto=format&fit=crop',
    alt: 'Estudio de doble altura con escalera de madera',
    span: 'narrow',
    aspect: 'portrait',
  },
  {
    id: 'casa-tres-patios',
    title: 'Casa de los Tres Patios',
    location: 'Alta Gracia',
    year: '2022',
    type: 'Vivienda unifamiliar',
    image:
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1600&q=80&auto=format&fit=crop',
    alt: 'Galería abierta con vista a patio interno',
    span: 'wide',
    aspect: 'landscape',
  },
  {
    id: 'local-cafe',
    title: 'Café de barrio',
    location: 'Córdoba',
    year: '2024',
    type: 'Comercial',
    image:
      'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1400&q=80&auto=format&fit=crop',
    alt: 'Interior cálido de café con maderas y plantas',
    span: 'half',
    aspect: 'landscape',
  },
  {
    id: 'cocina-villa-allende',
    title: 'Reforma Cocina + Comedor',
    location: 'Villa Allende',
    year: '2024',
    type: 'Remodelación parcial',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80&auto=format&fit=crop',
    alt: 'Cocina con isla y revestimientos cálidos',
    span: 'half',
    aspect: 'landscape',
  },
];
