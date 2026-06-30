"use client";

import { useState } from "react";

export default function CommentForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget; // ✅ SAVE FORM REF
  setLoading(true);
  setResult("");

  const formData = new FormData(form);

  const res = await fetch("/api/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }),
  });

  const data = await res.json();

  setLoading(false);
  setResult(data.message);

  if (res.ok) {
    form.reset(); // ✅ SAFE
  }
}


  return (
    <div className="comment-form">
      <h3 className="comment-form__title">Leave a Comment</h3>

      <p className="comment-form__text">
        By using this form, you agree to the storage and handling of your data.
      </p>

      <form
        className="comment-one__form contact-form-validated"
        onSubmit={handleSubmit}
      >
        <div className="row">
          <div className="col-xl-6">
            <div className="comment-form__input-box">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
            </div>
          </div>

          <div className="col-xl-6">
            <div className="comment-form__input-box">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-12">
            <div className="comment-form__input-box text-message-box">
              <textarea
                name="message"
                placeholder="Write your message"
                rows={5}
                required
              />
            </div>

            <div className="comment-form__btn-box">
              <button
                type="submit"
                className="thm-btn comment-form__btn"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Now"}
              </button>
            </div>
          </div>
        </div>
      </form>

      {result && <p className="result">{result}</p>}
    </div>
  );
}
