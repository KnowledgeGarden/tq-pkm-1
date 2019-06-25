import { Test, TestingModule } from '@nestjs/testing';
import { BlogService as PKMService } from './pkm.service';

describe('BlogService', () => {
  let service: PKMService;
  
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PKMService],
    }).compile();
    service = module.get<PKMService>(PKMService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
