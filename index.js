// import { Dispositivos } from './dispositivos';
const impresora = require('./dispositivos');
const escpos = require('escpos');
escpos.USB = require('escpos-usb');
const dispositivos = new impresora.Dispositivos();

dispositivos.getDevice().then((device) => {
  if (device != null) {
    var options = { encoding: "ISO-8859-15" }; //"GB18030" };
    var printer = new escpos.Printer(device, options);
    device.open(function () {
        printer
            .font('a')
            .style('b')
            .align('CT')
            .size(0, 0)
            .text("HOLA HOLITA")
            .cut()
            .close()
    });
  }
}).catch((err) => {
  console.log(err);
});