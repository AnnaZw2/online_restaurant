import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug'],
  });
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };
  app.enableCors(corsOptions);

  const config = new DocumentBuilder()
    .setTitle('Quiz API')
    .setDescription('Quiz API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
