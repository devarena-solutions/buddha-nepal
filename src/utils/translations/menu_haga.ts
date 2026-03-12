export const menuHaga = {
  appetizer: {
    index: 0,
    name: {
      en: "Appetizers",
      se: "Förrätter",
    },
    source: "/appetizer-banner.jpg",
    items: [
      {
        name: { en: "Papadam", se: "Papadam" },
        description: {
          en: "Papadum is a thin, crispy Indian flatbread made from lentil flour, served as a crunchy side or snack.",
          se: "Papadam är ett tunt och krispigt indiskt bröd gjort på linsmjöl, som serveras som tillbehör eller snacks.",
        },
        price: 30,
      },
      {
        name: { en: "Chopsi Potato", se: "Chopsi Potato" },
        description: {
          en: "Hot potato snack in a spicy flavour, seasoned with red chilies, Himalayan Timur chili (Sichuan pepper), black pepper, fenugreek, cumin, and coriander.",
          se: "Het potatischips med kryddig smak, smaksatt med röd chili, Himalaya-Timurpeppar (Sichuanpeppar), svartpeppar, bockhornsklöver, spiskummin och koriander.",
        },
        price: 80,
      },
      {
        name: { en: "Samosa Chat", se: "Samosa Chat" },
        description: {
          en: "Homemade vegetable samosas served on a plate with cucumber, tomato, onion, coriander, and yoghurt.",
          se: "Hemlagade vegsamosor upplagda på en tallrik, med gurka, tomat, lök, koriander och yoghurt.",
        },
        price: 80,
      },
      {
        name: { en: "Mountain Heart Stone Cocktail", se: "Mountain Heart Stone Cocktail" },
        description: {
          en: "Fried tiger prawns with sweet chili sauce, capsicum, onion and parsley.",
          se: "Stekta tigerräkor med sweet chilisås, paprika, lök och persilja.",
        },
        price: 90,
      },
    ],
  },
  main_dishes: {
    source: "/favourite-banner.jpg",
    index: 1,
    name: {
      en: "Main Dishes",
      se: "Huvudrätter",
    },
    items: [
      {
        name: { en: "Tikka Butter Masala", se: "Tikka Butter Masala" },
        description: {
          en: "Grilled chicken fillet or lamb, well-seasoned and prepared with nuts, butter, and a creamy sauce.",
          se: "Grillad kycklingfilé eller lamm, välkryddad och tillagad med nötter, smör och en krämig gräddsås.",
        },
        sub: [
          { name: { en: "Chicken", se: "Kyckling" }, price: 195 },
          { name: { en: "Lamb", se: "Lamm" }, price: 210 },
        ],
      },
      {
        name: { en: "Kathmandu Rabaf", se: "Kathmandu Rabaf" },
        description: {
          en: "Chicken or lamb marinated with sambal oelek, fresh ginger, star anise, and garlic. Cooked with honey, bell pepper, and tomato.",
          se: "Kyckling- eller lamm marinerad med sambal oelek, färsk ingefära, anis och vitlök. Tillagas med honung, paprika och tomat.",
        },
        sub: [
          { name: { en: "Chicken", se: "Kyckling" }, price: 195 },
          { name: { en: "Lamb", se: "Lamm" }, price: 210 },
        ],
      },
      {
        name: { en: "Swadilo", se: "Swadilo" },
        description: {
          en: "Chicken or lamb cooked with sesame seeds, coriander, turmeric, and ginger, served with fruit and a mango sauce.",
          se: "Kyckling- eller lamm tillagad med sesamfrön, koriander, gurkmeja och ingefära, serveras med frukt och mangosås.",
        },
        sub: [
          { name: { en: "Chicken", se: "Kyckling" }, price: 195 },
          { name: { en: "Lamb", se: "Lamm" }, price: 210 },
        ],
      },
      {
        name: { en: "Bhuttan (Medium)", se: "Bhuttan (Mellan)" },
        description: {
          en: "Chicken or lamb seasoned with cumin, ginger, garlic, black pepper, and garam masala.",
          se: "Kyckling- eller lamm kryddad med kummin, ingefära, vitlök, svartpeppar och garam masala.",
        },
        sub: [
          { name: { en: "Chicken", se: "Kyckling" }, price: 195 },
          { name: { en: "Lamb", se: "Lamm" }, price: 210 },
        ],
      },
      {
        name: { en: "Mango Chicken", se: "Mango Chicken" },
        description: {
          en: "Marinated chicken fillets cooked with mango, finely chopped garlic, and ginger.",
          se: "Marinerade kycklingfiléer tillagade med mango, finhackad vitlök och ingefära.",
        },
        price: 195,
      },
      {
        name: { en: "Chicken Timmur (Medium)", se: "Chicken Timmur (Mellan)" },
        description: {
          en: "Chicken fillet stir-fried with peppers, onions, and chili, seasoned with Timmur (Himalayan herb) and Sichuan pepper.",
          se: "Kycklingfilé wokad med paprika, lök och chilifrukter, kryddad med Timmur och Sichuanpeppar från Nepal.",
        },
        price: 199,
      },
      {
        name: { en: "Kadai", se: "Kadai" },
        description: {
          en: "Marinated chicken fillet, lamb, or scampi with bell peppers, onions, and vegetables in a basil sauce.",
          se: "Marinerade kycklingfiléer, lamm eller scampi med paprika, lök och grönsaker i basilikasås.",
        },
        sub: [
          { name: { en: "Chicken", se: "Kyckling" }, price: 205 },
          { name: { en: "Lamb", se: "Lamm" }, price: 220 },
          { name: { en: "Prawns", se: "Räkor" }, price: 230 },
        ],
      },
      {
        name: { en: "Balti (Medium)", se: "Balti (Mellan)" },
        description: {
          en: "Grilled chicken fillet or lamb, well-seasoned and prepared with nuts, butter, and a creamy sauce.",
          se: "Marinerad kycklingfilé eller lamm med grön chili, lök, paprika och vitlök i en kryddstark sås.",
        },
        sub: [
          { name: { en: "Chicken", se: "Kyckling" }, price: 205 },
          { name: { en: "Lamb", se: "Lamm" }, price: 220 },
        ],
      },
      {
        name: { en: "Saag Curry", se: "Saag Curry" },
        description: {
          en: "Chicken fillet, lamb, or small shrimp cooked with fresh ginger, garlic, and fenugreek, served with spinach leaves.",
          se: "Kycklingfilé, lamm eller små räkor tillagade med färsk ingefära, vitlök och bockhornsklöver, serveras med spenatblad.",
        },
        sub: [
          { name: { en: "Chicken", se: "Kyckling" }, price: 195 },
          { name: { en: "Lamb", se: "Lamm" }, price: 210 },
          { name: { en: "Prawns", se: "Räkor" }, price: 210 },
        ],
      },
    ],
  },
  momos: {
    source: "/momos.jpeg",
    index: 2,
    name: {
      en: "MO:MO - Dumplings",
      se: "MO:MO - Dumplings",
    },
    items: [
      {
        name: { en: "MO:MO - Dumplings", se: "MO:MO - Dumplings" },
        description: {
          en: "Momo are delicious dumplings with various fillings. We serve 10 freshly made momos with a flavorful sauce. Preparation time is approx 20 minutes.",
          se: "Momo är mumsiga degknyten med olika fyllningar. Vi serverar 10 stycken nygjorda momos tillsammans med en smakrik sås. Tillagningstiden är cirka 20 minuter.",
        },
        sub: [
          { name: { en: "Maasu MoMo (Lamb)", se: "Maasu MoMo (Lammfärs)" }, price: 175 },
          { name: { en: "Kukhura MoMo (Chicken)", se: "Kukhura MoMo (Kycklingfärs)" }, price: 170 },
          { name: { en: "Sabji MoMo (Veg)", se: "Sabji MoMo (Veg)" }, price: 170 },
        ],
      },
    ],
  },
  grill: {
    index: 3,
    source: "/grill.jpg",
    name: { en: "Grill Dishes", se: "Grill Rätter" },
    items: [
      {
        name: { en: "Tilicho (Scampi Grill)", se: "Tilicho (Scampi Grill)" },
        description: {
          en: "King prawns in mustard, garlic, honey, and green chili, served with a creamy red sauce.",
          se: "Kungsräkor i senap, vitlök, honung och grön chili, serverade med en krämig röd sås.",
        },
        price: 245,
      },
      {
        name: { en: "Chicken Roast (Medium)", se: "Chicken Roast (Mellan)" },
        description: {
          en: "Grilled chicken fillet, lightly fried in lentil flour and seasoned with Himalayan spices.",
          se: "Grillad kycklingfilé, lätt friterad i linsmjöl och kryddad med Himalayakrydda.",
        },
        price: 215,
      },
      {
        name: { en: "Hariyali Chicken Grill", se: "Hariyali Chicken Grill" },
        description: {
          en: "Marinated chicken fillets with mint, coriander and sesame seeds, served with a separate sauce.",
          se: "Marinerade kycklingfiléer med mynta, koriander och sesamfrön, serverade med separat sås.",
        },
        price: 225,
      },
      {
        name: { en: "Chicken Grill", se: "Chicken Grill" },
        description: {
          en: "Grilled chicken fillet, served with French fries or rice.",
          se: "Grillad kycklingfilé, serveras med friterade pommes eller ris.",
        },
        price: 215,
      },
      {
        name: { en: "Choila (Spicy)", se: "Choila (Stark)" },
        description: {
          en: "A distinct culinary tradition from Kathmandu. Prepared with bell pepper, onion, leek, tomato, and Himalayan spices. Quite spicy.",
          se: "En distinkt kulinarisk tradition från Kathmandu. Tillagad med paprika, lök, purjolök, tomat och en hälsosam kryddblandning. Ganska stark.",
        },
        sub: [
          { name: { en: "Chicken", se: "Kyckling" }, price: 199 },
          { name: { en: "Lamb", se: "Lamm" }, price: 215 },
        ],
      },
    ],
  },
  special: {
    index: 4,
    source: "/special.webp",
    name: { en: "Special Dishes", se: "Special Rätt" },
    items: [
      {
        name: { en: "Thali Mix", se: "Thali Mix" },
        description: {
          en: "A delicious combination of dishes: Chicken Timmur, Lamb Choila, Paneer Chilli, and mixed raita.",
          se: "En utsökt kombination av rätter: Chicken Timmur, Lamm Choila, Paneer Chilli och mixad raita.",
        },
        price: 245,
      },
      {
        name: { en: "Schnitzel", se: "Schnitzel" },
        description: {
          en: "Breaded high-quality pork, served with fries and creamy Béarnaise sauce.",
          se: "Panerat högkvalitativt fläsk, serveras med pommes frites och krämig bearnaisesås.",
        },
        price: 215,
      },
    ],
  },
  veg: {
    source: "/vegetarian-banner.jpg",
    index: 5,
    name: {
      en: "Vegetarian Dishes",
      se: "Vegetarisk Rätt",
    },
    items: [
      {
        name: { en: "Palak Paneer (Mild)", se: "Palak Paneer (Mild)" },
        description: {
          en: "Fresh, homemade Indian cheese with spinach and curry powder.",
          se: "Färsk, hemlagad indisk ost med spenat och currypulver.",
        },
        price: 195,
      },
      {
        name: { en: "Alo Gobi (Medium)", se: "Alo Gobi (Lagom Stark)" },
        description: {
          en: "Lightly spiced cauliflower, potatoes, and peas with cumin and other aromatic spices.",
          se: "Lätt kryddad blomkål, potatis och ärter med spiskummin samt andra aromatiska kryddor.",
        },
        price: 195,
      },
      {
        name: { en: "Tadka Daal (Medium)", se: "Tadka Daal (Mellan)" },
        description: {
          en: "Yellow lentils slow-cooked with red chili and tempered in butter or oil.",
          se: "Gula linser långkokta med röd chili och tempererade i smör eller olja.",
        },
        price: 190,
      },
    ],
  },
  bread: {
    source: "/bread-banner.jpg",
    index: 6,
    name: { en: "Paratha", se: "Paratha" },
    items: [
      {
        name: { en: "Plain Naan", se: "Typ av NAAN bröd" },
        description: {
          en: "Traditional naan bread fried with butter.",
          se: "Klassiskt naanbröd stekt med smör.",
        },
        price: 20,
      },
    ],
  },
  accessories: {
    source: "/accessories-banner.png",
    index: 7,
    name: { en: "Accessories", se: "Tillbehör" },
    items: [
      {
        name: { en: "Fried Rice", se: "Fried Rice" },
        description: {
          en: "Fragrant fried rice with fresh vegetables and egg.",
          se: "Kryddat stekt ris med färska grönsaker och ägg.",
        },
        price: 50,
      },
      {
        name: { en: "French Fries", se: "Pommes" },
        description: {
          en: "Crispy golden French fries.",
          se: "Krispiga gyllene pommes frites.",
        },
        price: 30,
      },
    ],
  },
  desserts: {
    source: "/dessert-banner.jpg",
    index: 8,
    name: { en: "Dessert", se: "Efterrätt / Desert" },
    items: [
      {
        name: { en: "Fanny Banana", se: "Fanny Banana" },
        description: {
          en: "Fried banana served with caramel sauce and cream.",
          se: "Friterad banan serverad med kolasås och grädde.",
        },
        price: 80,
      },
      {
        name: { en: "Mango Sabari", se: "Mango Sabari" },
        description: {
          en: "Creamy vanilla ice cream topped with fresh mango, toasted coconut flakes, and crunchy pistachios.",
          se: "Krämig vaniljglass toppad med färsk mango, rostade kokosflingor och knapriga pistagenötter.",
        },
        price: 90,
      },
    ],
  },
};