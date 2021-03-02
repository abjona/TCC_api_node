const ClassificationSingularity = require('./../models/ClassificationSingularity');

const store = async (req, res) => {

    const content = req.body;
    
    let character = await ClassificationSingularity.create({
        deltaQtd: content.delta,
        coreQtd: content.core,
        description: content.classe,
        characters: content.list
    });

    if(character){
         return res.send({ message: 'caracteristica inserida', error: false })
    }

    else{
        return res.send({ message: 'erro ao inserir', error: true })
    }
};

const del = async (req, res) => {
    let character = await ClassificationSingularity.remove({ _id: req.params.id })
    if(character){
        return res.send({ message: 'deleted', error: false });
    }else{
        return res.send({ message: 'not deleted', error: true });
    }

}

const getCharacters = async(req, res) => {
    let characters = await ClassificationSingularity.find({});
    console.log(characters);
    return res.send(characters);
}

module.exports = {
    store,
    del,
    getCharacters
}