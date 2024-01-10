import type { ImageType } from "./image";

export function path(path: string): string {
    return `${import.meta.env.PUBLIC_BASE_PATH ?? "/Essedue"}${path}`.split("//").join("/");
}

export function toDescription(...descriptions: ImageType[]): string {
    return descriptions.map(({ alt }) => alt).join(" • ");
}
