const http = require('http');
const layout = require('./util');
const homePage = require('./controllers/homePage');
const aboutPage = require('./controllers/aboutPage');
const catalogPage = require('./controllers/catalogPage');
const defaultPage = require('./controllers/defaultPage');
const { createPage, createItem } = require('./controllers/createPage');
const router = require('./router');

router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/catalog', catalogPage);
router.get('default', defaultPage);
router.get('/create', createPage);
router.post('/create', createItem);

const server = http.createServer((req, res) => {
    router.match(req, res);
});

server.listen(3000);
