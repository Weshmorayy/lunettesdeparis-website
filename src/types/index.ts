export type GlassesCategory = 'vue' | 'solaire' | 'enfants' | 'luxe' | 'anti-lumiere-bleue';

export type FaceShape = 'tous' | 'rond' | 'ovale' | 'carre' | 'rectangulaire' | 'coeur';

export interface GlassesProduct {
  id: string;
  name: string;
  brand: string;
  category: GlassesCategory;
  frameType: 'Cerclée' | 'Semi-cerclée' | 'Invisible / Percée' | 'Solaire';
  material: 'Acétate de cellulose' | 'Titane japonais' | 'Métal précieux' | 'Acier chirurgical' | 'TR90 Ultra-léger';
  shape: 'Ronde' | 'Aviateur / Pilote' | 'Rectangle' | 'Carrée' | 'Papillon / Cat-Eye' | 'Pantographe';
  price: number;
  originalPrice?: number;
  image: string;
  isPopular?: boolean;
  isHero?: boolean;
  inStock?: boolean;
  badge?: string;
  description: string;
  features: string[];
  suitedForFaces: FaceShape[];
  colors: string[];
  dimensions: {
    lensWidth: number; // mm
    bridgeWidth: number; // mm
    templeLength: number; // mm
  };
}

export interface OpticalService {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  badge?: string;
  highlights: string[];
}

export interface StoreLocation {
  id: string;
  name: string;
  district: string;
  address: string;
  phone: string;
  whatsapp: string;
  hoursWeek: string;
  hoursSat: string;
  isEmergencyAvailable?: boolean;
  mapEmbedUrl?: string;
}

export interface EyeHealthTip {
  id: string;
  title: string;
  category: 'Prévention' | 'Enfants' | 'Écrans & Confort' | 'Verres Médicaux';
  tag: string;
  summary: string;
  symptoms: string[];
  recommendation: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  location: string;
  content: string;
  frameBought?: string;
}
