import { GlassesProduct, OpticalService, StoreLocation, EyeHealthTip, Testimonial } from '@/types';

export const siteConfig = {
  name: "Lunettes de Paris Abidjan",
  shortName: "Lunettes de Paris",
  tagline: "Votre Vision d'Excellence & Haute Lunetterie à Abidjan",
  slogan: "Voyez clair, vivez grand. Portez ce qui vous distingue.",
  description: "Opticien-lunetier de référence à Abidjan (Plateau & Marcory). Examen de vue sur équipement de pointe, montures optiques et solaires de créateurs, verres haute précision et prise en charge assurances.",
  url: "https://lunettesdeparis.ci",
  email: "assistanceoptique@yahoo.fr",
  contactPlateau: "+225 07 68 35 15 15",
  contactMarcory: "+225 07 68 01 11 11",
  whatsappMain: "+2250768351515",
  social: {
    facebook: "https://facebook.com/lunettesdeparisabidjan",
    instagram: "https://instagram.com/lunettesdeparis.abidjan",
  },
  
  stores: [
    {
      id: "plateau",
      name: "Centre Optique Plateau",
      district: "Plateau, Centre des Affaires",
      address: "Avenue Chardy / Boulevard de la République, Plateau, Abidjan",
      phone: "+225 07 68 35 15 15",
      whatsapp: "+2250768351515",
      hoursWeek: "Lundi - Vendredi : 08h00 - 18h30",
      hoursSat: "Samedi : 09h00 - 17h00",
      isEmergencyAvailable: true,
    },
    {
      id: "marcory",
      name: "Boutique & Espace Vision Marcory",
      district: "Marcory Résidentiel",
      address: "Rue A55 Montigny, Marcory, Abidjan",
      phone: "+225 07 68 01 11 11",
      whatsapp: "+2250768011111",
      hoursWeek: "Lundi - Vendredi : 08h30 - 19h00",
      hoursSat: "Samedi : 09h00 - 18h00",
      isEmergencyAvailable: true,
    }
  ] as StoreLocation[],

  services: [
    {
      id: "examen-vue",
      title: "Examen de Vue & Bilan Réfractif",
      subtitle: "Technologie numérique de pointe",
      iconName: "Eye",
      badge: "Gratuit avec monture",
      description: "Contrôle visuel approfondi réalisé par nos opticiens diplômés. Détection de la myopie, astigmatisme, hypermétropie et presbytie.",
      highlights: ["Réfractomètre numérique HD", "Test d'acuité en conditions réelles", "Bilan visuel sans engagement en 15 min"]
    },
    {
      id: "visagisme",
      title: "Conseil Visagisme & Morphologie",
      subtitle: "Trouvez la monture qui sublime votre regard",
      iconName: "Sparkles",
      badge: "Personnalisé",
      description: "Parce qu'on ne choisit pas juste une paire de lunettes, nos experts analysent les proportions de votre visage, votre teint et votre style de vie.",
      highlights: ["Harmonisation morpho-visage", "Large choix acétate & titane", "Plus de 500 modèles de créateurs"]
    },
    {
      id: "verres-medicaux",
      title: "Verres Haute Précision & Anti-Reflet",
      subtitle: "Verres progressifs, anti-lumière bleue & polarisés",
      iconName: "ShieldCheck",
      badge: "Garantie Adaptation",
      description: "Partenaire des plus grands verriers mondiaux (Essilor, Zeiss). Traitements hydrophobes, anti-rayures, anti-lumière bleue et transitions solaires.",
      highlights: ["Centrage millimétrique 3D", "Filtre écrans nouvelle génération", "Garantie casse & adaptation 1 an"]
    },
    {
      id: "assurances",
      title: "Prise en Charge & Tiers Payant Assurances",
      subtitle: "Formalités administratives simplifiées",
      iconName: "FileCheck",
      badge: "Agrément 100%",
      description: "Conventionné avec les principales maisons d'assurance et mutuelles en Côte d'Ivoire (ASCOMA, NSIA, SAHAM/SANLAM, SUNU, ALLIANZ, Gras Savoye, etc.).",
      highlights: ["Devis immédiat pour accord", "Gestion directe du tiers payant", "Suivi rapide des dossiers"]
    }
  ] as OpticalService[],

  products: [
    {
      id: "henry-jullien-titane",
      name: "Henry Jullien Prestige Titane",
      brand: "Henry Jullien Paris",
      category: "vue",
      frameType: "Invisible / Percée",
      material: "Titane japonais",
      shape: "Rectangle",
      price: 185000,
      originalPrice: 220000,
      image: "/images/products/monture-aviateur-titane.png",
      isHero: true,
      isPopular: true,
      badge: "Luxe & Distinction",
      description: "L'élégance pour les regards d'exception. Monture Henry Jullien d'une légèreté absolue en titane noble travaillé à la main.",
      features: ["Titane hypoallergénique ultra-léger (12g)", "Plaquettes en silicone anatomique", "Finition or palladium poli"],
      suitedForFaces: ["rond", "ovale", "carre"],
      colors: ["Argent Platine", "Or Brossé", "Noir Ruthénium"],
      dimensions: { lensWidth: 54, bridgeWidth: 17, templeLength: 145 }
    },
    {
      id: "ahlem-colisee-champagne",
      name: "Ahlem Colisée Édition Champagne",
      brand: "Ahlem Paris",
      category: "vue",
      frameType: "Cerclée",
      material: "Acétate de cellulose",
      shape: "Ronde",
      price: 145000,
      image: "/images/products/monture-champagne-acetate.jpg",
      isPopular: true,
      badge: "Tendance Créateur",
      description: "Inspiration vintage parisienne façonnée dans un acétate organique translucide couleur champagne précieux.",
      features: ["Acétate 8mm biseauté main", "Charnières 5 rivets renforcées", "Finition solaire ou optique"],
      suitedForFaces: ["carre", "rectangulaire", "ovale"],
      colors: ["Champagne Clair", "Écaille Havane", "Cristal Fumé"],
      dimensions: { lensWidth: 48, bridgeWidth: 21, templeLength: 145 }
    },
    {
      id: "rayna-smart-ai-glasses",
      name: "Rayna AI Smart Audio Optics",
      brand: "Green Lion",
      category: "anti-lumiere-bleue",
      frameType: "Cerclée",
      material: "TR90 Ultra-léger",
      shape: "Carrée",
      price: 85000,
      originalPrice: 110000,
      image: "/images/products/lunettes-connectees-smart-black.webp",
      isPopular: true,
      badge: "High-Tech 2026",
      description: "Lunettes connectées intelligentes avec haut-parleurs directionnels intégrés, micro antibruit et verres anti-lumière bleue.",
      features: ["Audio Bluetooth 5.3 stéréo", "Verres Blue-Blocker 420nm", "Autonomie 8h d'écoute active"],
      suitedForFaces: ["rond", "ovale", "coeur"],
      colors: ["Noir Mat Tech", "Bleu Nuit"],
      dimensions: { lensWidth: 52, bridgeWidth: 18, templeLength: 148 }
    },
    {
      id: "vintage-gold-aviator-solar",
      name: "Soleil Aviateur Rivage Or",
      brand: "Lunettes de Paris Édition",
      category: "solaire",
      frameType: "Solaire",
      material: "Métal précieux",
      shape: "Aviateur / Pilote",
      price: 75000,
      image: "/images/products/lunettes-solaires-vintage-gold.jpg",
      isPopular: true,
      badge: "Protection UV400",
      description: "Silhouette pilote intemporelle sublimée par une monture dorée et des verres minéraux polarisés antireflet vert forêt.",
      features: ["Verres polarisés Catégorie 3", "Protection 100% UVA/UVB/UVC", "Double pont ciselé"],
      suitedForFaces: ["ovale", "carre", "coeur"],
      colors: ["Doré / Vert G15", "Argent / Gris Dégradé", "Or Noir / Miroir"],
      dimensions: { lensWidth: 58, bridgeWidth: 14, templeLength: 140 }
    },
    {
      id: "paris-classic-round-tortoise",
      name: "Monture Élégance Ronde Écaille",
      brand: "Lunettes de Paris",
      category: "vue",
      frameType: "Cerclée",
      material: "Acétate de cellulose",
      shape: "Pantographe",
      price: 65000,
      image: "/images/products/monture-optique-ronde-classic.jpeg",
      isPopular: true,
      badge: "Indémodable",
      description: "La silhouette intello-chic par excellence. Légère, confortable et parfaitement ajustée au contour du nez.",
      features: ["Nez clé ergonomique", "Acétate naturel poli au tonneau", "Compatible tous types de verres"],
      suitedForFaces: ["carre", "rectangulaire", "ovale"],
      colors: ["Écaille Ambrée", "Noir Onyx", "Bordeaux Profond"],
      dimensions: { lensWidth: 49, bridgeWidth: 20, templeLength: 142 }
    }
  ] as GlassesProduct[],

  healthTips: [
    {
      id: "demangeaisons-yeux",
      title: "Vos yeux vous démangent souvent ?",
      category: "Prévention",
      tag: "Santé Visuelle",
      summary: "3 causes fréquentes décryptées par nos opticiens : allergies, sécheresse due aux écrans ou conjonctivite.",
      symptoms: ["Picotements après 2h d'écran", "Sensation de sable dans les yeux", "Rougeurs et larmoiements fréquents"],
      recommendation: "Passez en boutique pour un contrôle d'humidification oculaire et adoptez des verres traités avec filtre lumière bleue.",
      readTime: "2 min"
    },
    {
      id: "rentree-enfants",
      title: "Contrôle de la vue avant la rentrée scolaire",
      category: "Enfants",
      tag: "Spécial Rentrée",
      summary: "80% des apprentissages passent par la vue. Une baisse de concentration découle souvent d'une fatigue visuelle non corrigée.",
      symptoms: ["Enfant qui plisse les yeux devant le tableau", "Maux de tête en fin d'après-midi", "Lenteur à la lecture"],
      recommendation: "Faites tester gratuitement la vue de vos enfants au Plateau ou à Marcory avant le début des cours.",
      readTime: "3 min"
    },
    {
      id: "lumiere-bleue-ecrans",
      title: "Comment préserver vos yeux du travail sur ordinateur",
      category: "Écrans & Confort",
      tag: "Bureau & Tech",
      summary: "La règle des 20-20-20 et l'importance des verres antireflet à coupure 420nm pour les professionnels actifs.",
      symptoms: ["Yeux secs et lourds le soir", "Vision trouble temporaire", "Troubles de l'endormissement"],
      recommendation: "Équipez-vous d'un verre neutre ou correcteur Blue-Defense pour neutraliser le pic énergétique des LEDs.",
      readTime: "2 min"
    }
  ] as EyeHealthTip[],

  testimonials: [
    {
      id: "test-1",
      name: "M. Kouamé Jean-Marc",
      role: "Directeur Financier, Plateau",
      rating: 5,
      location: "Abidjan Plateau",
      content: "Un service irréprochable au centre du Plateau. Mon examen de vue a été fait avec un professionnalisme rare, et la monture Henry Jullien reçue en 48h avec mes verres progressifs est un bijou de confort.",
      frameBought: "Henry Jullien Prestige Titane"
    },
    {
      id: "test-2",
      name: "Mme Diabaté Aminata",
      role: "Consultante en Communication",
      rating: 5,
      location: "Marcory",
      content: "Je cherchais une monture chic qui change vraiment l'allure de mon visage. Les conseils de visagisme à Marcory ont fait toute la différence. Je reçois des compliments tous les jours !",
      frameBought: "Ahlem Colisée Édition Champagne"
    },
    {
      id: "test-3",
      name: "Dr. Bakayoko S.",
      role: "Chirurgien",
      rating: 5,
      location: "Cocody",
      content: "Prise en charge directe avec mon assurance sans tracasserie. Verres haute précision d'une netteté absolue pour mon travail. Merci à toute l'équipe de Lunettes de Paris !",
      frameBought: "Lunettes Solaires & Optiques Verres Zeiss"
    }
  ] as Testimonial[],
};
