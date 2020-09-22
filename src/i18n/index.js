import NextI18Next from "next-i18next";
import { resolve } from "path";

const DEFAULT_LANGUAGE = "en";
const DEFAULT_NAMESPACE = "common";

const localePath = resolve("./public/i18n");

const i18n = new NextI18Next({
  defaultLanguage: DEFAULT_LANGUAGE,
  defaultNS: DEFAULT_NAMESPACE,
  detection: {
    order: ["querystring", "cookie", "header"],
  },
  fallbackLng: DEFAULT_LANGUAGE,
  fallbackNS: DEFAULT_NAMESPACE,
  localePath,
  ns: [DEFAULT_NAMESPACE, "categories"],
  otherLanguages: [],
});

export { DEFAULT_LANGUAGE, i18n };
