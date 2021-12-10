import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'config.env',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    TrackModule,
  ],
})
export class AppModule {}
