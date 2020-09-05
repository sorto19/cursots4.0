var Rectangulo = /** @class */ (function () {
    function Rectangulo() {
    }
    Rectangulo.prototype.area = function () {
        return this.ancho * this.alto;
    };
    return Rectangulo;
}());
var r1 = new Rectangulo();
var r2 = new Rectangulo();
r1.area();
r2.area();
