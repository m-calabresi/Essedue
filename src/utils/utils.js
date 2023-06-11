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
    console.log("import.meta.env", import.meta.env);
    console.log("import.meta.env.PUBLIC_BASE_PATH", import.meta.env.PUBLIC_BASE_PATH);
    console.log("process.env", process.env);
    return `${import.meta.env.PUBLIC_BASE_PATH}${path}`;
}
