import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller('api/auth/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('signin')
  pingServiceA(@Body() body) {
    console.log(body);
    return this.appService.pingServiceA(body).catch(reason => {
      console.log(reason);
      
    return reason;
  });
  }

  @Get('/ping-b')
  pingServiceB() {
    return this.appService.pingServiceB();
  }


}
