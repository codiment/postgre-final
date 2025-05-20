import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { LoggedInUserData } from 'src/interfaces/authenticated-user.inferface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'qwerty',
    });
  }

  async validate(payload: LoggedInUserData) {
    return {
      id: payload.id,
      email: payload.email,
      type: payload.type,
      orgs: payload.orgs,
    };
  }
}