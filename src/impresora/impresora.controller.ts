import { Body, Controller, Post } from '@nestjs/common';
import { Impresora } from './impresora';

@Controller('impresora')
export class ImpresoraController {
    @Post('imprime')
    imprime(@Body() params) {
        const impresoraInstance = new Impresora();
        impresoraInstance.imprimir();
    }
}
