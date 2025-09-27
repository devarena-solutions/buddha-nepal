import type { Language } from "./types";

type LocalizedText = Language;

type LocalizedDish = {
  price: number | string | null;
  name: LocalizedText;
  description: LocalizedText;
  source: string;
};

type HomepageTranslations = {
  title: LocalizedText;
  reservation_button: LocalizedText;
  intro: LocalizedText;
  intro_header: LocalizedText;
  intro_description_one: LocalizedText;
  intro_description_two: LocalizedText;
  dishes: LocalizedDish[];
  menu_title: LocalizedText;
  menu_description: LocalizedText;
  contact_us: LocalizedText;
  contact_description_one: LocalizedText;
  contact_description_two: LocalizedText;
  phone: LocalizedText;
  email: LocalizedText;
  table_reservation_title: LocalizedText;
  name: LocalizedText;
  mail: LocalizedText;
  phone_number: LocalizedText;
  guests: LocalizedText;
  date: LocalizedText;
  time: LocalizedText;
  message: LocalizedText;
};

export const homepage: HomepageTranslations = {
  title: {
    en: "ELEVATE YOUR TASTE",
    se: "DEN BÄSTA UPPLEVELSEN",
  },
  reservation_button: {
    en: "Book Now",
    se: "BOKA NU",
  },
  intro: {
    en: "About Us",
    se: "Om oss",
  },
  intro_header: {
    en: "We Leave A Delicious Memory For You",
    se: "Vi lämnar ett härligt minne till dig",
  },
  intro_description_one: {
    en: "Welcome to BUDDHA - a culinary journey that transports you to the heart of the Himalayas through a symphony of flavors and a warm, inviting atmosphere. Nestled in the heart of Stockholm, our restaurant is a hidden gem that promises a dining experience like no other.",
    se: "Välkommen till BUDDHA - en kulinarisk resa som tar dig till Himalayas hjärta genom en symfoni av smaker och en varm, inbjudande atmosfär. Inbäddat i hjärtat av Stockholm är vår restaurang en dold pärla som utlovar en matupplevelse utan dess like",
  },
  intro_description_two: {
    en: "At BUDDHA, we pride ourselves on offering a gastronomic adventure that showcases the diverse and rich culinary traditions of the Himalayan region.",
    se: "På BUDDHA är vi stolta över att erbjuda ett gastronomiskt äventyr som visar upp de olika och rika kulinariska traditionerna i Himalaya-regionen",
  },
  dishes: [
    {
      price: null,
      name: {
        en: "Samosa Chaat",
        se: "Samosa chaat",
      },
      description: {
        en: "Crisp samosa with tamarind chutney and mango-mint sauce.",
        se: "Krispig samosa med tamarindsås och mango-myntasås.",
      },
      source: "/home-dishes/samosa-chaat.jpg",
    },
    {
      price: null,
      name: {
        en: "Thukpa",
        se: "Thukpa",
      },
      description: {
        en: "Soul-warming Himalayan noodle soup with fragrant broth.",
        se: "Självvärmande Himalaya-nudelsoppa med doftande buljong.",
      },
      source: "/home-dishes/thukpa.jpg",
    },
    {
      price: null,
      name: {
        en: "Momos",
        se: "Momos",
      },
      description: {
        en: "Steamed dumplings with chilli and sesame dressing.",
        se: "Ångade dumplings med chili- och sesamdressing.",
      },
      source: "/home-dishes/momos.jpeg",
    },
    {
      price: null,
      name: {
        en: "Choila",
        se: "Choila",
      },
      description: {
        en: "Char-grilled Nepali meat salad with toasted spices.",
        se: "Kolgrillad nepalesisk sallad med rostade kryddor.",
      },
      source: "/home-dishes/choila.jpg",
    },
    {
      price: null,
      name: {
        en: "Chicken Timur",
        se: "Chicken Timur",
      },
      description: {
        en: "Pan-seared chicken glazed with citrus timur pepper.",
        se: "Stekt kyckling glaserad med citrus och timurpeppar.",
      },
      source: "/home-dishes/chicken-timur.jpg",
    },
    {
      price: null,
      name: {
        en: "Chilli Chicken",
        se: "Chili-kyckling",
      },
      description: {
        en: "Crispy wok-tossed chicken with bell peppers and chilli heat.",
        se: "Krispig wokad kyckling med paprika och chilisting.",
      },
      source: "/home-dishes/chilli-chicken.jpeg",
    },
    {
      price: null,
      name: {
        en: "Noodles (Chicken & Prawn)",
        se: "Nudlar (kyckling & skaldjur)",
      },
      description: {
        en: "Silky noodles tossed with chicken, prawn and wok vegetables.",
        se: "Silkeslena nudlar med kyckling, scampi och wokade grönsaker.",
      },
      source: "/home-dishes/noodles-chicken-scampi.jpeg",
    },
    {
      price: null,
      name: {
        en: "Fried Rice",
        se: "Stekt ris",
      },
      description: {
        en: "Fragrant fried rice cooked with seasonal vegetables.",
        se: "Doftande stekt ris med säsongens grönsaker.",
      },
      source: "/home-dishes/fried-rice.jpeg",
    },
    {
      price: null,
      name: {
        en: "Grilled Chicken & Pommes",
        se: "Grillad kyckling med pommes",
      },
      description: {
        en: "Charred chicken fillet, herb butter glaze and golden fries.",
        se: "Kolgrillad kycklingfilé, örtsmörsglaze och gyllene pommes.",
      },
      source: "/home-dishes/grilled-chicken-pommes.jpg",
    },
    {
      price: null,
      name: {
        en: "Chicken Burger",
        se: "Kycklingburgare",
      },
      description: {
        en: "Crispy chicken burger layered with brioche and pickles.",
        se: "Krispig kycklingburgare med brioche och picklad topping.",
      },
      source: "/home-dishes/chicken-burger.jpg",
    },
    {
      price: null,
      name: {
        en: "Snichizel",
        se: "Snichizel",
      },
      description: {
        en: "Golden crumbed schnitzel brightened with lemon zest.",
        se: "Gyllene panerad schnitzel med frisk citronskal.",
      },
      source: "/home-dishes/snichizel.jpg",
    },
    {
      price: null,
      name: {
        en: "Caesar Sallad",
        se: "Caesar sallad",
      },
      description: {
        en: "Crisp romaine, parmesan ribbons and creamy dressing.",
        se: "Krispig romansallad, parmesanflingor och krämig dressing.",
      },
      source: "/home-dishes/caesar-sallad.jpeg",
    },
    {
      price: null,
      name: {
        en: "Mustang Aaloo",
        se: "Mustang aaloo",
      },
      description: {
        en: "Roasted Nepali potatoes finished with smoked chilli oil.",
        se: "Rostade nepalesiska potatisar med rökt chiliolja.",
      },
      source: "/home-dishes/mustang-aaloo.jpg",
    },
    {
      price: null,
      name: {
        en: "Chicken Tariyaki",
        se: "Kyckling tariyaki",
      },
      description: {
        en: "Caramelised teriyaki chicken finished with sesame seeds.",
        se: "Karamelliserad teriyakikyckling med sesamfrön.",
      },
      source: "/home-dishes/chicken-tariyaki.jpg",
    },
  ],
  menu_title: {
    en: "OUR MENU",
    se: "VÅR MENY",
  },
  menu_description: {
    en: "Our selection of dishes with quality taste",
    se: "Vårt urval av rätter med kvalitetssmak",
  },
  contact_us: {
    en: "Contact US",
    se: "Kontakta oss",
  },
  contact_description_one: {
    en: "You have the option to either make a reservation in advance or simply drop by our restaurnat without prior booking.",
    se: "Du har möjlighet att antingen boka i förväg eller helt enkelt komma förbi vårt restaurnag utan förbokning",
  },
  contact_description_two: {
    en: "At our restaurant, you can either secure a table by making a reservation in advance or simply walk in whenever you like",
    se: "På vårt restaurang kan du antingen säkra ett bord genom att boka i förväg eller helt enkelt gå in när du vill",
  },
  phone: {
    en: "Phone Numbers",
    se: "Phone Numbers",
  },
  email: {
    en: "Email",
    se: "Email",
  },
  table_reservation_title: {
    en: "Table Reservation",
    se: "Bordsbokning",
  },
  name: {
    en: "Your Name",
    se: "Ditt namn",
  },
  mail: {
    en: "Your Email Address",
    se: "Din e-postadress",
  },
  phone_number: {
    en: "Your Phone Number",
    se: "Ditt telefonnummer",
  },
  guests: {
    en: "Number of Guests",
    se: "Antal gäster",
  },
  date: {
    en: "date",
    se: "datum",
  },
  time: {
    en: "Time",
    se: "Tid",
  },
  message: {
    en: "Message",
    se: "meddelande",
  },
};
