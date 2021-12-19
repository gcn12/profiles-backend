import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser() {
    return this.appService.getUser();
  }

  @Get('/data')
  async getData() {
    return this.appService.getData();
  }

  @Get('/experience')
  async getExperience() {
    return this.appService.getExperience();
  }

  @Get('/tab/:tab')
  async getTab(@Param() params) {
    const tab = params.tab;
    // const authorId = params.authorId;
    return this.appService.getTab(tab);
  }

  @Post()
  async addData(@Body() body) {
    // const { name, email } = body;
    return this.appService.createUser();
  }

  @Post('/blog')
  async addBlog(@Body() body) {
    return this.appService.createBlog();
  }

  @Post('/experience')
  async addExperience(@Body() body) {
    return this.appService.createExperience();
  }

  @Post('/portfolio')
  async addPortfolio(@Body() body) {
    return this.appService.createPortfolio();
  }

  @Delete()
  async deleteData() {
    return this.appService.deleteData();
  }
}
