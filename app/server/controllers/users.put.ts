import UsersAPI from "../classes/UsersAPI";

module.exports = function usersPost(req: any, res: any) {
  const idUser: number | null = new UsersAPI(req).setUser();
  if (idUser) {
    return res.json({
      id: idUser,
    });
  }
  res.status(401).send({
    message: "Usuario Existente",
  });
};
