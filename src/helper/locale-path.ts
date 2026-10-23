import i18nConfig from '../../i18nConfig';

export function localePath(locale: string, path: string) {
  const language = (locale || i18nConfig.defaultLocale).split('-')[0];
  const hashIndex = path.indexOf('#');
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  const pathname = (hashIndex >= 0 ? path.slice(0, hashIndex) : path) || '/';
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const prefix =
    language === i18nConfig.defaultLocale && !i18nConfig.prefixDefault
      ? ''
      : `/${language}`;
  const base = normalized === '/' ? prefix || '/' : `${prefix}${normalized}`;

  return `${base}${hash}`;
}
