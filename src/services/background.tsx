import { CSSProperties } from "react";

export const pageSpacingsAndBackground = (background?: string, color?:string, isMobile?: boolean): CSSProperties => {
    const height: string = isMobile && color !== 'noNeed' ? "auto" : "100vh";
    const obj: CSSProperties = {
        width:"100vw",
        height:height,
        backgroundColor: color,
    };
    return { backgroundImage: background,...obj } as CSSProperties;
};
