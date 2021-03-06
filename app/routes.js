module.exports = function (app) {
    app.get('/', function (req, res) {
        res.send('this is the home page');
    })

    app.get('/top', function (req, res) {
        res.send('this is the top page');
    })

    app.get('/results', function (req, res) {
        res.send('this is the results page');
    })

    app.get('/api/results', function (req, res) {
        res.json({message: "This is the API page"});
    })
}