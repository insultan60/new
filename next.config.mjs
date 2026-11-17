/** Old WordPress URLs → new URLs (301), so existing Google rankings and links carry over. */
const old = {
  "/physiotherapy-home-services-in-rawalpindi-and-islamabad": "/services/physiotherapy-home-services",
  "/pre-and-post-operative-physiotherapy": "/services/pre-post-operative-physiotherapy",
  "/women-health-physiotherapy": "/services/women-health-physiotherapy",
  "/pediatric-physiotherapy-in-rawalpindi-and-islamabad": "/services/pediatric-physiotherapy",
  "/neurological-rehabilitation-in-rawalpindi-and-islamabad": "/services/neurological-rehabilitation",
  "/hijama-cupping-center-in-rawalpindi-and-islamabad": "/services/hijama-cupping-therapy",
  "/product/soothex-pain-relief-oil": "/shop/soothex-pain-relief-oil",
  "/product-category/liquid": "/shop/soothex-pain-relief-oil",
  "/shop": "/shop/soothex-pain-relief-oil",
  "/about-us": "/about",
  "/contact-us": "/contact",
};
export default {
  async redirects() {
    return Object.entries(old).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};
