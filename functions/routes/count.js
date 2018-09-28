let pushCount = 1;
module.exports = (req, res) => {
    res.send(`ボタンを押した回数: ${pushCount++}`);
};
