import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Movie } from './entity/recados.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [
    {
      id: 1,
      date: new Date(),
      name: 'O Auto da Compadecida',
      plot: 'As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.\n',
      image:
        'https://media.fstatic.com/ALGSj5XrOeLsxOy1P2q4dbGPHF0=/322x478/smart/filters:format(webp)/media/movies/covers/2019/12/2019-700-o-auto-da-compadecida-tv-globo-poster.jpg',
      rating: 9.2,
    },
  ];

  searchAll(page: number, size: number): string[] {
    console.log(page, size);
    return ['O Grande Hotel Budapeste', 'O Auto da Compadecida'];
  }

  searchOne(id: number): Movie {
    console.log(id);
    if (!id && id !== 0) {
      throw new HttpException(
        'É preciso fornecer um id para buscar um filme',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const movie = this.movies.find((movie) => movie.id === Number(id));

    if (!movie) {
      throw new NotFoundException('Filme não encontrado!');
    }

    console.log(movie);

    return movie;
  }

  create(movie: object) {
    console.log(movie);
    return { success: true, message: 'Filme criado' };
  }

  update(id: number, movie: object) {
    return {
      success: true,
      message: 'Filme atualizado',
      dados: { id, ...movie },
    };
  }

  remove(id: number) {
    console.log(id);
    return { success: true, message: 'Filme removido com sucesso' };
  }
}
