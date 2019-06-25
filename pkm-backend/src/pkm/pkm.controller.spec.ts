import { Test, TestingModule } from '@nestjs/testing';
import { PKMController } from './pkm.controller';

describe('PKM Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PKMController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: PKMController = module.get<PKMController>(PKMController);
    expect(controller).toBeDefined();
  });
});
