const http = require('http');
const { homePage, aboutPage } = require('./controllers/homeController');
const router = require('./router');
const { catalogPage, createPage, createItem } = require('./controllers/catalogController');

router.get('/', homePage);
router.get('/about', aboutPage);
router.get('/catalog', catalogPage);
router.get('/create', createPage);
router.post('/create', createItem)


const server = http.createServer(router.match);

server.listen(3000);



