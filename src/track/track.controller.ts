import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackService } from './track.service';
import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('/tracks')
export class Trackcontroller {
  constructor(private trackService: TrackService) {}

  @Post()
  create(@Body() dto: CreateTrackDto) {
    return this.trackService.create(dto);
  }

  @Get()
  getAll() {
    return this.trackService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.trackService.getOne(id);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.trackService.delete(id);
  }

  @Post('/comment')
  addComment(@Body() dto: CreateCommentDto) {
    return this.trackService.addComment(dto);
  }
}
