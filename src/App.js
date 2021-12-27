import './App.css';

import CreateRef from './components/createRef';
import CreateConfig from './components/createConfig';
import CreateObjet from './components/createObjet';
import ReadConfigList from './components/readConfigList';
import ReadRootList from './components/readRootList';
import ReadRefList from './components/readRefList';
import ReadObjetList from './components/readObjetList';
import UpdateConfig from './components/updateConfig';
import UpdateRef from './components/updateRef';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import UpdateObjet from './components/updateObjet';
import { Container } from 'semantic-ui-react';
import ErrorNotFound from './components/errorNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Container fluid>
          <Routes>
            <Route path="/" element={<ReadRefList />} />
            <Route path="create" element={<CreateRef />} />
            <Route path=":id" element={<Outlet />} >
              <Route path="objets/create" element={<CreateObjet type='referentiel' />} />
              <Route path=":objectId" element={<Outlet />} >
                <Route index element={<ReadObjetList />} />
                <Route path="edit" element={<UpdateObjet />} />
                <Route path="create" element={<CreateObjet type='objet' />} />
                <Route path="parametres/create" element={} />
                  <Route path="parametres/:paramId" element={} >
                    <Route index element={} />
                    <Route path="edit" element={} />
                  </Route>
              </Route>
              <Route path="configurations/create" element={<CreateConfig />} />
              <Route path="configurations/:configId" element={<Outlet />} >
                <Route index element={<ReadRootList />} />
                <Route path="edit" element={<UpdateConfig />} />
                <Route path="create" element={<CreateObjet type='configuration' />} />
                <Route path=":objectId" element={<Outlet />} >
                  <Route index element={<ReadObjetList />} />
                  <Route path="edit" element={<UpdateObjet />} />
                  <Route path="create" element={<CreateObjet type='objet' />} />
                  <Route path="parametres/create" element={} />
                  <Route path="parametres/:paramId" element={} >
                    <Route index element={} />
                    <Route path="edit" element={} />
                  </Route>
                </Route>
              </Route>
              <Route index element={<ReadConfigList />} />
              <Route path="edit" element={<UpdateRef />} />
            </Route>
            <Route
              path="*"
              element={<ErrorNotFound />}
            />
          </Routes>
        </Container>
      </Router>

    </div>
  );
}

export default App;
