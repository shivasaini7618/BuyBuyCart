const User = require("../models/User");
const QRCode = require("qrcode");

// Create user & generate QR code
exports.createUser = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;

    // Unique link ID
    const slug = Date.now().toString();

    const user = await User.create({
      name,
      email,
      phone,
      address,
      slug
    });

    // QR Code link
    const qrURL = `${process.env.FRONTEND_URL}/user/${slug}`;

    const qrCode = await QRCode.toDataURL(qrURL);

    res.json({
      success: true,
      qrCode,
      qrURL,
      user
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Fetch user details
exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ slug: req.params.slug });

    if (!user)
      return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
