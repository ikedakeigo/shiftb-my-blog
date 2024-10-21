import styles from "./Post.module.css";
type Post = {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
};

type PostProps = {
  post: Post;
};

const PostList = ({ post }: PostProps) => {
  const {title, createdAt, thumbnailUrl, categories, content } = post;

  const date = new Date(createdAt);
  return (
    <li className={styles.list}>
      <a href={thumbnailUrl} className={styles.link}>
        <div className={styles.post}>
          <div>
            <div className={styles.postInfo}>
              <div className={styles.postDate}>{date.toLocaleDateString()}</div>
              <div className={styles.postCategories}>
                {categories.map((category, index) => (
                  <>
                    <span className={styles.postCategory} key={index}>
                      {category}
                    </span>
                  </>
                ))}
              </div>
            </div>
            <p className={styles.postTitle}>{title}</p>
            <div className={styles.postBody} dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </div>
      </a>
    </li>
  );
};

export default PostList;
