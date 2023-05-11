const { defaultPage } = require("./controllers/homeController");

const routes = { default: defaultPage};

function registerRoute(method, path, handler){
    if(routes[path] == undefined){
        routes[path] = {};
    }
    routes[path][method] = handler;
}

function match(req, res){
    console.log(routes)
    const url = new URL(req.url, `http://${req.headers.host}`);

    let handler;
    const actions = routes[url.pathname];
    if(actions != undefined){
        handler = actions[req.method];
    }

    if(typeof handler == 'function'){
        handler(req, res);
    } else {
        routes.default(req, res)
    }
}

module.exports = {
    registerRoute,
    get: registerRoute.bind(null, 'GET'),
    post: registerRoute.bind(null, 'POST'),
    match
}