import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';
import {RedisService} from "nestjs-redis/index";


@Injectable()
export class DatabaseService {
  public redis: Redis;

  constructor(
    private  redisService: RedisService,
  ) {
    this.redis = this.redisService.getClient();
  }
  async get(key: string): Promise<string | null> {
    return this.redis.get(key);
  }

  async set(key: string, value: string): Promise<'OK'> {
    return this.redis.set(key, value);
  }

  async setTemporary(
    key: string,
    value: string,
    timeAsSeconds: number,
  ): Promise<'OK'> {
    return this.redis.set(key, value, 'EX', timeAsSeconds);
  }

  async hgetAll(key: string): Promise<Record<string, string>> {
    return this.redis.hgetall(key);
  }

  async hget(key: string, field: string): Promise<string | null> {
    return this.redis.hget(key, field);
  }

  async hset(key: string, value: object): Promise<number> {
    return this.redis.hset(key, value);
  }
}
