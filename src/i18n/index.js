import NextI18Next from "next-i18next";
import { resolve } from "path";
import { I18nNamespace } from "../shared/constants";
import { config } from "../config";

const DEFAULT_LANGUAGE = "en";
const DEFAULT_NAMESPACE = I18nNamespace.COMMON;

const localePath = resolve("./public/i18n");

const missingKeyHandler = (_, namespace, key) =>
  config.isDevelopment &&
  // eslint-disable-next-line no-console
  console.warn(`🌐 Missing translation: ${namespace}.${key}`);

const i18n = new NextI18Next({
  defaultLanguage: DEFAULT_LANGUAGE,
  defaultNS: DEFAULT_NAMESPACE,
  detection: {
    order: ["querystring", "cookie", "header"],
  },
  fallbackLng: DEFAULT_LANGUAGE,
  fallbackNS: DEFAULT_NAMESPACE,
  localePath,
  missingKeyHandler,
  ns: Object.values(I18nNamespace),
  otherLanguages: [],
  saveMissing: true,
});

export { DEFAULT_LANGUAGE, i18n };
