import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import ContactForm from "./components/ContactForm";

function App() {

  return (
    <>
      <Router>
        <Header />
        <div className="inner">
          <Routes>
            {/* 記事一覧のルーティング */}
            <Route path="/" element={<PostList />} />
            {/* 記事詳細のルーティング */}
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
