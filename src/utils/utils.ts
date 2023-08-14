export function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
}

export function path(path: string): string {
    return `${import.meta.env.PUBLIC_BASE_PATH ?? "/Essedue"}${path}`.split("//").join("/");
}
