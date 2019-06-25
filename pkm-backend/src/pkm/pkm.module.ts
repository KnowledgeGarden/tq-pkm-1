import { Module } from '@nestjs/common';
import { PKMController } from './pkm.controller';
import { PKMService } from './pkm.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PKMSchema } from './schemas/pkm.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: PKMSchema }])
  ],
  controllers: [PKMController],
  providers: [PKMService]
})
export class PKMModule { }