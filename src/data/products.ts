export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  images: string[];
  rating: number;
  categories: string[];
  rawDescription: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "Sublingual Methylated B-Complex",
    slug: "b-complex",
    price: 6800,
    images: ['/images/products/b-complex/0.png', '/images/products/b-complex/1.png', '/images/products/b-complex/2.jpg', '/images/products/b-complex/3.jpg', '/images/products/b-complex/4.jpg', '/images/products/b-complex/5.jpg', '/images/products/b-complex/6.png'],
    rating: 4.6,
    categories: ['cat_addiction_management', 'cat_cellular_regeneration', 'cat_chronic_fatigue', 'cat_energy_support', 'cat_heart_health', 'cat_menopause', 'cat_cognitive_health', 'cat_sleep', 'cat_sports_performance', 'cat_weight_loss'],
    rawDescription: `High-stability liposomes | Liquid drops | Proven instant absorption
30 x 1ml daily doses | Citrus flavour
Formulated using co-enzyme and methylated forms of B-vitamins for optimal absorption and utilisation.`
  },
  {
    id: 2,
    name: "Sublingual Anagen Advanced",
    slug: "anagen-advanced",
    price: 6400,
    images: ['/images/products/anagen-advanced/0.png', '/images/products/anagen-advanced/1.png', '/images/products/anagen-advanced/2.jpg', '/images/products/anagen-advanced/3.jpg', '/images/products/anagen-advanced/4.jpg', '/images/products/anagen-advanced/5.jpg', '/images/products/anagen-advanced/6.png'],
    rating: 4.6,
    categories: ['cat_addiction_management', 'cat_cellular_regeneration', 'cat_chronic_fatigue', 'cat_energy_support', 'cat_heart_health', 'cat_menopause', 'cat_cognitive_health', 'cat_sleep', 'cat_sports_performance', 'cat_weight_loss'],
    rawDescription: `High-stability liposomes | Liquid drops | Proven instant absorption 30 x 1ml daily doses | Orange flavour.
Bioactive collagen + targeted nutrients to support hair, skin and overall wellbeing.`
  },
  {
    id: 3,
    name: "Sublingual NAD+ Cellular Energy Production",
    slug: "sublingual-nad-cellular-energy-production",
    price: 7200,
    images: ['/images/products/sublingual-nad-cellular-energy-production/0.png', '/images/products/sublingual-nad-cellular-energy-production/1.png', '/images/products/sublingual-nad-cellular-energy-production/2.jpg', '/images/products/sublingual-nad-cellular-energy-production/3.jpg', '/images/products/sublingual-nad-cellular-energy-production/4.jpg', '/images/products/sublingual-nad-cellular-energy-production/5.png', '/images/products/sublingual-nad-cellular-energy-production/6.jpg', '/images/products/sublingual-nad-cellular-energy-production/7.png'],
    rating: 4.8,
    categories: ['cat_addiction_management', 'cat_cellular_regeneration', 'cat_chronic_fatigue', 'cat_energy_support', 'cat_heart_health', 'cat_menopause', 'cat_cognitive_health', 'cat_sleep', 'cat_sports_performance', 'cat_weight_loss'],
    rawDescription: `NAD+, Nicotinamide adenine dinucleotide (30 doses / 125mg per dose), High-stability liposomes, Liquid drops, Instant absorption, Island punch flavour`
  },
  {
    id: 4,
    name: "Sublingual Glutathione",
    slug: "sublingual-glutathione",
    price: 6400,
    images: ['/images/products/sublingual-glutathione/0.png', '/images/products/sublingual-glutathione/1.png', '/images/products/sublingual-glutathione/2.jpg', '/images/products/sublingual-glutathione/3.jpg', '/images/products/sublingual-glutathione/4.jpg', '/images/products/sublingual-glutathione/5.png', '/images/products/sublingual-glutathione/6.jpg', '/images/products/sublingual-glutathione/7.png'],
    rating: 4.7,
    categories: ['cat_acne', 'cat_cellular_regeneration', 'cat_chronic_fatigue', 'cat_energy_support', 'cat_hair_regeneration', 'cat_heart_health', 'cat_immune_support', 'cat_menopause', 'cat_nervous_system', 'cat_cognitive_health', 'cat_sports_performance', 'cat_weight_loss'],
    rawDescription: ``
  },
  {
    id: 5,
    name: "Sublingual Turmeric Curcumin",
    slug: "sublingual-turmeric-curcumin",
    price: 4400,
    images: ['/images/products/sublingual-turmeric-curcumin/0.png', '/images/products/sublingual-turmeric-curcumin/1.png', '/images/products/sublingual-turmeric-curcumin/2.jpg', '/images/products/sublingual-turmeric-curcumin/3.jpg', '/images/products/sublingual-turmeric-curcumin/4.jpg', '/images/products/sublingual-turmeric-curcumin/5.png', '/images/products/sublingual-turmeric-curcumin/6.jpg', '/images/products/sublingual-turmeric-curcumin/7.png'],
    rating: 4.7,
    categories: ['cat_eye_health', 'cat_hair_regeneration', 'cat_heart_health', 'cat_immune_support', 'cat_pms', 'cat_sports_performance'],
    rawDescription: ``
  },
  {
    id: 6,
    name: "Sublingual Vitamin D3 + K2",
    slug: "sublingual-vitamin-d3-k2",
    price: 4000,
    images: ['/images/products/sublingual-vitamin-d3-k2/0.png', '/images/products/sublingual-vitamin-d3-k2/1.png'],
    rating: 4.7,
    categories: ['cat_acne', 'cat_anxiety', 'cat_bone_teeth', 'cat_chronic_fatigue', 'cat_energy_support', 'cat_eye_health', 'cat_heart_health', 'cat_immune_support', 'cat_menopause', 'cat_nervous_system', 'cat_cognitive_health', 'cat_sleep', 'cat_sports_performance'],
    rawDescription: ``
  },
  {
    id: 7,
    name: "Sublingual Resveratrol",
    slug: "sublingual-resveratrol",
    price: 6400,
    images: ['/images/products/sublingual-resveratrol/0.png', '/images/products/sublingual-resveratrol/1.png'],
    rating: 4.6,
    categories: ['cat_acne', 'cat_cellular_regeneration', 'cat_heart_health', 'cat_blood_pressure', 'cat_cholesterol', 'cat_menopause', 'cat_cognitive_health', 'cat_pms', 'cat_sports_performance', 'cat_weight_loss'],
    rawDescription: ``
  },
  {
    id: 8,
    name: "Sublingual Methyl B12",
    slug: "sublingual-methyl-b12",
    price: 4400,
    images: ['/images/products/sublingual-methyl-b12/0.png', '/images/products/sublingual-methyl-b12/1.png', '/images/products/sublingual-methyl-b12/2.png', '/images/products/sublingual-methyl-b12/3.jpg', '/images/products/sublingual-methyl-b12/4.jpg', '/images/products/sublingual-methyl-b12/5.png', '/images/products/sublingual-methyl-b12/6.jpg', '/images/products/sublingual-methyl-b12/7.png'],
    rating: 5.0,
    categories: ['cat_anxiety', 'cat_chronic_fatigue', 'cat_energy_support', 'cat_heart_health', 'cat_menopause', 'cat_nervous_system', 'cat_cognitive_health', 'cat_pms', 'cat_sports_performance'],
    rawDescription: ``
  },
  {
    id: 9,
    name: "Sublingual NMN",
    slug: "sublingual-nmn",
    price: 9600,
    images: ['/images/products/sublingual-nmn/0.png', '/images/products/sublingual-nmn/1.png', '/images/products/sublingual-nmn/2.jpg', '/images/products/sublingual-nmn/3.jpg', '/images/products/sublingual-nmn/4.jpg', '/images/products/sublingual-nmn/5.png', '/images/products/sublingual-nmn/6.jpg', '/images/products/sublingual-nmn/7.png'],
    rating: 4.6,
    categories: ['cat_cellular_regeneration', 'cat_chronic_fatigue', 'cat_energy_support', 'cat_heart_health', 'cat_cognitive_health', 'cat_sports_performance'],
    rawDescription: ``
  },
];
