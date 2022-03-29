"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Impresora = void 0;
const dispositivos_1 = require("../dispositivos");
const escpos = require('escpos');
escpos.USB = require('escpos-usb');
const dispositivos = new dispositivos_1.Dispositivos();
class Impresora {
    imprimir() {
        dispositivos.getDevice().then((device) => {
            if (device != null) {
                var options = { encoding: "ISO-8859-15" };
                var printer = new escpos.Printer(device, options);
                device.open(function () {
                    printer
                        .font('a')
                        .style('b')
                        .align('CT')
                        .size(0, 0)
                        .text("HOLA HOLITA")
                        .cut()
                        .close();
                });
            }
        }).catch((err) => {
            console.log(err);
        });
    }
}
exports.Impresora = Impresora;
//# sourceMappingURL=impresora.js.map