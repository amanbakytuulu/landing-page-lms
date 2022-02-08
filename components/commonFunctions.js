export function sendEvent(event) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'event': event});
}