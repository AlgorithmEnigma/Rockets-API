import { Injectable, HttpException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { ROCKETS } from '../mocks/rockets.mocks';
import { CreateRocketDTO } from './dto/rockets.dto';

@Injectable()
export class RocketsService {
  rockets = ROCKETS;

  getRockets(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.rockets);
    });
  }
  getRocket(rocketID): Promise<any> {
    const id: string = rocketID;
    return new Promise((resolve) => {
      const rocket = this.rockets.find((rocket) => rocket.id === id);
      if (!rocket) {
        throw new HttpException('Rocket does not exist!', 404);
      }
      resolve(rocket);
    });
  }

  createRocket(createRocketDTO: CreateRocketDTO): Promise<any> {
    return new Promise((resolve) => {
      const rocket = {
        id: uuid(),
        ...createRocketDTO,
      };
      this.rockets.push(rocket);
      resolve(this.rockets);
    });
  }

  deleteRocket(rocketID): Promise<any> {
    const id: string = rocketID;
    return new Promise((resolve) => {
      const index = this.rockets.findIndex((rocket) => rocket.id === id);
      if (index === -1) {
        throw new HttpException('Rocket does not exist!', 404);
      }
      this.rockets.splice(index, 1);
      resolve(this.rockets);
    });
  }
}
