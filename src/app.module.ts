import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImpresoraController } from './impresora/impresora.controller';

@Module({
  imports: [],
  controllers: [AppController, ImpresoraController],
  providers: [AppService],
})
export class AppModule {}
