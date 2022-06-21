import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bumsoo\'s Server homepages';
  }
  getTest(): string {
    return 'Bumsoo\'s Server testpages';
  }
}
