import UsersAPI from "../classes/UsersAPI";

module.exports = function usersPost(req: any, res: any) {
  const idUser: number = new UsersAPI(req).validateUser();
  if (idUser) {
    return res.json({
      id: idUser,
    });
  }
  res.status(401).json({
    message: "Credenciales Inválidas",
  });
};
