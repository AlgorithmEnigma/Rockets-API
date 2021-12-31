import { Module } from '@nestjs/common';
import { RocketsService } from './rockets.service';
import { RocketsController } from './rockets.controller';

@Module({
  providers: [RocketsService],
  controllers: [RocketsController],
})
export class RocketsModule {}
