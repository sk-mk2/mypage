let pushCount = 1;
module.exports = (req, res) => {
    res.setHeader('Content-type', 'text/json');
    res.send({pushCount:pushCount++});
};
