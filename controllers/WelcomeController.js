const welcome = async (req, res) => {
    try {
        console.log("Merhaba");
        res.json("welcome");
    }catch(error) {
        res.json(error);
    }
}


export default {
    welcome
};