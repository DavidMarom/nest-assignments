import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class StartupService implements OnModuleInit {
  onModuleInit() {
    console.log('Server started – startup logic running');
    this.run();
  }

  private run() {
    // your startup logic here
  }
}
