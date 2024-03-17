"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user/user.entity");
const user_controller_1 = require("./user/user.controller");
const user_service_1 = require("./user/user.service");
const plan_controller_1 = require("./plan/plan.controller");
const plan_service_1 = require("./plan/plan.service");
const config_1 = require("@nestjs/config");
const mailer_1 = require("@nestjs-modules/mailer");
const mail_service_1 = require("./mail/mail.service");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const path = require("path");
const templateDir = path.resolve(__dirname, '../src/templates/');
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mariadb',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: '123456',
                database: 'commerce',
                entities: [user_entity_1.User],
                synchronize: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            config_1.ConfigModule.forRoot(),
            mailer_1.MailerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    transport: {
                        host: 'smtp.gmail.com',
                        port: 587,
                        auth: {
                            user: 'piripoexperience@gmail.com',
                            pass: 'grao fsft sonj edwz',
                        },
                    },
                    template: {
                        dir: templateDir,
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                        options: {
                            strict: true,
                        },
                    },
                    defaults: {
                        from: 'no-reply@gmail.com',
                    },
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        controllers: [user_controller_1.UserController, plan_controller_1.PlanController],
        providers: [user_service_1.UserService, plan_service_1.PlanService, mail_service_1.MailService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map