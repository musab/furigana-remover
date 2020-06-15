javascript: (function () {
    Array.prototype.slice
        .call(document.getElementsByTagName("rt"))
        .forEach(function (item) {
            item.remove();
        });
})();
