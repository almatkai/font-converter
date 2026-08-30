declare module "fonteditor-core" {
  export type FontType = string;
  export type Name = number;
  export interface FontEditor {
    write(options: { type: string; hinting?: boolean; kerning?: boolean }): ArrayBuffer | Uint8Array;
  }
  export function createFont(buffer: Buffer, options: { type: string; hinting?: boolean; kerning?: boolean }): FontEditor;
  export function read(buffer: Buffer, options?: object): FontEditor;
  export const TTF: any;
}
declare module "fontverter" {
  const fontverter: {
    convert(buffer: Buffer, from: string, to?: string): Promise<Buffer>;
  };
  export default fontverter;
}
declare module "opentype.js" {
  const opentype: {
    load(path: string): Promise<{
      names: Record<string, { en: string }>;
      unitsPerEm: number;
      ascender: number;
      descender: number;
      getPath(text: string, x: number, y: number, size: number): { toPathData(): string; toSVG(): string };
      toArrayBuffer(): ArrayBuffer;
    }>;
    parse(buffer: ArrayBuffer): {
      names: Record<string, { en: string }>;
      getPath(text: string, x: number, y: number, size: number): { toPathData(): string; toSVG(): string };
    };
  };
  export default opentype;
}
