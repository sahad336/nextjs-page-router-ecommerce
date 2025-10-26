import { ServiceBase } from "./service-base";

export class ProductsService extends ServiceBase {
  static async getProducts() {
    const resp = await fetch(this.getUrl("/products"), { cache: "no-store" });
    return await resp.json();
  }

  static async getProductById(id: number) {
    const resp = await fetch(this.getUrl("/products/" + id));
    return await resp.json();
  }
}
