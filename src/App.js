import logo from './logo.svg';
import './App.css';

import CreateRef from './components/createRef';
import CreateConfig from './components/createConfig';
import CreateObject from './components/createObjet';
import ReadList from './components/readList';
import ReadRootList from './components/readRootList';
import ReadRefList from './components/readRefList';
import ReadObjectList from './components/readObjetList';
import UpdateConfig from './components/updateConfig';
import UpdateRef from './components/updateRef';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import UpdateObjet from './components/updateObjet';

function App() {
  return (
    <Router>

      <div className="App">
        <h2 className="main-header">Projet DA50 - Front</h2>
        <Routes>
          <Route path="/" element={<ReadRefList />} />
          <Route path="create" element={<CreateRef />} />
          <Route path=":id" element={<Outlet />} >
            <Route index element={<ReadList />} />
            <Route path="edit" element={<UpdateRef />} />
            <Route path="configurations" element={<Outlet />} >
              <Route index element={<ReadList />} />
              <Route path="create" element={<CreateConfig />} />
              <Route path=":id" element={<Outlet />} >
                <Route index element={<ReadRootList />} />
                <Route path=":objectId" element={<Outlet />} >
                  <Route index element={<ReadObjectList />} />                  <Route path="create" element={<CreateObject />} />
                  <Route path="edit" element={<UpdateObjet />} />
                  <Route path="create" element={<CreateObject />} />
                  <Route path=":objectsId" element={<ReadObjectList />} >
                    <Route path="create" element={<CreateObject />} />
                    <Route path="edit" element={<CreateObject />} />
                  </Route>
                </Route>
                <Route path="edit" element={<UpdateConfig />} />
              </Route>
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404</p>
              </main>
            }
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
