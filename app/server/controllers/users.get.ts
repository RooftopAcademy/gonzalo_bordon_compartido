module.exports = function usersGet(req: any, res: any) {
  if (req.params.userID) {

    return res.render('users_logued');
  }
  res.render('users');
}