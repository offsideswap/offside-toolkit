import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.offsideswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://offsideswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.offsideswap.finance/contact-us/telegram",
      },
      {
        label: "ROTO",
        href: "https://docs.offsideswap.finance/tokenomics/roto",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://offsideswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.offsideswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.offsideswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.offsideswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/offsideswap",
      },
      {
        label: "Documentation",
        href: "https://docs.offsideswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@offsideswap-1/s/offsideswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.offsideswap.finance/help/faq#is-offsideswap-safe-has-offsideswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.offsideswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/offsideswap",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/offsideswap",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/OffsideSwapIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/OffsideSwap_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/OffsideSwapVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/offsideswap_ita",
      },
      {
        label: "русский",
        href: "https://t.me/offsideswap_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/offsideswapturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/OffsideSwapPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/OffsideswapEs",
      },
      {
        label: "日本語",
        href: "https://t.me/offsideswapjp",
      },
      {
        label: "Français",
        href: "https://t.me/offsideswapfr",
      },
      {
        label: "Datch",
        href: "https://t.me/OffsideSwap_DE",
      },
      {
        label: "Filipino",
        href: "https://t.me/Offsideswap_Ph",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/OffsideSwapGeorgia",
      },
      {
        label: "Announcements",
        href: "https://t.me/OffsideSwapAnn",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://reddit.com/r/offsideswap",
  },
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/offsideswap_official",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/offsideswap/",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/offsideswap",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
