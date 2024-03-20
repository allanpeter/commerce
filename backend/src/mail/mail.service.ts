import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendWelcomeEmail(body: any) {
    const sentEmail = await this.mailerService.sendMail({
      to: body.email,
      subject: 'Parabéns pela aquisicao do Plano!',
      template: 'parabens',
      context: {
        name: body.name,
      },
    });
    console.log(sentEmail);
  }
}
