export const siteBaseUrl = "https://sushillwaddhwa.vercel.app";
export const defaultOgImage = `${siteBaseUrl}/og-image.jpg`;

export const routeSeoData = {
  "/": {
    title: "SUSHILL WADDHWA — Global Hospitality Entrepreneur • Investor",
    description: "Official website of Sushill Waddhwa: Global Hospitality Entrepreneur, Investor, Founder & CMD of Platinum World Grroup (Since 1989). Exploring luxury hotels, destinations, investments, and curated brand collaborations worldwide.",
    canonical: `${siteBaseUrl}/`,
    ogTitle: "SUSHILL WADDHWA — Global Hospitality Entrepreneur • Investor",
    ogDescription: "Global Hospitality Entrepreneur • Investor. Founder & CMD, Platinum World Grroup. GLOBAL • SOPHISTICATED • TRUSTWORTHY • CHARISMATIC • DISCERNING • ADVENTUROUS.",
    ogImage: defaultOgImage,
    imageAlt: "Sushill Waddhwa — Global Hospitality Entrepreneur • Investor",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": `${siteBaseUrl}/#person`,
          "name": "Sushill Waddhwa",
          "jobTitle": "Founder & Chairman and Managing Director",
          "worksFor": {
            "@type": "Organization",
            "name": "Platinum World Grroup"
          },
          "description": "Global Hospitality Entrepreneur, Investor, Founder & CMD of Platinum World Grroup (Since 1989).",
          "url": siteBaseUrl,
          "email": "info@platinumworld.net",
          "sameAs": [
            "https://www.instagram.com/sushillwaddhwa/",
            "https://www.linkedin.com/in/sushillwaddhwa/"
          ]
        },
        {
          "@type": "ProfilePage",
          "@id": `${siteBaseUrl}/#profilepage`,
          "url": `${siteBaseUrl}/`,
          "name": "Sushill Waddhwa — Official Website",
          "mainEntity": {
            "@id": `${siteBaseUrl}/#person`
          }
        },
        {
          "@type": "Organization",
          "@id": `${siteBaseUrl}/#organization`,
          "name": "Platinum World Grroup",
          "founder": {
            "@id": `${siteBaseUrl}/#person`
          },
          "foundingDate": "1989",
          "url": "https://platinumworld.net",
          "email": "info@platinumworld.net",
          "description": "Global B2B company for events, wedding, celebration, and travel planners."
        }
      ]
    }
  }
};
