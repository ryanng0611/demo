import { BadRequestException } from '@nestjs/common';
import { Request } from 'express';

export function extractBearerToken(request: Request): string | undefined {
  const authorizationHeader = request.headers.authorization;
  if (!authorizationHeader) {
    throw new BadRequestException('Authorization header is missing');
  }

  const parsedHeader = authorizationHeader.trim().split(' ');
  if (parsedHeader.length !== 2 || parsedHeader[0].toLowerCase() !== 'bearer') {
    throw new BadRequestException('Invalid authorization header format');
  }

  const token = parsedHeader[1];
  return token;
}
