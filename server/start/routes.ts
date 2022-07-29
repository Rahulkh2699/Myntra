import Route from "@ioc:Adonis/Core/Route";

Route.resource("product", "ProductsController").middleware({
  show: ["auth"],
  update: ["auth"],
  destroy: ["auth"],
  index: ["auth"],
});

Route.resource("user", "UsersController");
