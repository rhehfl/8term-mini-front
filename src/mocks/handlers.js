import { http, HttpResponse } from 'msw';
import movieData from '../db/movies.json';
import reviewData from '../db/review.json';
import comment from '../db/comment.json';
import userData from '../db/user.json';
import { SignJWT } from 'jose';

const SECRET_KEY = 'your-access-token-secret-key';

export const handlers = [
  // Intercept "GET /movies" requests...
  http.get('/movies', ({ request }) => {
    const url = new URL(request.url);
    const movieId = url.searchParams.get('movie-id');

    if (!movieId) {
      return HttpResponse.json(movieData);
    }

    if (movieId === 'release') {
      return HttpResponse.json(
        movieData.results.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        )
      );
    }

    if (movieId === 'title') {
      return HttpResponse.json(
        movieData.results.sort((a, b) => a.title.localeCompare(b.title))
      );
    }

    const movie = movieData.results.find(
      movie => movie.id.toString() === movieId
    );

    if (movie) {
      return HttpResponse.json(movie);
    }
  }),

  // 중복 확인 검사 핸들러
  http.get('/users/check-id', ({ request }) => {
    const url = new URL(request.url);
    const userId = url.searchParams.get('id');

    if (!userId) {
      return HttpResponse.json(
        { message: '아이디를 입력해주세요.' },
        { status: 400 }
      );
    }

    const userExists = userData.some(user => user.id === userId);

    if (userExists) {
      return HttpResponse.json(
        { message: '이미 사용중인 아이디 입니다.' },
        { status: 409 }
      );
    } else {
      return HttpResponse.json(
        { message: '사용 가능한 아이디 입니다.' },
        { status: 200 }
      );
    }
  }),

  // 회원가입 핸들러
  http.post('/users', async ({ request }) => {
    const { nickname, id, password, confirmPassword } = await request.json();

    if (!nickname || !id || !password || password !== confirmPassword) {
      return HttpResponse.json(
        { message: '유효하지 않은 입력입니다.' },
        { status: 400 }
      );
    }

    return HttpResponse.json({
      user: { id, nickname },
      message: '회원가입이 성공적으로 완료되었습니다.',
    });
  }),

  // 로그인 핸들러
  http.post('/users/:id', async ({ request, params }) => {
    try {
      const { id } = params;
      const { password } = await request.json();

      const user = userData.find(user => user.id === id);

      if (!user) {
        return HttpResponse.json(
          { message: '존재하지 않는 아이디입니다.' },
          { status: 401 }
        );
      }

      if (user.password !== password) {
        return HttpResponse.json(
          { message: '비밀번호가 올바르지 않습니다.' },
          { status: 401 }
        );
      }

      // JWT 생성
      const token = await new SignJWT({ id: user.id, nickname: user.nickname })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' }) // Set the header with algorithm and type
        .setExpirationTime('1h')
        .setIssuer('your-app')
        .sign(new TextEncoder().encode(SECRET_KEY));

      return HttpResponse.json({
        user: { id: user.id, nickname: user.nickname },
        jwt: token,
      });
    } catch (error) {
      console.error('Error in /users/:id handler:', error);
      return HttpResponse.json(
        { message: '서버 오류가 발생했습니다.' },
        { status: 500 }
      );
    }
  }),

  http.get('/movies/:movieId/reviews', (req, res, ctx) => {
    const { movieId } = req.params;
    const filterReviews = reviewData.filter(
      val => val.movie_id === parseInt(movieId, 10)
    );
    return HttpResponse.json(filterReviews);
  }),

  http.get('/reviews/:id/comment', (req, res, ctx) => {
    const { id } = req.params;
    const filterComments = comment.filter(
      val => val.review_id == parseInt(id, 10)
    );
    return HttpResponse.json(filterComments);
  }),

  http.post('/movies/:id/reviews', async ({ request, params }) => {
    const { id } = params;
    const newPost = await request.json();

    const newReview = {
      review_id: reviewData.length + 1,
      user_id: 123123,
      movie_id: id,
      comment: newPost.text,
      date: new Date().toISOString().slice(0, 10),
    };
    reviewData.push(newReview);
    return HttpResponse.json(newReview, { status: 201 });
  }),

  http.post('/reviews/:id/comment', async ({ request, params }) => {
    const { id } = params;
    const newPost = await request.json();

    const newComment = {
      comment_id: comment.length + 1,
      user_id: 244,
      review_id: id,
      text: newPost.text,
      date: new Date().toISOString().slice(0, 10),
    };
    comment.push(newComment);
    return HttpResponse.json(newComment, { status: 201 });
  }),
];
