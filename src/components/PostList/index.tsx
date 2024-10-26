import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./PostList.module.css";

type Posts = {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
};

const PostList = () => {

  const [postsList, setPostsList] = useState<Posts[]>([])

  useEffect(() => {
    const fetcher = async () => {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts");
      const data = await res.json();
      setPostsList(data.posts)
    }

    fetcher()
  }, [])

  return (
    <ul>
      {postsList.map((post) => (
        <li className={styles.list} key={post.id}>
          {/* Linkコンポーネントを使用して詳細ページに遷移 */}
          <Link to={`/posts/${post.id}`} className={styles.link}>
            <div className={styles.post}>
              <div>
                <div className={styles.postInfo}>
                  <div className={styles.postDate}>{new Date(post.createdAt).toLocaleDateString()}</div>
                  <div className={styles.postCategories}>
                    {post.categories.map((category, index) => (
                      <span className={styles.postCategory} key={index}>
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                <p className={styles.postTitle}>{post.title}</p>
                <div className={styles.postBody} dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
