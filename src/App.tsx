import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminPage, ParentPage, StudentPage, TeacherPage } from './pages';
import EventListPage from './pages/list/events';
import DashboardLayout from './hoc/dashboardLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <EventListPage />
            </DashboardLayout>
          }
        />

        <Route path="/parent" element={<ParentPage />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="/list/events"
          element={
            <DashboardLayout>
              <EventListPage />
            </DashboardLayout>
          }
        />

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
