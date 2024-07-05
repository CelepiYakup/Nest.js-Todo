import { Inject, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { Redis } from "ioredis";



@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
        }),
        RedisModule.forRootAsync({
            useFactory: (configService: ConfigService) => ({
                host: configService.get('REDIS_HOST'),
                port: configService.get('REDIS_PORT'),
                db: configService.get('REDIS_NAME'),
                password: configService.get('REDIS_PASSWORD'),
            }),
            inject: [ConfigService],
        }),
    ],

    providers: [DatabaseService],
    exports: [DatabaseService],
})
export class DatabaseModule {}