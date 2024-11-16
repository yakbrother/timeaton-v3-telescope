import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.timeaton.dev/", // replace this with your deployed domain
  author: "Tim Eaton",
  profile: "https://timeaton.dev/",
  desc: "A minimal, Astro theme based on Astro Peper.",
  title: "Tim Eaton",
  ogImage: "timeaton-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  showArchives: true,
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/yakbrother/timeaton-v3-telescope",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:tim@tim@timeaton.dev",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
