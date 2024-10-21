import "./App.css";
import Header from "./components/Header";
import PostList from "./components/Post";
import { posts } from "./data/post";

function App() {
  return (
    <>
      <Header></Header>
      <div className="inner">
        <ul>
          {posts.map((post) => (
            <PostList post={post}  key={post.id}/>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
