"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Impresora = void 0;
const dispositivos_1 = require("../dispositivos");
const escpos = require('escpos');
escpos.USB = require('escpos-usb');
const dispositivos = new dispositivos_1.Dispositivos();
const test = `
{C:27}{C:97}{C:0}\n
!IJoan Cabre Saborit\n
!ANIF:39824549A\n
Pere III, 14 - 43850 Cambrils\n
TEL:977361557\n
FAX:977363425\n
!9!9   ALBARA ENTREGA\n
BAR LA  VIA\n
\n";
!BNIF          : B55696355\n
Data         : Dimarts 29-03-2022\n
Adre‡a       : SEGRE,2\n
CP           : 43850\n
Tlf          : \n
Num albar…   : 15744\n
!B!B\n
Article                            TORNAT     Servit\n
!A________________________________________________________\n
!BBARRA 1/4                                       15\n
CROISSANT GRAN                                   3\n
________________________________________________________\n
\n
VB\n
\n
\n\n\n{C:29}V{C:0}
`;
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
                        .text(test)
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