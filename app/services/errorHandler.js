const error = {
  _404: (req, res) => {
    return res.status(404).send("error 404");
  },
  _500: (err, req, res) => {
    return res.status(500).send(err.message);
  },
};

export { error };
