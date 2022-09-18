import { CacheModule, CACHE_MANAGER, Inject, Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';

@Module({
  imports: [CacheModule.register()],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
}
