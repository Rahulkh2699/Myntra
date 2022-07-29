import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import user from "../../Models/user";

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    let payload = request.body();
    let data = await user.create(payload);

    return response.ok({ message: "Userr Created Succcessfully", data });
  }

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
