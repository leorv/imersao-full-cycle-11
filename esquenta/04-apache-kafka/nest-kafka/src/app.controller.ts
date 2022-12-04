import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaMessage } from 'kafkajs';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get()
    getHello(): string {
        return this.appService.getHello();
    }

    @MessagePattern('matches')
    consumerMatches(@Payload() message: KafkaMessage) {
        console.log('Mensagem recebida');
        console.log(message.value.toString());
    }


}
