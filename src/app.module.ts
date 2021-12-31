import { Module } from '@nestjs/common';
import { RocketsModule } from './rockets/rockets.module';

@Module({
  imports: [RocketsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
