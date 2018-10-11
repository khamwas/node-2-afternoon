module.exports = {
  create: (req, res, next) => {
    req.app
      .get("db")
      .create_product([
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.img_url
      ])
      .then(response => res.status(200).json("Product Created!"));
  },
  getOne: (req, res, next) => {
    req.app
      .get("db")
      .read_product([req.params.id])
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  getAll: (req, res, next) => {
    req.app
      .get("db")
      .read_products()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).send(err));
  },
  update: (req, res, next) => {
    req.app
      .get("db")
      .update_product([req.params.id, req.body.description])
      .then(response => res.status(200).json("Update Successful!"))
      .catch(err => res.status(500).send(err));
  },
  delete: (req, res, next) => {
    req.app
      .get("db")
      .delete_product(req.params.id)
      .then(response => res.status(200).json("Delete Successful!"))
      .catch(err => res.status(500).send(err));
  }
};
