/**
 * @param {string[]} classes
 * @returns {string}
 */
export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

/**
 *
 * @param {string} path
 * @returns
 */
export function path(path) {
    return `${import.meta.env.PUBLIC_BASE_PATH}${path}`;
}
