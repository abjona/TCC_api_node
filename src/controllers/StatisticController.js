const Rating = require("./../models/Rating");
const Left_Hand = require("./../models/Left_Hand");
const Right_Hand = require("./../models/Right_Hand");
const ClassificationSingularity = require("./../models/ClassificationSingularity");
const { compare } = require("./../utils/CompareCharUtil");
const { generateObject }  = require('./../utils/StatisticUtil');

const getStatic = async (req, res) => {
    console.log(req.params.id);
    let statistics = [];
    let rating = await Rating.find({ user: req.params.id });
    let characters = await ClassificationSingularity.find({});
  
    let equalsObject = await compare(rating, characters);

    equalsObject.forEach((rate) => {
        let statistResponse = generateObject(rate.minutiae, rate.date);
        statistics.push(statistResponse)
    });

    statistics.forEach((ele)=>{
        for (const key in ele.characters) {
            let aux = ele.soma / 100;
            ele.characters[key] = (ele.characters[key]  / aux).toFixed(2);
        }
    })

    return res.send(statistics);
}

module.exports = {
    getStatic
}