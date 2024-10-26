import React, { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  // useStateを使った状態管理
  // 1つのオブジェクトで管理
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  // onChangeイベント
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value, // スプレット構文で新しいオブジェクトを生成して更新
    }));
  };

  // バリデーションの関数
  const validate = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };
    if (!formData.name) {
      newErrors.name = "名前を入力してください";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "メールアドレスを入力してください";
      valid = false;
    } else {
      // 正規表現で判定
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "有効なメールアドレスを入力してください。";
        valid = false;
      }
    }
    if (!formData.message) {
      newErrors.message = "メッセージを入力してください";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  //送信メソッドの実装 async非同期処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // バリデーションを通過しない場合、アラートを表示して終了
    if (!validate()) {
      alert("おしまい");
      return;
    }

    setSuccess(true); // 送信処理（成功状態）

    try {
      const response = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts", {
        method: "POST", // POSTメソッドでデータを送信指定
        // データ形式の指定
        headers: {
          "Content-Type": "application/json", // JSON形式として指定
        },
        body: JSON.stringify(formData), // 文字列に変換してリクエストのbodyにセット
      });

      // レスポンスのステータスチェック
      if (!response.ok) throw new Error("Network response"); // ネットワークエラーの際エラーを投げる
      alert("送信できました");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSuccess(false);
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      message: ""
    })
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>問合わせフォーム</h1>
      <form action="" onSubmit={handleSubmit}>
        {success && <p style={{ color: "green" }}>メッセージが送信されました。</p>}
        <div className={styles.name}>
          <label>名前</label>
          <div className="">
            <input type="text" value={formData.name} id="name" onChange={handleChange} />
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
          </div>
        </div>
        <div className={styles.email}>
          <label>メールアドレス</label>
          <div>
            <input type="email" value={formData.email} id="email" onChange={handleChange} />
            {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
          </div>
        </div>
        <div className={styles.message}>
          <label>メッセージ</label>
          <div>
            <textarea value={formData.message} id="message" onChange={handleChange} rows={8} />
            {errors.message && <span style={{ color: "red" }}>{errors.message}</span>}
          </div>
        </div>
        <div className={styles.button}>
          <button
          type="submit"
          >送信</button>
          <button type="reset" onClick={handleClear}>クリア</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
