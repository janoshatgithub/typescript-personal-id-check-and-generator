var sampleApp;
(function (sampleApp) {
    var main = (function () {
        function main() {
            console.log("I'm a real spa!");
        }
        main.prototype.add = function (x, y) {
            return x + y;
        };
        return main;
    }());
    sampleApp.main = main;
})(sampleApp || (sampleApp = {}));
// Run on load
new sampleApp.main();
//# sourceMappingURL=main.js.map