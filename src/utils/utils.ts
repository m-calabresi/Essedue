import type { ImageType } from "./image";

export function toDescription(...descriptions: ImageType[]): string {
    return descriptions.map(({ alt }) => alt).join(" • ");
}
