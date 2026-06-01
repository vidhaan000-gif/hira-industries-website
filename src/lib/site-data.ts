export type NavLink = {
  href: string;
  label: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

export type StatItem = {
  value: string;
  label: string;
};

export type ProductItem = {
  title: string;
  category: string;
  price: string;
  description: string;
  image: string;
  badge?: string;
  objectPosition?: string;
};

export type DownloadItem = {
  title: string;
  description: string;
  href: string;
  meta: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/company", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/quality", label: "Quality" },
  { href: "/collections", label: "Collections" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact Us" },
];

export const heroStats: StatItem[] = [
  { value: "25+", label: "Years of experience" },
  { value: "500+", label: "Happy customers" },
  { value: "50+", label: "Export markets" },
];

export const featureItems: FeatureItem[] = [
  {
    icon: "diamond",
    title: "Premium Quality",
    description:
      "Superior raw materials and strict inspection ensure every piece meets luxury-grade standards.",
  },
  {
    icon: "pen",
    title: "Exquisite Design",
    description:
      "Refined silhouettes and modern finishes that elevate everyday dining into a statement.",
  },
  {
    icon: "shield",
    title: "Durable & Reliable",
    description:
      "Balanced for long-term use, engineered to handle daily service with confidence.",
  },
  {
    icon: "leaf",
    title: "Sustainable",
    description:
      "Responsible manufacturing practices designed to reduce waste and support a cleaner tomorrow.",
  },
];

export const companyStats: StatItem[] = [
  { value: "25+", label: "Years in ceramics" },
  { value: "500+", label: "B2B customers" },
  { value: "50+", label: "Global markets" },
  { value: "100%", label: "Quality assurance" },
];

export const qualityStats: StatItem[] = [
  { value: "100%", label: "Inspection coverage" },
  { value: "24/7", label: "Production readiness" },
  { value: "ISO", label: "Process mindset" },
  { value: "Lead free", label: "Glaze standards" },
];

export const productFilters = [
  "All Products",
  "Tea Set",
  "Dinner Set",
  "Cup & Saucer",
  "Coffee Set",
  "Serveware",
  "Accessories",
];

export const featuredProducts: ProductItem[] = [
  {
    title: "Royal Marble Tea Set",
    category: "Tea Set",
    price: "INR 4,995",
    description: "Statement tea service with gold rim detailing and a deep black marble finish.",
    image: "/images/set.jpeg",
    badge: "New",
    objectPosition: "center center",
  },
  {
    title: "Golden Essence Tea Set",
    category: "Tea Set",
    price: "INR 5,200",
    description: "Elegant curves with a warm metallic accent made for premium hospitality settings.",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/cup-saucer/i/i/q/bone-china-ceramic-gold-line-tea-cofee-cup-plate-set-pack-of-6-original-imagzrfeypq4ncjp.jpeg?q=70",
    objectPosition: "center center",
  },
  {
    title: "Classic Black Tea Set",
    category: "Tea Set",
    price: "INR 3,999",
    description: "Bold, contemporary, and versatile for everyday tea service or luxury gifting.",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT_7yR2dVNCG_Ew-aT1gON8I25EkyZdLUzUMj3NAJjaPPjHH-w1cHYqmpFlOUxYQBsfMegghRt6R8C0VMJ5CE28imZyZGoF-47mq_WM_zAnjYEvrgsjNOpLkQZggKGY&usqp=CAc",
    objectPosition: "center top",
  },
  {
    title: "Ivory Grace Tea Set",
    category: "Tea Set",
    price: "INR 4,800",
    description: "A softer palette for refined interiors, boutique hotels, and special occasions.",
    image:
      "https://images.unsplash.com/photo-1654327247297-95bd5a98d946?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRhcmslMjB0aGVtZSUyMGNlcmFtaWN8ZW58MHwwfDB8fHww",
    objectPosition: "center center",
  },
  {
    title: "Royal Gold Dinner Set",
    category: "Dinner Set",
    price: "INR 12,500",
    description: "Formal dinnerware crafted for memorable gatherings and premium dining rooms.",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTFxXNFs8wE4jdCpMYXAONhuSAstdWfqBuqh-L1Ex2hHf79qHJ1Prtd7Nl9FVHi8PIB4DndXvixD72UKztEfZ6E2ZW1IFhQ0ouL5r15S8JCRPaLM4VROGt6yao3QFUoyU1fTnrgoA&usqp=CAc",
    objectPosition: "center center",
  },
  {
    title: "Coffee Ritual Set",
    category: "Coffee Set",
    price: "INR 5,650",
    description: "Compact, modern, and suited for curated coffee service and gifting.",
    image: "/images/set.jpeg",
    objectPosition: "right center",
  },
  {
    title: "Premium Cup & Saucer",
    category: "Cup & Saucer",
    price: "INR 2,450",
    description: "A clean, timeless silhouette with a polished gold accent for cafes and lounges.",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/cup-saucer/g/6/x/pack-of-6-bone-china-white-golden-series-pack-of-6-tea-cups-and-original-imahmbtgsstvja5r.jpeg?q=70",
    objectPosition: "center center",
  },
  {
    title: "Serveware Accent Bowl",
    category: "Serveware",
    price: "INR 3,150",
    description: "For snacks, condiments, and shared presentation across premium table settings.",
    image:
      "https://plus.unsplash.com/premium_photo-1661963026516-5ecf0e65e1b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZHVzdHJpYWwlMjBjZXJhbWljJTIwcHJvZHVjdHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    objectPosition: "center center",
  },
  {
    title: "Accessories Set",
    category: "Accessories",
    price: "INR 1,650",
    description: "Add-on pieces and finishing details for display-ready, coordinated collections.",
    image:
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=1200",
    objectPosition: "center center",
  },
];

export const collectionHighlights = [
  {
    title: "Tea Sets",
    subtitle: "Elegance in every sip",
    description:
      "Signature tea service pieces designed to feel refined in luxury homes, boutiques, and hospitality spaces.",
    image: "/images/set.jpeg",
    objectPosition: "center center",
  },
  {
    title: "Dinner Sets",
    subtitle: "Crafted for memorable moments",
    description:
      "Statement table settings that combine balance, practicality, and visual richness for larger gatherings.",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTFxXNFs8wE4jdCpMYXAONhuSAstdWfqBuqh-L1Ex2hHf79qHJ1Prtd7Nl9FVHi8PIB4DndXvixD72UKztEfZ6E2ZW1IFhQ0ouL5r15S8JCRPaLM4VROGt6yao3QFUoyU1fTnrgoA&usqp=CAc",
    objectPosition: "center center",
  },
  {
    title: "Cup & Saucer",
    subtitle: "Polished everyday ritual",
    description:
      "Clean and elegant service sets for cafes, offices, gifting, and premium home collections.",
    image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/cup-saucer/g/6/x/pack-of-6-bone-china-white-golden-series-pack-of-6-tea-cups-and-original-imahmbtgsstvja5r.jpeg?q=70",
    objectPosition: "center center",
  },
  {
    title: "Serveware",
    subtitle: "Functional with presence",
    description:
      "Matching accent pieces that complete a curated table with a cohesive, premium finish.",
    image:
      "https://plus.unsplash.com/premium_photo-1661963026516-5ecf0e65e1b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZHVzdHJpYWwlMjBjZXJhbWljJTIwcHJvZHVjdHMlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D",
    objectPosition: "center center",
  },
];

export const qualitySteps = [
  {
    step: "01",
    title: "Raw material selection",
    description:
      "We source materials for consistency, strength, and a refined finish before anything enters production.",
  },
  {
    step: "02",
    title: "Forming and glazing",
    description:
      "Each piece is shaped, refined, and glazed to preserve crisp edges and premium surface quality.",
  },
  {
    step: "03",
    title: "Kiln firing",
    description:
      "Controlled firing cycles are used to improve durability, stability, and long-term performance.",
  },
  {
    step: "04",
    title: "Final inspection",
    description:
      "Finished products are checked for surface consistency, balance, finish quality, and packaging readiness.",
  },
];

export const downloadResources: DownloadItem[] = [
  {
    title: "Company Profile",
    description:
      "A compact brand overview with company story, product segments, and manufacturing strengths.",
    href: "/downloads/company-profile",
    meta: "Brochure file",
  },
  {
    title: "Product Catalogue",
    description:
      "Featured tea sets, dinner sets, cup & saucer options, and pricing notes for buyers.",
    href: "/downloads/product-catalogue",
    meta: "Catalogue file",
  },
  {
    title: "Care Guide",
    description:
      "Practical cleaning, storage, and handling guidance to keep ceramic collections in premium condition.",
    href: "/downloads/care-guide",
    meta: "Care guide file",
  },
];

export const contactDetails = [
  {
    label: "Email",
    value: "info@hiraindustries.com",
    href: "mailto:info@hiraindustries.com",
  },
  {
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    label: "Location",
    value: "Guwahati, Assam, India",
    href: "https://maps.google.com/?q=Guwahati,Assam,India",
  },
];

export const footerGroups = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/company" },
      { label: "Products", href: "/products" },
      { label: "Quality", href: "/quality" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Tea Set", href: "/products#tea-set" },
      { label: "Dinner Set", href: "/products#dinner-set" },
      { label: "Cup & Saucer", href: "/products#cup-saucer" },
      { label: "Serveware", href: "/collections#serveware" },
    ],
  },
];
