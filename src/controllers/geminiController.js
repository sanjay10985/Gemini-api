export const getPropmtResult = (req, res, next) => {
  //   console.log(res);
  const data = req.data;
  console.log(data);
  res.send(data);
  //   res.send(req);
};
