import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { PlanService } from './plan.service';
import { MailService } from 'src/mail/mail.service';

@Controller('plans')
export class PlanController {
  constructor(
    private readonly planService: PlanService,
    private readonly mailService: MailService,
  ) {}

  @Get()
  async findAll() {
    return this.planService.findAll();
  }
  @Post('send-email')
  async sendEmail(@Body() body: string) {
    console.log(body);
    return this.mailService.sendWelcomeEmail(body);
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    console.log(id);
    return this.planService.findById(id);
  }

  @Post()
  async create(@Body() body) {
    return this.planService.createPlan(body);
  }

  @Patch()
  async update(@Body() body) {
    return this.planService.updatePlan(body.id, body);
  }
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.planService.deletePlan(id);
  }
}
