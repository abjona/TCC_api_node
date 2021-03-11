const Rating = require("./../models/Rating");
const Left_Hand = require("./../models/Left_Hand");
const Right_Hand = require("./../models/Right_Hand");
const ClassificationSingularity = require("./../models/ClassificationSingularity");
const { compare } = require("./../utils/CompareCharUtil");
const axios = require("axios").default;

const jwt = require("jsonwebtoken");
const fs = require("fs");

const store = async (req, res) => {
  const r_thumb = req.files[0].filename;
  const r_index = req.files[1].filename;
  const r_medium = req.files[2].filename;
  const r_ring = req.files[3].filename;
  const r_minimun = req.files[4].filename;

  const l_thumb = req.files[5].filename;
  const l_index = req.files[6].filename;
  const l_medium = req.files[7].filename;
  const l_ring = req.files[8].filename;
  const l_minimun = req.files[9].filename;

  let content = {
    r_hand: [
      {
        fing: "r_thumb",
        image: r_thumb,
      },
      {
        fing: "r_index",
        image: r_index,
      },
      {
        fing: "r_medium",
        image: r_medium,
      },
      {
        fing: "r_ring",
        image: r_ring,
      },
      {
        fing: "r_minimun",
        image: r_minimun,
      },
    ],
    l_hand: [
      {
        fing: "l_thumb",
        image: l_thumb,
      },
      {
        fing: "l_index",
        image: l_index,
      },
      {
        fing: "l_medium",
        image: l_medium,
      },
      {
        fing: "l_ring",
        image: l_ring,
      },
      {
        fing: "l_minimun",
        image: l_minimun,
      },
    ],
  };

  let teste = await axios.post('http://localhost:5000/classification', content);

  let r_hand = await Right_Hand.create({
    thumb: r_thumb,
    index: r_index,
    medium: r_medium,
    ring: r_ring,
    minimun: r_minimun,
  });

  let l_hand = await Left_Hand.create({
    thumb: l_thumb,
    index: l_index,
    medium: l_medium,
    ring: l_ring,
    minimun: l_minimun,
  });

  let rating = await Rating.create({
    right_hand: r_hand._id,
    left_hand: l_hand._id,
    user: req.params.id,
    date: new Date(),
    minutiae: teste.data,
    status: 1,
  });

  if (rating) return res.send(rating);
  else {
    return res.send({ message: "Erro!", error: true });
  }
};

const getRating = async (req, res) => {
  console.log(req.params.id);

  let rating = await Rating.find({ user: req.params.id });
  let characters = await ClassificationSingularity.find({});

  let equalsObject = await compare(rating, characters);

  console.log(equalsObject);
  return res.send(equalsObject);
};

const delRating = async (req, res) => {
  let rating = await Rating.remove({ _id: req.params.id });
  if (rating) {
    return res.send({ message: "deleted", error: false });
  } else {
    return res.send({ message: "not deleted", error: true });
  }
};

const generatePdf = async (req, res) => {
  return;
};

module.exports = {
  store,
  getRating,
  delRating,
  generatePdf,
};
