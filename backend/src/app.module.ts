// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PlanController } from './plan/plan.controller';
import { PlanService } from './plan/plan.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from './mail/mail.service';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import * as path from 'path';

const templateDir = path.resolve(__dirname, '../src/templates/');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'commerce',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    ConfigModule.forRoot(),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        transport: {
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
            user: 'email',
            pass: 'password',
          },
        },
        template: {
          dir: templateDir, // Caminho para o diretório dos templates
          adapter: new HandlebarsAdapter(), // Usando o adaptador Handlebars
          options: {
            strict: true, // Opções adicionais do Handlebars, se necessário
          },
        },
        defaults: {
          from: 'no-reply@gmail.com',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [UserController, PlanController],
  providers: [UserService, PlanService, MailService],
})
export class AppModule {}
