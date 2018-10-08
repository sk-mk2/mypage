let pushCount = 1;
module.exports = (req, res) => {
    res.setHeader('Cddontent-type', 'text/json');
    res.send({pushCount:pushCount++});
};
