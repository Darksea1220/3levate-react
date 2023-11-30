import { Routes, Route } from 'react-router-dom'
import { PageNotFound, ProjectsPage } from './pages'
// import { ServicesRouter } from './routers/ServicesRouter'
import { ProjectDetail } from './pages/Pdetail/ProjectDetail'
import { Footer, Header, Home, Login, Contact, Services } from './Components'
import Layout from './Components/Layout/Layout'
export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route
          path='/login'
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
            index
            path='/home'
            element={<Home />}
          />
          <Route
            path='/projects'
            element={<ProjectsPage />}
          />
          <Route
            path='/Services'
            element={<Services />}
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
