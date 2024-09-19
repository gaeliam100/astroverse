// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "Intelisystems";
export const SITE_TITLE = "Intelisystems";
export const SITE_DESCRIPTION = "El sitio web de InteliSystems se especializa en soluciones tecnológicas empresariales, incluyendo la renta de terminales portátiles Handheld con sistemas Android y Windows Mobile, y la implementación de software para la gestión de inventarios y almacenes. También ofrecemos servicios de desarrollo de software a medida para dispositivos móviles, así como mantenimiento y reparación de equipos. Nuestros productos están enfocados en optimizar operaciones logísticas, mejorar la productividad y garantizar seguridad en las operaciones empresariales. Además, proporcionamos soporte técnico y asesoría informática.";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "AstroVerse - All Tags";
export const Tags_DESCRIPTION =
  "AstroVerse - All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag in AstroVerse`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `Todos los articulos de la categoria '${category}' en Intelisystems AstroVerse`,
    description: `Explora todos los artículos bajo la categoría ${category} en intelisisytems`};
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/One/1/", title: "Inicio" },
  { href: "/category/Two/1/", title: "Nosotros" },
  { href: "/category/Three/1/", title: "Servicios" },
  { href: "/category/Three/1/", title: "Contacto" },
  { href: "/category/Three/1/", title: "Blog" },

];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/posts/why-astro/", title: "Nosotros" },
  { href: "/posts/tailwind-typography/", title: "Contácto" },
  { href: "/tags/", title: "Blog" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://twitter.com/astrodotbuild",
    icon: "tabler:brand-twitter",
    label: "Twitter",
  },
  {
    href: "https://github.com/isooosi",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
