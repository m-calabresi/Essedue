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
    alert(import.meta.env.PUBLIC_BASE_PATH);
    alert(`${import.meta.env.PUBLIC_BASE_PATH ?? ""}${path}`);
    return `${import.meta.env.PUBLIC_BASE_PATH ?? ""}${path}`;
}
