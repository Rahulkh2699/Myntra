import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Product from "App/Models/Product";

export default class ProductsController {
  public async index({ response }: HttpContextContract) {
    try {
      const data = await Product.all();

      return response.ok(data);
    } catch (err) {
      return response.internalServerError({ message: "Internal Server Error" });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      let payload = request.body();
      const data = await Product.create(payload);
      return response.ok(data);
    } catch (err) {
      return response.internalServerError({ message: "Internal Server Error" });
    }
  }

  public async show({ response, params }: HttpContextContract) {
    try {
      const id = params.id;
      const data = await Product.find(id);
      return data;
      return id;
    } catch (err) {
      return response.internalServerError({ message: "Internal Server Error" });
    }
  }

  public async update({ request, response, params }: HttpContextContract) {
    try {
      const id = params.id;
      let payload = request.body();
      const data = await Product.query().where("id", "=", id).update({
        product_name: payload.product_name,
      });

      return data;
      return id;
    } catch (err) {
      return response.internalServerError({ message: "Internal Server Error" });
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const id = params.id;
      const data = await Product.find(id);
      await data?.delete();
      return data;
      return id;
    } catch (err) {
      return response.internalServerError({ message: "Internal Server Error" });
    }
  }
}
