import { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loader from "./components/Loader";

const NotePage = lazy(() => import('./pages/NotePage'));
const NFPage = lazy(() => import('./pages/NFPage'));

const App = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route path="/" exact component={NotePage} />
      <Route component={NFPage} />
    </Switch>
  </Suspense>
);

export default App;