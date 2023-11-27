import { Routes, Route } from 'react-router-dom'
import { PageNotFound, ProjectsPage } from './pages'
// import { ServicesRouter } from './routers/ServicesRouter'
import { ProjectDetail } from './pages/Pdetail/ProjectDetail'
import { Footer, Header, Home, Login, Contact } from './Components'
import Layout from './Components/Layout/Layout'
// aqui estuvo dj
export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route
          path=''
          element={<Login />}
        />
        <Route
          path='/'
          element={
            <>
              <Header />
              <Layout />
              <Footer />
            </>
        }
        >
          <Route
            path='/home'
            element={<Home />}
          />
          <Route
            path='/projects'
            element={<ProjectsPage />}
          />
          <Route
            path='/Contact'
            element={<Contact />}
          />
          <Route
            path='/projects/project/:title'
            element={<ProjectDetail />}
          />
          <Route
            path='/*'
            element={<PageNotFound />}
          />
        </Route>
      </Routes>
    </main>
  )
}
