export const menuArsta = {
  appetizer: {
    index: 0,
    name: {
      en: "Appetizers",
      se: "Förrätter",
    },
    source: "/appetizer-banner.jpg",
    items: [
      {
        name: {
          en: "Papadam",
          se: "Papadam",
        },
        description: {
          en: "Crispy lentil flour bread.",
          se: "Krispigt linsmjölsbröd.",
        },
        price: "30",
      },
      {
        name: {
          en: "Chicken Sadeko",
          se: "Chicken Sadeko",
        },
        description: {
          en: "Grilled chicken with mango.",
          se: "Grillad kycklingfilé med mango.",
        },
        price: 80,
      },
      /* {
        name: {
          en: "Onion Roll",
          se: "Onion Roll",
        },
        description: {
          en: "Sliced onions smothered in a simple, fragrant spiced chickpea flour and fried to crispy perfection.",
          se: "Skivad lök kvävd i en enkel, doftande kryddad kikärtsmjöl och stekt till krispig perfektion.",
        },
        price: 70,
      }, */
      {
        name: {
          en: "Samosa(Veg. / Kött)",
          se: "Samosa(Veg. / Kött)",
        },
        description: {
          en: "Indian pirogue with minced lamb/veg filling, 2 pieces.",
          se: "Indisk pirog med lammfärs/veg fylling , 2st.",
        },
        price: 70,
      },
      {
        name: {
          en: "Mountain Heart Stone Cocktail",
          se: "Mountain Heart Stone Cocktail",
        },
        description: {
          en: "Fry tiger prawns with sweet-chili sauce. Served with two different sauces.",
          se: "Stek tiger räkor med sweet-chili sås. Serveras med två olika såser.",
        },
        price: 80,
      },
    ],
  },
  favourites: {
    source: "/favourite-banner.jpg",
    index: 1,
    name: {
      en: "Main Dishes",
      se: "Huvud Rätter",
    },
    items: [
      {
        name: {
          en: "Tikka Butter Masala (Chicken / Lamm)",
          se: "Tikka Butter Masala (Kyckling / Lamm)",
        },
        description: {
          en: "Grilled chicken/lamb in Tandoori spices cooked with mint, nuts and crème sauce.",
          se: "Grillad kyckling/lamm i Tandoori kryddor tillagad med mynta, nötter & gräddsås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 189,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 209,
          },
        ],
      },
      {
        name: {
          en: "Korma (Chicken / Lamm, Mild)",
          se: "Korma (Kyckling / Lamm, Mild)",
        },
        description: {
          en: "Mild chicken/ lamb fillet cooked in a curry sauce with cashew nuts.",
          se: "Mild kycklingfilé/ lammfile i en currysås med cashew-pistage nötter.",
        },
        price: undefined,
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 189,
          },
          {
            name: {
              en: "Lamb, mild",
              se: "Lamm, mild",
            },
            description: {
              en: null,
              se: null,
            },
            price: 209,
          },
        ],
      },
      /* {
        name: {
          en: "Alpine Spice (Chicken/ Lamm)",
          se: "Alpine Spice (Chicken/ Lamm)",
        },
        description: {
          en: "A spicy dish from Himalaya, chicken fillet cooked in a spicy sauce.",
          se: "En eldig anrättning från himalaya, kycklingfiléer med kryddstark sås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 199,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 219,
          },
        ],
      },
      {
        name: {
          en: "Vindaloo (Chicken / Lamm , X - Stark)",
          se: "Vindaloo (Chicken / Lamm , X - Stark)",
        },
        description: {
          en: "Chicken / lamb fillet cooked in red wine and piri piri from southern India.",
          se: "Kycklingfilé / lammfile brässerad i rödvin grovmalen piri piri från södra Indien.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 205,
            description: {
              en: null,
              se: null,
            },
          },
          {
            name: {
              en: "Lamb, X-Stark",
              se: "Lamm, X-Stark",
            },
            price: 219,
          },
        ],
      }, */
      {
        name: {
          en: "Madrasi (Chicken / Lamb)",
          se: "Madrasi (Kyckling / Lamm)",
        },
        description: {
          en: "Chicken fillet / lambfillets with a smell of fresh coriander cooked with coconut sauce, carom seeds, mustard seedstamrin spiced curry leaves.",
          se: "Kycklingfile / lammfile med doft av färsk koriander i tamrin kryddade curryblad,senapfrön, caromfrön och kokossås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 189,
            description: {
              en: null,
              se: null,
            },
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 209,
          },
        ],
      },
      {
        name: {
          en: "Kadai (Chicken / Lamm, Mellan / Stark)",
          se: "Kadai (Kyckling / Lamm, Mellan / Stark)",
        },
        description: {
          en: "Marinated chicken fillets, capsicum, onion. vegetables in a basilica sauce.",
          se: "Marinerade kycklingfiléer, paprika, lök, grönsaker i en basilikasås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 189,
          },

          {
            name: {
              en: "Lamb, Medium / Large",
              se: "Lamm, Mellan / Stark",
            },
            price: 209,
          },

          {
            name: {
              en: "Prawn, Medium / Large",
              se: "Scampi, Mellan / Stark",
            },
            price: 229,
          },
        ],
      },
      /* {
        name: {
          en: "Makhani (Chicken / Lamm, Mild)",
          se: "Makhani (Chicken / Lamm, Mild)",
        },
        description: {
          en: "Butter chicken / lamb cooked with raisins, cashew nuts in a mild tandoori sauce.",
          se: "Grillad kyckling / lamm tillagad med russin, tandoori, cashew och pistagenötter i en mild tandoorisås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 199,
          },
          {
            name: {
              en: "Lamb, Mild",
              se: "Lamm, Mild",
            },
            price: 215,
          },
        ],
      }, */
      {
        name: {
          en: "Balti (Chicken / Lamb, Mellan / Stark)",
          se: "Balti (Chicken / Lamm, Mellan / Stark)",
        },
        description: {
          en: "Marinated chicken / lamm fillets with green chili, onions, capsicums & garlic in a spicy sauce.",
          se: "Marinerade kycklingfiléer med grön chili, lök, paprika och vitlök i en kryddstark sås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 189,
          },
          {
            name: {
              en: "Lamb, Mellan / Stark)",
              se: "Lamm, Mellan / Stark)",
            },
            price: 209,
          },
        ],
      },
      {
        name: {
          en: "Mango Chicken (Mild/ Mellan)",
          se: "Mango Kyckling (Mild/ Mellan)",
        },
        description: {
          en: "Marinated chicken fillets cooked with mango, finely chopped garlic and ginger.",
          se: "Marinerade kycklingfileer tilllagad med mango, finnhakade vitlök och ingefära.",
        },
        price: 189,
      },
      /* {
        name: {
          en: "Mountain Misty Bites (Chicken / Lamm, Mellan)",
          se: "Mountain Misty Bites (Chicken / Lamm, Mellan)",
        },
        description: {
          en: "Marinated chicken fillets cooked with fresh ginger, onion, garlic, tomatoes and a mixture of spices.",
          se: "Marinerade kycklingfiléer/ lamb fillet tillagad med färsk ingefära, lök, vitlök, tomat och en kryddblandning.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 205,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 219,
          },
        ],
      },
      {
        name: {
          en: "Jalfrezi (Chicken / Lamm, Medium)",
          se: "Jalfrezi (Chicken / Lamm, Mellan)",
        },
        description: {
          en: "Marinated chicken / lamb fillets cooked with fresh vegetables, capsicums, onion and indian cheese in a cream sauce",
          se: "Marinerade kycklingfiléer / lamm tillagad med färska grönsaker, paprika, lök och indisk ost i en kryddig krämsås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 205,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 219,
          },
        ],
      },
      {
        name: {
          en: "Rogan Josh (Mellan)",
          se: "Rogan Josh (Mellan)",
        },
        description: {
          en: "Lamb fillets with a smell of fresh saffron, cardamom, fresh coriander, tomatoes & almond.",
          se: "Lamm filé med doft av saffran, kardemumma, färsk koriander, tomater och mandelflarn.",
        },
        price: 225,
      },
      {
        name: {
          en: "Handi (Chicken / Lamm, Medium)",
          se: "Handi (Chicken / Lamm, Mellan)",
        },
        description: {
          en: "Chicken/lamb with paprika, tomato, chili, coriander, cashew nuts.",
          se: "Kyckling/lamm med paprika, tomat, chili, koriander, cashewnötter.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 205,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 219,
          },
        ],
      }, */
      {
        name: {
          en: "Chilli Chicken (Medium / Strong)",
          se: "Chilli Kyckling (Mellan / Stark)",
        },
        description: {
          en: "Chicken with paprika, onion, garlic, tomato sauce, chili sauce and soy sauce.",
          se: "Kyckling med paprika, lök, vitlök, tomatsås, chilisås och sojasås.",
        },
        price: 195,
      },
      {
        name: {
          en: "Chicken Timmur (Medium)",
          se: "Kyckling Timmur (Mellan)",
        },
        description: {
          en: "Grilled chicken fillet with paprika, onion, ginger, garlic, chili pepper and Timmur (Himalayan herbs, Sichuan pepper from Nepal)",
          se: "Grillad kycklingfilé med paprika, lök, ingefära, vitlök, chilipeppar och Timmur (Himalaya örter, Sichuan pepper från Nepal)",
        },
        price: 189,
      },
      /* {
        name: {
          en: "Chicken Manchurian (Medium / Strong)",
          se: "Kyckling Manchurian (Mellan / Stark)",
        },
        description: {
          en: "Chicken with well-prepared special sauce (from South India).",
          se: "Kyckling med vällagade special sås (från syd indian).",
        },
        price: 205,
      },
      {
        name: {
          en: "Himalaya Chau-Min (Medium)",
          se: "Himalaya Chau-Min (Mellan)",
        },
        description: {
          en: "Noodles/ Spaghetti, fried with vegetables and chicken pieces.",
          se: "Nudlar/ Spaghetti, stekta med grönsaker och kyckling bitar.",
        },
        price: 199,
      }, */
      {
        name: {
          en: "Newari Choila (Chicken / Lamb, Mellan / Stark)",
          se: "Newari Choila (Kyckling / Lamm, Mellan / Stark)",
        },
        description: {
          en: "A distinct culinary tradition originating from the Newar people in the Kathmandu Valley of Nepal. Usually eaten with rice flakes. But here we serve it with rice. Of course, you can also choose to eat it with rice flakes if you prefer. A dish consisting of seasoned grilled Lamb/Chicken, mushrooms, mixed healthy spices with some mixed vegetables. This dish is usually quite spicy.",
          se: "En distinkt kulinarisk tradition som härstammar från Newar-folket i Kathmandudalen i Nepal. Vanligtivs äts med risflingor. Men här serveras vi med ris. Självklart kan välja risflingor om så man önskar.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 199,
          },
          {
            name: {
              en: "Lamb, Mellan / Stark)",
              se: "Lamm, Mellan / Stark)",
            },
            price: 209,
          },
        ],
      },
      {
        name: {
          en: "Piro Piro (Veg / Chicken / Lamb,  X-stark)",
          se: "Piro Piro (Veg / Kyckling / Lamm, X-stark)",
        },
        description: {
          en: "A fiery x-spicy dish with yogurt, and mixed well-seasoned piri piri chilli in tomato and onion souce.",
          se: "En eldit, x-stark rätt med yoghurt, och välkryddad piri piri chili i tomat och lök sås.",
        },
        sub: [
          {
            name: {
              en: "Veg",
              se: "Veg",
            },
            price: 179,
          },
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 189,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 199,
          },
        ],
      },
      {
        name: {
          en: "Saag Curry (Chicken / Shrimp / Lamb,  Mild)",
          se: "Saag Curry (Kyckling / Räkor / Lamm, Mellan)",
        },
        description: {
          en: "Chicken fillet / lamb fillet / small shrimp with spinach in a tasty curry sauce.",
          se: "Kycklingfilé / lammfile / små räkor med spenat i en goda currysås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 189,
          },
          {
            name: {
              en: "Shrimp",
              se: "Räkor",
            },
            price: 199,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 209,
          },
        ],
      },
    ],
  },
  thali: {
    source: "/thali-banner.jpeg",
    index: 2,
    name: {
      en: "Thali Dishes",
      se: "Thali Rätter",
    },
    items: [
      {
        name: {
          en: "Ayurveda Thali",
          se: "Ayurveda Thali",
        },
        description: {
          en: "Three vegetarian dishes: spinach vadji, okra, lentils and mix-veg. Served with rice and raita.",
          se: "Tre vegetariska rätter: spenat vadji, okra, linser och mix-veg. Serveras med ris och raita.",
        },
        price: 235,
      },
      /* {
        name: {
          en: "Mix Thali",
          se: "Mix Thali",
        },

        description: {
          en: "Grilled lamb fillet, Chicken sambal and Prawn curry. Served with rice and raita.",
          se: "Grillad lammfilé, Kyckling sambal och Scampi curry. Serveras med ris, och raita.",
        },
        price: 265,
      },
      {
        name: {
          en: "Thakali Thali ( Medium)",
          se: "Thakali Thali ( Mellan)",
        },

        description: {
          en: "Complete and very popular dish from Nepal, consisting of Daal Jhaneko (Urud lentils with 'Jimmu' . An herb from high altitude Himalaya), Chicken Timmur, Lamb Sadeko, Panir Chilli. Specially prepared with Himalayan herbs",
          se: "Komplett och mycket populär maträtt från Nepal, bestående av Daal Jhaneko (Urud linser med 'Jimmu' . En ört från höghöjd Himalaya), Chicken Timmur, Lamm Sadeko, Panir Chilli. Speciellt lagat med Himalaya örter.",
        },
        price: 270,
      }, */
    ],
  },
  veg: {
    source: "/vegetarian-banner.jpg",
    index: 3,
    name: {
      en: "Vegetarian/Vegan (Rice included)",
      se: "Vegetariska/Veganska (Ris ingår)",
    },
    items: [
      {
        name: {
          en: "Alo Ghobi (Vegetarian / Vegan, Medium)",
          se: "Alo Ghobi (Vegetarisk / Vegan, Mellan)",
        },
        description: {
          en: "Fine spiced cauliflower, potatoes with white cummin, peas and other spices",
          se: "Lätt kryddad blomkål, potatis, ärter, spiskummin, samt andra kryddor",
        },
        price: 185,
      },
      {
        name: {
          en: "Paneer Jalfrezi (Melan)",
          se: "Paneer Jalfrezi (Melan)",
        },
        description: {
          en: "Fresh Indian cheese cooked with capsicums, onions and mushrooms",
          se: "Färsk indisk ost tillagad med paprika, lök och champinjoner",
        },
        price: 185,
      },
      /* {
        name: {
          en: "Dall Mix (Melan)",
          se: "Dall Mix (Melan)",
        },
        description: {
          en: "Exotic mixed lentils with Indian spices",
          se: "Exotiska blandade linser med indiska kryddor",
        },
        price: 199,
      }, */
      {
        name: {
          en: "Palak Paneer (Melan)",
          se: "Palak Paneer (Melan)",
        },
        description: {
          en: "Homemade fresh Indian cheese with spinach and curry",
          se: "Hemlagad färsk indisk ost med spenat och curry pulver",
        },
        price: 185,
      },
      {
        name: {
          en: "Tadka Daal",
          se: "Tadka Daal",
        },
        description: {
          en: "Yellow lentils, red chilli with butter.",
          se: "Gula linser, röd chilli med smör.",
        },
        price: 189,
      },
      /* {
        name: {
          en: "Alo Motor Vindi (Vegetarisk / Vegan, Medium)",
          se: "Alo Motor Vindi (Vegetarisk / Vegan, Mellan)",
        },
        description: {
          en: "Fried potatoes, peas and okra with coconut and masala sauce",
          se: "Stekta potatis, ärtor och okra med kokos och masalasås.",
        },
        price: 199,
      },
      {
        name: {
          en: "Veg Kofta",
          se: "Veg Kofta",
        },
        description: {
          en: "Vegetable balls cooked with tomato-based curry and masala sauce.",
          se: "Grönsaksbullar tillagad med tomatbaserad curry och masala sås.",
        },
        price: 199,
      }, */
    ],
  },
  clay_oven: {
    source: "/clay-oven-banner.jpeg",
    index: 4,
    name: {
      en: "Tandoori - Grill (Rice included.)",
      se: "Tandoori - Grill (Ris Ingår.)",
    },
    items: [
      {
        name: {
          en: "Chicken Tikka Sizzlar (Medium & Strong)",
          se: "Chicken Tikka Sizzlar (Mellan & Stark)",
        },
        description: {
          en: "Marinated chicken fillets in a mild tandoori spice. Grilled in a clay oven and served with a mild cream sauce.",
          se: "Marinerade kycklingfiléer i en mild tandoori krydda grillad och den serveras med en mild grädd masala sås.",
        },
        price: 209,
      },
      {
        name: {
          en: "Chili Chicken Tandoori (Strong)",
          se: "Chili Chicken Tandoori (Stark)",
        },
        description: {
          en: "Marinated chicken filled with garlic, green chili, ginger and tandoori spices served with a red wine sauce",
          se: "Marinerad kycklingfiléer i vitlök, grön chili, ingefära och tandoori kryddor och serveras med en rödvinssås",
        },
        price: 209,
      },
      {
        name: {
          en: "Aurora Appetizer Mix (Medium)",
          se: "Aurora Appetizer Mix (Mild)",
        },
        description: {
          en: "A mixture of different tandoori dishes: Chicken tikka, lamb, tiger shrimps, salmon and garlic tikka. Served with a separate sauce",
          se: "En läcker blandning av olika tandoori rätter: chicken tikka, lamm, jätteräkor, lax och garlic tikka. Den serveras med separat sås.",
        },
        price: 255,
      },
      {
        name: {
          en: "Tandoori WOK (Medium)",
          se: "Tandoori WOK (Mellan)",
        },
        description: {
          en: "Marinated chicken fillet, fresh vegetables, coriander with sweet chili sauce.",
          se: "Marinerade kycklingfiléer, färska grönsaker, koriander med sweet chili sås.",
        },
        price: 215,
      },
      {
        name: {
          en: "Himali Chicken Grill (Medium / Strong)",
          se: "Himali Chicken Grill (Mellan / Stark)",
        },
        description: {
          en: "Marinated chicken fillet with garlic, cashews, green chilli, mint in alomond and coconut sauce.",
          se: "Marinerade kycklingfiléer med vitlök, cashewnötter, grön chili, mynta i mandel och kokossås.",
        },
        price: 255,
      },
      /* {
        name: {
          en: "Lamm Tikka Sizzlar (Mild, Medium & Strong)",
          se: "Lamm Tikka Sizzlar (Mild, Mellan & Stark)",
        },
        description: {
          en: "Grill lamb served with special sallad with hot iron sizzlar form.",
          se: "Grillad lammfile serveras med special sallad i varm järnform",
        },
        price: 285,
      },
 */
    ],
  },
  biryani_dishes: {
    source: "/mughlai-banner.jpg",
    index: 5,
    name: {
      en: "BIRYANI DISHES",
      se: "BIRYANI RÄTTER",
    },
    items: [
      {
        name: {
          en: "Biryani (Chicken / Lamb / Shrimp / Veg, Mild / Medium / Strong)",
          se: "Biryani (Chicken / Lamm / Räko / Veg, Mild / Mellan / Stark)",
        },
        description: {
          en: "With fresh ginger, garlic, corianders, special biryani masala, capsicum and saffron rice with separate curry sauce.",
          se: "Med färsk ingefära, vitlök, koriander, special biryani masala, paprika och saffranris med separat currysås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 195,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 209,
          },
          {
            name: {
              en: "Shrimp",
              se: "Räkor",
            },
            price: 215,
          },
          {
            name: {
              en: "Veg",
              se: "Veg",
            },
            price: 189,
          },
        ],
      },
      /* {
        name: {
          en: "Vegetarian Biryani (Mild, Mellan & Stark)",
          se: "Vegetarisk Biryani (Mild, Mellan & Stark)",
        },
        description: {
          en: " Mixed vegetable with fresh onion, ginger, garlic, special biryani masala, coriander, saffranris and seperat vegcurry sauce",
          se: "Blandade grönsaker med lök, ingefära, specialbiryani masala, paprika, saffranris, koriander med vegcurrysås",
        },
        price: 199,
      },
      {
        name: {
          en: "Shrimp Biryani (Mild, Mellan & Stark)",
          se: "Räkor Biryani (Mild, Mellan & Stark)",
        },
        description: {
          en: "Shrimps with fresh ginger, garlic, coriander, special biryani masala, capsicum and saffron rice with separate shrimpcurry sauce",
          se: "Räkor med fräsk ingefära, koriander, special biryani masala, saffranris and and paprika med seprat currysås.",
        },
        price: 255,
      },
 */
    ],
  },
  /* fish_and_seafood: {
    source: "/fish-banner.jpg",
    index: 6,
    name: {
      en: "Dishes from the Sea (Rice included)",
      se: "Rätter Från Havet (Ris ingår)",
    },
    items: [
      {
        name: {
          en: "Prawn Kadai (Medium & Strong)",
          se: "Scampi Kadai (Mellan & Stark)",
        },
        description: {
          en: "Tiger shrimps and vegetables in a spicy basilica sauce",
          se: "Jätteräkor med grönsaker i en kryddig basilika sås",
        },
        price: 239,
      },
      {
        name: {
          en: "Glacier Spice Trail Masala (Mellan & Stark)",
          se: "Glacier Spice Trail Masala (Mellan & Stark)",
        },
        description: {
          en: "Tiger shrimps in a spicy green masala, nuts and mints.",
          se: "Jätteräkor i en het grön masala, nötter och mynta.",
        },
        price: 239,
      },
    ],
  },
  desserts: {
    source: "/dessert-banner.jpg",
    index: 9,
    name: {
      en: "Desserts",
      se: "EFTERRÄTTER",
    },
    items: [
      {
        name: {
          en: "Kulfi",
          se: "Kulfi",
        },
        description: {
          en: "Homemade ice cream with milk, cashew nuts, coconut, pistachio and saffron.",
          se: "Hemlagad glass med mjölk, cashewnötter, kokos, pistage och saffran.",
        },
        price: 60,
      },
      {
        name: {
          en: "Gulab Jamun",
          se: "Gulab Jamun",
        },
        description: {
          en: "A sweet traditional dessert originating in the Indian subcontinent that is very popular in India, Nepal, Pakistan, Thailand, Myanmar and Bangladesh.",
          se: "En söt traditionell efterrätt med ursprung i indien subkontinenten som är mycket populär i Indien, Nepal, Pakistan, Thailand, Myanmar och Bangladesh.",
        },
        price: 70,
      },
      {
        name: {
          en: "Glass",
          se: "Glass",
        },
        description: {
          en: "Vanilla ice cream with caramel or chocolate sauce",
          se: "Vaniljglass med kola eller chokladsås",
        },
        price: 40,
      },
      {
        name: {
          en: "Mango Lassi",
          se: "Mango Lassi",
        },
        description: {
          en: "Indian milkshake made with mango, yoghurt and sugar.",
          se: "Indisk milkshake gjörd på mango, yoghurt, och socker",
        },
        price: 60,
      },
    ],
  }, */
  momos: {
    source: "/momos.jpeg",
    index: 6,
    name: {
      en: "MO:MO - Dumplings",
      se: "MO:MO - Dumplings",
    },
    items: [
      {
        name: {
          en: "MO:MO - Dumplings (Lamb / Chicken / Veg)",
          se: "MO:MO - Dumplings (Lamm / Kyckling / Veg)",
        },
        description: {
          en: "Momo are tasty dumplings with different fillings. Momo is a traditional delicacy in China, India, Nepal and Bhutan. You can eat Momo only steaming or steaming and frying for a crispier surface. We serve 10pcs Momos with good sauces that are healthy and directly imported from the Himalayas. It takes about 20 minutes to prepare.",
          se: "Momo är mumsiga degknyten med olika fyllningar. Momo är traditionell delikates i Kina, Indien, Nepal och Bhutan. Man kan äta Momo enbart ångande eller ångande och sketa för frasigare yta. Vi serverar 10st Momos med goda sås som hälsosamt och direkt importerade från himalaya. Det tar ca 20 minuter att tillaga.",
        },
        sub: [
          {
            name: {
              en: "Khasi Mo:mo (Lamb mince filling)",
              se: "Khasi Mo:mo (Lammfärs på fyllning)",
            },
            price: 175,
          },
          {
            name: {
              en: "Kukhura Mo:mo (Chicken mince filling)",
              se: "Kukhura Mo:mo (Kycklingfärs på fyllning)",
            },
            price: 165,
          },
          {
            name: {
              en: "Sabji Mo:mo (Vegetarian filling)",
              se: "Sabji Mo:mo (Vegetarisk fyllning)",
            },
            price: 165,
          },
        ],
      },
    ],
  },
  bread: {
    source: "/bread-banner.jpg",
    index: 7,
    name: {
      en: "Bread",
      se: "BRÖD",
    },
    items: [
      {
        name: {
          en: "Naan Bröd (Common)",
          se: "Naan Bröd (Vanlig)",
        },
        description: {
          en: "New made soft bread",
          se: "Nybakat mjukt bröd",
        },
        price: 25,
      },
      {
        name: {
          en: "Vitlök Naan Bröd",
          se: "Vitlök Naan Bröd",
        },
        description: {
          en: "Naan with garlic.",
          se: "Naan med vitlök.",
        },
        price: 35,
      },
      {
        name: {
          en: "Peshawari Naan",
          se: "Peshawari Naan",
        },
        description: {
          en: "Naan bread baked with raisins, cashews, coconut and baked with a sweet taste ",
          se: "Naan bröd bakad med russin, cashewnötter, kokos och bakas med söt smak. ",
        },
        price: 40,
      },
    ],
  },
  accessories: {
    source: "/accessories-banner.png",
    index: 8,
    name: {
      en: "Accessories",
      se: "TILLBEHÖR",
    },
    items: [
      {
        name: {
          en: " Minta Sauce / Tamarind Sauce / Mango Chutney",
          se: " Minta Sås / Tamarin Sås / Mango Chutney",
        },
        description: {
          en: "Yoghurt with mint / tamarind / mango chutney.",
          se: "Yogurt med minta / tamarin / mango chutney. ",
        },
        price: 40,
      },
      {
        name: {
          en: "Raita",
          se: "Raita",
        },
        description: {
          en: "Tomatoes, carrot, cucumber, yogurt and spice.",
          se: "Tomat, morötter, yoghurt, gurkor och krydda.",
        },
        price: 30,
      },
    ],
  },
};

export type MenuArstaData = typeof menuArsta;
export type MenuArstaSectionKey = keyof MenuArstaData;
