import "./App.css";
import Dashboard from "./dashboard/Dashboard";
// import Dashboard from "./dashboard/Dashboard";
import Layout from "./dashboard/Layout";
function App() {
  return (
    <div className="App">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
