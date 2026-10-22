export const siteBaseUrl = "https://sushillwaddhwa.vercel.app";
export const defaultOgImage = `${siteBaseUrl}/og-image.jpg`;

export const routeSeoData = {
  "/": {
    title: "Sushill Waddhwa — Global Hospitality Entrepreneur · Investor · Luxury Lifestyle",
    description: "Official website of Sushill Waddhwa: Global Hospitality Entrepreneur, Investor, and Luxury Lifestyle Personality. Founder & CMD, Platinum World Grroup (Since 1989). Building a world worth experiencing.",
    canonical: `${siteBaseUrl}/`,
    ogTitle: "Sushill Waddhwa — Global Hospitality Entrepreneur · Investor · Luxury Lifestyle",
    ogDescription: "Founder & CMD, Platinum World Grroup. Since 1989. Building a world worth experiencing through global hospitality, hotel buyouts, and curated lifestyle.",
    ogImage: defaultOgImage,
    imageAlt: "Sushill Waddhwa — Founder & CMD, Platinum World Grroup · Since 1989",
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
          "description": "Global Hospitality Entrepreneur, Investor, and Luxury Lifestyle Personality. Founder & CMD of Platinum World Grroup (Since 1989).",
          "url": siteBaseUrl,
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
          "url": siteBaseUrl,
          "description": "Global hospitality, hotel buyouts, group experiences, and luxury travel management founded by Sushill Waddhwa."
        }
      ]
    }
  },

  "/about": {
    title: "About Sushill Waddhwa — Founder & CMD, Platinum World Grroup | Since 1989",
    description: "Discover the 35+ year journey of Sushill Waddhwa: from pioneering experiential gatherings in 1989 to global luxury hotel buyouts, tourism leadership, and hospitality advisory.",
    canonical: `${siteBaseUrl}/about`,
    ogTitle: "About Sushill Waddhwa — 35+ Years in Global Hospitality",
    ogDescription: "Built on relationships. Defined by vision. The biography and leadership narrative of Sushill Waddhwa.",
    ogImage: defaultOgImage,
    imageAlt: "Sushill Waddhwa Editorial Portrait — Global Hospitality Leader",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${siteBaseUrl}/about#webpage`,
      "url": `${siteBaseUrl}/about`,
      "name": "About Sushill Waddhwa",
      "description": "Biography and career milestones of Sushill Waddhwa, Founder & CMD of Platinum World Grroup.",
      "mainEntity": {
        "@type": "Person",
        "name": "Sushill Waddhwa",
        "jobTitle": "Founder & CMD, Platinum World Grroup",
        "foundingDate": "1989",
        "url": siteBaseUrl
      }
    }
  },

  "/business": {
    title: "Business & Ventures — Sushill Waddhwa | Platinum World Grroup & Artoso",
    description: "Explore Sushill Waddhwa's core business ventures: Platinum World Grroup (hotel buyouts & group travel), Artoso Hospitality Corp., strategic investments, and Platinum World Pictures.",
    canonical: `${siteBaseUrl}/business`,
    ogTitle: "Business & Ventures — Sushill Waddhwa",
    ogDescription: "Guiding institutional hospitality enterprises, boutique hotel concepts, selective capital investments, and cinematic media initiatives.",
    ogImage: defaultOgImage,
    imageAlt: "Business Ventures of Sushill Waddhwa — Platinum World Grroup & Artoso",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${siteBaseUrl}/business#webpage`,
      "url": `${siteBaseUrl}/business`,
      "name": "Business Ventures — Sushill Waddhwa",
      "description": "The enterprise ecosystem founded and guided by Sushill Waddhwa.",
      "hasPart": [
        {
          "@type": "Organization",
          "name": "Platinum World Grroup",
          "description": "Global hospitality, hotel buyouts, group travel, and luxury logistics."
        },
        {
          "@type": "Organization",
          "name": "Artoso Hospitality Corp.",
          "description": "Boutique hotel management, lifestyle hospitality concepts, and branded residences."
        },
        {
          "@type": "Organization",
          "name": "Platinum World Pictures",
          "description": "Cinematic destination storytelling, brand films, and creative media."
        }
      ]
    }
  },

  "/hospitality": {
    title: "Hospitality Leadership — Sushill Waddhwa | Luxury Hotels & Buyouts",
    description: "Sushill Waddhwa connects luxury hotels, hotel buyouts, destination weddings, and tourism boards through decades of GM-level alliances and the WedTalks Forum.",
    canonical: `${siteBaseUrl}/hospitality`,
    ogTitle: "Hospitality Leadership — Sushill Waddhwa",
    ogDescription: "Uniting luxury hoteliers, destination tourism authorities, and premier celebration designers across five core hospitality pillars.",
    ogImage: defaultOgImage,
    imageAlt: "Global Hospitality and Hotel Buyouts — Sushill Waddhwa",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ItemPage",
      "@id": `${siteBaseUrl}/hospitality#webpage`,
      "url": `${siteBaseUrl}/hospitality`,
      "name": "Hospitality Leadership — Sushill Waddhwa",
      "description": "Decades of GM-level alliances, hotel buyouts, destination celebration tourism, and tourism board advisory."
    }
  },

  "/lifestyle": {
    title: "Curated Lifestyle — Sushill Waddhwa | Travel, Culture & Wellbeing",
    description: "A personal editorial perspective by Sushill Waddhwa on intentional travel, iconic hotels, functional vitality, tailored style, and enduring cultural heritage.",
    canonical: `${siteBaseUrl}/lifestyle`,
    ogTitle: "Curated Lifestyle — Sushill Waddhwa",
    ogDescription: "Personal, grounded reflections across intentional travel, vitality, tailored elegance, and cultural heritage.",
    ogImage: defaultOgImage,
    imageAlt: "Curated Luxury Lifestyle & Intentional Living — Sushill Waddhwa",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${siteBaseUrl}/lifestyle#webpage`,
      "url": `${siteBaseUrl}/lifestyle`,
      "name": "Curated Lifestyle — Sushill Waddhwa",
      "description": "Refined editorial chapters on travel, hotels, fitness, style, culture, and wellbeing."
    }
  },

  "/media": {
    title: "Media & Keynotes — Sushill Waddhwa | Speaking, WedTalks & Screen Storytelling",
    description: "Press, keynote speaking, WedTalks conversations, destination films via Platinum World Pictures, and next-generation digital storytelling explored by Sushill Waddhwa.",
    canonical: `${siteBaseUrl}/media`,
    ogTitle: "Media & Keynotes — Sushill Waddhwa",
    ogDescription: "Industry keynote addresses, WedTalks forum dialogues, cinematic brand films, and digital storytelling.",
    ogImage: defaultOgImage,
    imageAlt: "Media, Speaking and Screen Storytelling — Sushill Waddhwa",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${siteBaseUrl}/media#webpage`,
      "url": `${siteBaseUrl}/media`,
      "name": "Media & Thought Leadership — Sushill Waddhwa",
      "description": "Keynote speaking, industry dialogues, cinematic destination media, and digital avatars."
    }
  },

  "/collaborate": {
    title: "Selective Collaborations — Sushill Waddhwa | Luxury Brand Partnerships",
    description: "Sushill Waddhwa selectively collaborates with luxury, hospitality, travel and lifestyle brands on destination campaigns, editorial content, brand films, and curated experiences.",
    canonical: `${siteBaseUrl}/collaborate`,
    ogTitle: "Selective Collaborations — Sushill Waddhwa",
    ogDescription: "Partnering with luxury hotels, tourism boards, automotive, horology, and lifestyle brands on high-impact initiatives.",
    ogImage: defaultOgImage,
    imageAlt: "Brand Partnerships & Collaborations — Sushill Waddhwa",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${siteBaseUrl}/collaborate#webpage`,
      "url": `${siteBaseUrl}/collaborate`,
      "name": "Collaborations with Sushill Waddhwa",
      "description": "Engagement models and partnership categories across luxury, travel, and hospitality."
    }
  },

  "/contact": {
    title: "Contact Executive Office — Sushill Waddhwa | Inquiries & Strategic Dialogue",
    description: "Connect directly with the executive office of Sushill Waddhwa for business inquiries, hospitality partnerships, speaking engagements, and brand collaborations.",
    canonical: `${siteBaseUrl}/contact`,
    ogTitle: "Contact Executive Office — Sushill Waddhwa",
    ogDescription: "Direct executive desk for business inquiries, hospitality partnerships, speaking, and brand collaborations.",
    ogImage: defaultOgImage,
    imageAlt: "Contact Executive Office of Sushill Waddhwa",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "@id": `${siteBaseUrl}/contact#webpage`,
      "url": `${siteBaseUrl}/contact`,
      "name": "Contact Sushill Waddhwa",
      "description": "Executive communications channel for Sushill Waddhwa.",
      "mainEntity": {
        "@type": "Person",
        "name": "Sushill Waddhwa",
        "email": "office@sushillwaddhwa.com"
      }
    }
  }
};
