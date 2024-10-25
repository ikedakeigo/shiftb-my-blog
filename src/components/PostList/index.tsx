import { Link } from "react-router-dom";
import styles from "./Post.module.css";
type Posts = {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
};

type Props = {
  posts: Posts[];
};

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
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
