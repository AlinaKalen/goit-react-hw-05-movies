import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Layout = lazy(() => import('./Layout/Layout'))
const HomePage = lazy(() => import('../pages/HomePage'))
const MoviesPage = lazy(() => import('../pages/MoviesPage'))
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'))
const CastPage = lazy(() => import('../pages/CastPage'))
const ReviewPage = lazy(() => import('../pages/ReviewPage'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}>
          </Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewPage />} />
            </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;