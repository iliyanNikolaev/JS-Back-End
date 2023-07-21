const routes = {};

const register = (method, path, handler) => {
    if (routes[path] == undefined) {
        routes[path] = {};
    }

    routes[path][method] = handler;
}

const match = (req, res) => {
    // const url = new URL(req.url, `http://${req.headers.host}`);

    // const path = url.pathname;

    let handler;
    const actions = routes[req.url];

    if (actions != undefined) {
        handler = actions[req.method];
    }

    if (typeof handler == 'function') {
        handler(req, res);
    } else {
        routes['default']['GET'](req, res);
    }

    res.end();
}

module.exports = {
    get: register.bind(null, 'GET'),
    post: register.bind(null, 'POST'),
    match
}

