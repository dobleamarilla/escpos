const escpos = require('escpos');
const os = require('os');
escpos.USB = require('escpos-usb');

const tipoImpresora = 'USB';

class Dispositivos {
    async getDevice() {
        if(os.platform() === 'linux') {
            console.log("Soy linux");
        } else if(os.platform() === 'win32') {
            try {
                if (tipoImpresora == 'USB') {
                    const device = new escpos.USB();
                    return device;
                } else if (tipoImpresora == 'SERIE') {
                    return null;
                } else {
                    console.log("Parametros de impresora no configurados");
                    return null;
                }
            } catch(err) {
                console.log(err.message);
                return null;
            }
        }
    }
}

exports.Dispositivos = Dispositivos;