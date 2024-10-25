import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  // 記事一覧を取得useEffect
  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts");
      const data = await res.json();
      setPosts(data.posts);
    };

    fetcher();
  }, []);

  return (
    <Router>
      <Header />
      <div className="inner">
        <Routes>
          {/* 記事一覧のルーティング */}
          <Route path="/" element={<PostList posts={posts} />} />
          {/* 記事詳細のルーティング */}
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
