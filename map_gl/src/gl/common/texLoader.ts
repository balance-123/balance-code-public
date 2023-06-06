import { LinearFilter, Texture, TextureLoader } from "three";

export class TexLoader extends TextureLoader {
  private static Instance: TexLoader;
  private constructor() {
    super();
  }

  static getInstance() {
    if (!TexLoader.Instance) {
      TexLoader.Instance = new TexLoader();
    }
    return TexLoader.Instance;
  }

  async customLoad(src: string): Promise<Texture> {
    const t = await this.loadAsync(src);
    t.magFilter = LinearFilter;
    t.minFilter = LinearFilter;

    return t;
  }
}
