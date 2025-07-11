
const requireAsset = require.context('.', true, /^\.\/(\w+)\/([\w-]+)\.json$/);

/**
 * Lazy-load lang data
 *
 * @param {string} section - The section of lang data to load
 * @param {string} lang    - The language name
 * @returns {Promise<object>} - The content of a lang JSON
 */
export default function loadLocale(section, lang) {
  return import(
    /* webpackMode: "lazy" */
    /* webpackChunkName: "lang-[request]" */
    `./${section}/${lang}.json`
    );
}
