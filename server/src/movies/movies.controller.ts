import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import {Movie} from "./entity/recados.entity";

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}
  @Get('all')
  findAll(@Query() pagination: any): string[] {
    const { page = 1, size = 20 } = pagination;
    return this.movieService.searchAll(page, size);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Movie {
    return this.movieService.searchOne(id);
  }

  @Post()
  create(@Body() movie: object) {
    return this.movieService.create(movie);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() movie: object) {
    return this.movieService.update(id, movie);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.movieService.remove(id);
  }
}
