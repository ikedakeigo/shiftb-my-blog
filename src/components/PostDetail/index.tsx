import React, { useEffect, useState } from "react";
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

/**memo
 * useParamsでulrを受けっとてその値をapiの末に置いた際にundifindが返ってきた。
 * const { postId } = useParams<{postId: string}>()として受けっとた際にエラーがでる。
 * ブラケットの中身をidに変更すると値を取得してくれた。まだここの理解ができていない。。
*/
const PostDetail: React.FC = () => {
  const { id } = useParams<{id: string}>(); // useParamsでurlよりidを取得
  // const postId = Number(id) // Number関数で数値に変換
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  //記事詳細ページの取得
  // postIdが更新かかった際に発火
  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`);
        const data = await res.json();
        setPost(data.post);
      } catch {
        console.error("Failed to fetch post");
      } finally {
        setLoading(false);
      }
    };

    fetcher();
  }, [id]); // 依存配列にidを追加

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <div>記事が見つかりません。</div>;
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
