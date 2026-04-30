import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000, () => {
    console.log(
      `Application is running ${process.env.NODE_ENV} on: ${process.env.PORT}`,
    );
  });
}
bootstrap();
