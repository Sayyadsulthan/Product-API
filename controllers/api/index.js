const Product = require("../../model/Product");

module.exports.getProduct = async function (req, res) {
  const products = await Product.find();

  const allProducts = products.map((product) => {
    return {
      name: product.name,
      price: product.price,
      qty: product.qty,
      category: product.category,
      _id: product._id,
    };
  });
  return res.status(200).json({
    message: "The all Products",
    description:
      "to create a product use post method and attributes are : productName, category, price, qty",
    data: { allProducts },
  });
};

module.exports.CreateProduct = async (req, res) => {
  if (
    (!req.body || !req.body.name,
    !req.body.category || !req.body.price || !req.body.qty)
  ) {
    return res.status(500).json({
      message: "please fill the product details you need to create",
    });
  }

  const product = await Product.create(req.body);

  if (product) {
    return res.status(200).json({
      message: "product created successfully",
      data: {
        product: {
          name: product.name,
          category: product.category,
          price: product.price,
          qty: product.qty,
          _id: product._id,
        },
      },
    });
  }

  console.log(product);
  return res.status(400).json({
    message: "Internal server Error",
  });
};

module.exports.deleteProduct = async (req, res) => {
  try {
    console.log(req.params);
    const productId = req.params.id;
    await Product.deleteOne({ _id: productId });
    return res.status(200).json({
      message: "product deleted Successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (req.body.category || req.body.price || req.body.qty || req.body.name) {
      const product = await Product.findById(productId);

      if (product) {
        await product.updateOne(req.body);

        const updatedProduct = await Product.findOne({ _id: productId });
        return res.status(200).json({
          message: "product successfully updated",
          data: {
            product: {
              name: updatedProduct.name,
              category: updatedProduct.category,
              price: updatedProduct.price,
              qty: updatedProduct.qty,
              _id: updatedProduct._id,
            },
          },
        });
      }
    } else {
      return res.status(201).json({
        message: "please provide the required data to update the product",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal server Error",
    });
  }
};
