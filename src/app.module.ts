import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TODOS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
