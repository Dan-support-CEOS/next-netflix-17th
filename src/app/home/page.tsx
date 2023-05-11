import { useQuery } from '@tanstack/react-query';
import {
  getUpcomingMovies,
  getNowPlayingMovies,
  getHorrorMovies,
} from '../../service/movies';
import { getAnimations, getTopRatedTvShows } from '../../service/tvshows';

export default function HomePage() {
  const { data: upcomingMovies } = useQuery(['upcomingMovies'], () =>
    getUpcomingMovies(),
  );
  const { data: nowPlayingMovies } = useQuery(['nowPlayingMovies'], () =>
    getNowPlayingMovies(),
  );
  const { data: horrorMovies } = useQuery(['horrorMovies'], () =>
    getHorrorMovies(),
  );
  const { data: animations } = useQuery(['animations'], () => getAnimations());
  const { data: topRatedTvShows } = useQuery(['topRatedTvShows'], () =>
    getTopRatedTvShows(),
  );

  return (
    <ul>
      {upcomingMovies.map(video => (
        <img key={video.id} src={} />
      ))}
    </ul>
  );
}
