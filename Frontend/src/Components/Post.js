import {
  ArrowDownwardOutlined,
  ArrowUpwardOutlined,
  ChatBubbleOutline,
  Close,
  RepeatOn,
} from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import React, { useEffect, useState } from "react";
import "./Css/Post.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ReactTimeAgo from "react-time-ago";
import ReactHtmlParser from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";

function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  );
}

function Post({ post }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const closeBtn = <Close />;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [answerLength, setAnswerLength] = useState(0);

  const handleQuill = (value) => {
    setAnswer(value);
    ReactHtmlParser(value);
    setAnswerLength(value.length);
  };

  const handleSubmit = async () => {
    if (post?._id && answer !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        answer: answer,
        questionId: post?._id,
        user: user,
      };
      await axios
        .post("/api/answers", body, config)
        .then((res) => {
          console.log(res.data);
          alert("Answer added succesfully");
          setIsModalOpen(false);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="post">
      <div className="post__info">
        <Avatar sx={{ bgcolor: deepPurple[500] }} src={post?.user?.photo} />
        <h4>{post.user?.userName || post.user?.email || ""}</h4>

        <small>
          <LastSeen date={post?.createdAt} />
        </small>
      </div>
      <div className="post__body">
        <div className="post__question">
          <p>{post?.questionName}</p>
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="post__btnAnswer"
          >
            Answer
          </button>
          <Modal
            open={isModalOpen}
            closeIcon={closeBtn}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal__question">
              <h1>{post?.questionName}</h1>
              <p>
                asked by{"     "}{" "}
                <span className="name">{user?.userName || user?.email}</span> on
                timeStamp{"     "}
                <span className="name">
                  {new Date(post?.createdAt).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="modal__answer">
              <ReactQuill
                value={answer}
                onChange={handleQuill}
                placeholder="Enter your answer"
              />
            </div>
            <div className="modal__button">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button
                disabled={answerLength === 0 ? true : false}
                onClick={handleSubmit}
                type="submit"
                className={`${answerLength === 0 ? "disAdd" : "add"}`}
              >
                Add Answer
              </button>
            </div>
          </Modal>
        </div>
        {post.questionUrl !== "" && <img src={post.questionUrl} alt="url" />}
      </div>
      <div className="post__footer">
        <div className="post__footerAction">
          <ArrowUpwardOutlined titleAccess="UpVote" />
          <ArrowDownwardOutlined titleAccess="DownVote" />
        </div>
        <RepeatOn />
        <ChatBubbleOutline titleAccess="comment" />
      </div>
      <p
        style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}
      >
        {post?.allAnswers.length} Answer(s)
      </p>

      <div
        style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
        }}
        className="post__answer"
      >
        {post?.allAnswers?.map((_a) => (
          <div
            key={_a._id}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "10px 5px",
              borderTop: "1px solid lightgray",
            }}
            className="post-answer-container"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
                fontSize: "12px",
                fontWeight: 600,
                color: "#888",
              }}
              className="post-answered"
            >
              <Avatar sx={{ bgcolor: deepPurple[500] }} src={_a?.user?.photo} />
              <div
                style={{
                  margin: "0px 10px",
                }}
                className="post-info"
              >
                <p>{_a?.user?.userName || _a?.user?.email}</p>
                <span>
                  <LastSeen date={_a?.createdAt} />
                </span>
              </div>
            </div>
            <div className="post-answer">{ReactHtmlParser(_a?.answer)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
