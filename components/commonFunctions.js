export function sendEvent(event) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'event': event});
}

export function redirectTo(path,router) {
    return router.push({pathname: path, query: router.query});
}

export function redirectToAnchor(anchor,router) {
    return router.push({pathname: "/", hash: anchor, query: router.query});
}