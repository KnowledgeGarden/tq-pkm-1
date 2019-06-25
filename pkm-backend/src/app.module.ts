import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PKMModule } from './pkm/pkm.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-blog', { useNewUrlParser: true }),
    PKMModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }