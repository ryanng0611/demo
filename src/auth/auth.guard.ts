import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { extractBearerToken } from './utils/extractBearerToken';
import { jwtConstants } from './utils/constants';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // retrieve token for verification through helper method
    try {
      const token = extractBearerToken(request);
      const payload = await this.jwtService.verify(token, {
        secret: jwtConstants.secret,
      });
      // request['user'] = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
