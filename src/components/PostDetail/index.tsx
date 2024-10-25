import React from "react";
import { useParams } from "react-router-dom";
import styles from "./PostList.module.css";
type Post = {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  categories: string[];
  content: string;
};

type Props = {
  posts: Post[];
};

const PostDetail: React.FC<Props> = ({ posts }) => {
  const { id } = useParams<{ id: string }>(); // useParamsで文字列として受けとる
  console.log(id, typeof id);
  // findメソッドでusePramsで取得したidをからpostデータを抜き出す
  const post = posts.find((p) => p.id === Number(id)); // Number関数で数値に変換

  // 分割代入で取得した値で型エラーが発生する為
  // post が undefinedの可能性があるため条件を足す
  if (!post) {
    return <div className="">記事が見つかりません。</div>;
  }
  const { title, thumbnailUrl, createdAt, categories, content } = post;
  return (
    <div className={styles.PostDetail__container}>
      <div className={styles.postDetail__post}>
        <div className="postDetail__image">
          <img src={thumbnailUrl} alt="" />
        </div>
        <div className={styles.postDetail__content}>
          <div className={styles.postDetail__info}>
            <div className={styles.postDetail__date}>{new Date(createdAt).toLocaleDateString()}</div>
            <div className={styles.postDetail__categories}>
              {categories.map((category, index) => (
                <span className={styles.postDetail__category} key={index}>
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.postDetail__head}>{title}</div>
          <div className={styles.postDetail__body} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
