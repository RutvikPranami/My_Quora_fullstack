import {
  AssignmentTurnedIn,
  Close,
  ExpandMore,
  FeaturedPlayList,
  Home,
  Notifications,
  PeopleAlt,
  Search,
} from "@mui/icons-material";
import { Avatar, Button, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./Css/QuoraHeader.css";
import axios from "axios";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logout, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../feature/searchResultslice";

function QuoraHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const [inputSearch, setInputSearch] = useState("");

  const closeBtn = <Close />;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(setSearchResults(String(inputSearch) || ""));
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [inputSearch]);

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    }
  };

  const handleLogout = () => {
    if (window.confirm("Logout from your Account ..?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
        })
        .catch(() => {
          console.log("Error in logout");
        });
    }
  };

  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/archive/9/91/20170609154431%21Quora_logo_2015.svg"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <Home titleAccess="Home" />
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayList titleAccess="Following" />
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedIn />
          </div>
          <div className="qHeader__icon">
            <PeopleAlt titleAccess="spaces" />
          </div>
          <div className="qHeader__icon">
            <Notifications titleAccess="notificatios" />
          </div>
        </div>
        <div className="qHeader__input">
          <Search />
          <input
            onChange={(e) => {
              setInputSearch(e.target.value);
            }}
            type="text"
            placeholder="Search here...."
          />
        </div>
        <div className="qHeader__Rem">
          <span
            className="qHeader__Avtar"
            onClick={handleLogout}
            title="Logout"
          >
            <Avatar src={user.photo} />
          </span>
          <Button title="add question" onClick={() => setIsModalOpen(true)}>
            Add Question
          </Button>
          <Modal
            open={isModalOpen}
            closeIcon={closeBtn}
            onClose={() => setIsModalOpen(false)}
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          >
            <div className="modal__title">
              <h5>Add Question</h5>
            </div>
            <div className="modal__info">
              <Avatar src={user?.photo} className="avatar" />
              <div className="modal__scope">
                <PeopleAlt />
                <p>Public</p>
                <ExpandMore />
              </div>
            </div>
            <div className="modal__Field">
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                type=" text"
                placeholder="Start your question with 'What', 'How', 'Why', etc. "
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  placeholder="Optional: inclue a link that gives context"
                />
                {inputUrl !== "" && (
                  <img
                    style={{
                      height: "40vh",
                      objectFit: "contain",
                    }}
                    src={inputUrl}
                    alt="displayImage"
                  />
                )}
              </div>
            </div>
            <div className="modal__buttons">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button
                disabled={question.length === 0 ? true : false}
                onClick={handleSubmit}
                type="submit"
                className={`${question.length === 0 ? "disAdd" : "add"}`}
              >
                Add Question
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default QuoraHeader;
