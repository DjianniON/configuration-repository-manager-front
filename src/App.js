import './App.css';

import CreateRef from './components/createRef';
import CreateConfig from './components/createConfig';
import CreateObjet from './components/createObjet';
import ReadList from './components/readList';
import ReadRootList from './components/readRootList';
import ReadRefList from './components/readRefList';
import ReadObjetList from './components/readObjetList';
import UpdateConfig from './components/updateConfig';
import UpdateRef from './components/updateRef';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import UpdateObjet from './components/updateObjet';
import { Container,Divider } from 'semantic-ui-react';

function App() {
  return (
    <Container>
    <Divider hidden />
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ReadRefList />} />
          <Route path="create" element={<CreateRef />} />
          <Route path=":id" element={<Outlet />} >
            <Route path="configurations/create" element={<CreateConfig />} />
            <Route path="configurations/:configId" element={<Outlet />} >
            <Route index element={<ReadRootList />} />
            <Route path="edit" element={<UpdateConfig />} />
            <Route path=":objectId" element={<ReadObjetList />}/>
          </Route>
            <Route index element={<ReadList />} />
            <Route path="edit" element={<UpdateRef />} />
          </Route>
          <Route path="objects/:objectId" element={<Outlet />} >
              <Route path="edit" element={<UpdateObjet />} />
              <Route path="create" element={<CreateObjet />} />
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
    </Container>
  );
}

export default App;
