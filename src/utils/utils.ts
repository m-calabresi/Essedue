import type { ImageType } from "@/utils/image";

export function toDescription(...descriptions: ImageType[]): string {
    return descriptions.map(({ alt }) => alt).join(" • ");
}
