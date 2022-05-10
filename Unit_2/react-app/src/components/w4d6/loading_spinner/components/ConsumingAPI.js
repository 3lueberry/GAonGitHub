import React, { useEffect, useState } from "react";
import { Container, Row, Form } from "react-bootstrap";
import LoadingSpinner from "./LoadingSpinner";

const ConsumingAPI = () => {
  const [selection, setSelection] = useState();

  const [post, setPost] = useState({
    id: "",
    title: "",
    body: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async (url, signal) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { signal });
      if (res.status !== 200) {
        throw new Error("Something went wrong.");
      }
      console.log(res);
      const data = await res.json();
      setPost({
        id: data.id,
        title: data.title,
        body: data.body,
      });
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  };

  const handleSelectionChange = (e) => {
    setSelection(e.target.value);
  };

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts/" + selection;
    const controller = new AbortController();
    fetchPost(url, controller.signal);

    return () => controller.abort();
  }, [selection]);

  let content = "";
  if (post) {
    content = (
      <>
        <div>ID: {post.id}</div>
        <div>Title: {post.title}</div>
        <div>Body: {post.body}</div>
      </>
    );
  }
  if (isLoading) {
    content = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    content = <p>{error}</p>;
  }

  return (
    <>
      <section>
        <h2>Selection</h2>
        <Container>
          <Row>
            <Form.Select
              aria-label="Selection"
              id="selection"
              onChange={handleSelectionChange}
              md={12}
            >
              <option>--- Select An Option ---</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
            </Form.Select>
          </Row>
        </Container>
      </section>
      <br />
      <section>{content}</section>
    </>
  );
};

export default ConsumingAPI;
