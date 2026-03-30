import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connectDB } from './config/database';

async function bootstrap() {
  await connectDB();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  console.log(`Server running on port ${process.env.PORT ?? 3000}`);
}
bootstrap();
