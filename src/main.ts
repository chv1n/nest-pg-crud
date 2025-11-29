import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // ลบ field แปลกๆ ออก
      forbidNonWhitelisted: true, // ถ้ามี field ที่ไม่อยู่ใน DTO → error
      transform: true,            // แปลงข้อมูลตาม type ของ DTO
      transformOptions: {
        enableImplicitConversion: false, // ❗ ห้ามแปลง number → string อัตโนมัติ
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
