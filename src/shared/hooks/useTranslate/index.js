import { i18n } from 'src/i18n';

const useTranslate = (namespace) => {
  const { useTranslation } = i18n;
  const { t } = useTranslation(namespace);

  return t;
};

export { useTranslate };
