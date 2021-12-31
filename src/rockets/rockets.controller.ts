import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Delete,
} from '@nestjs/common';
import { RocketsService } from './rockets.service';
import { CreateRocketDTO } from './dto/rockets.dto';

@Controller('rockets')
export class RocketsController {
  constructor(private rocketsService: RocketsService) {}

  @Get()
  async getRockets() {
    const rockets = await this.rocketsService.getRockets();
    return rockets;
  }

  @Get(':rocketID')
  async getRocket(@Param('rocketID') rocketID) {
    const rocket = await this.rocketsService.getRocket(rocketID);
    return rocket;
  }

  @Post()
  async createRocket(@Body() createRocketDTO: CreateRocketDTO) {
    const rocket = await this.rocketsService.createRocket(createRocketDTO);
    return rocket;
  }

  @Delete()
  async deleteBook(@Query() query) {
    const rocket = await this.rocketsService.deleteRocket(query.rocketID);
    return rocket;
  }
}
