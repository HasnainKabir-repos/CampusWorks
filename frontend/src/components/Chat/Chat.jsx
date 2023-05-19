import React from 'react'
import TopBar from "../TopBar";
import Conversation from "../Conversation";
import Message from "../Message";
import { useContext, useEffect, useRef, useState } from "react";
import "./Chat.css";
import axios from "axios";
import { io } from "socket.io-client";


const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [currentChat, setCurrentChat] = useState("");
  const socket = useRef();
  const [arrivalMessage, setArrivalMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef();

  useEffect(() => {
    socket.current =io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);
  
  useEffect(() => {
    socket.current.emit("addUser", currentUser);
    socket.current.on("getUsers", users => {
      console.log(users)
    });
  }, [currentUser]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
  
    axios.get('http://localhost:8080/api/getcurrentuserID', config)
      .then(response => {
        setCurrentUser(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  useEffect(() => {
    if (currentUser) {
      const getConversations = async () => {
        try {
          const res = await axios.get('http://localhost:8080/api/chat/' + currentUser);
          setConversations(res.data);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      };
      getConversations();
    }
  }, [currentUser]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/message/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== currentUser
    );
      console.log(receiverId);
    socket.current.emit("sendMessage", {
      senderId: currentUser,
      receiverId: receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post("http://localhost:8080/api/message/", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  

  return (
    <>
      <TopBar />
      <div className="messenger">
        <div className="chatMenu">
        <div className="chatMenuWrapper">
        <input placeholder="Search for friends" className="chatMenuInput" />
        {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={currentUser} />
                </div>
            ))}
            </div>
        </div>
        <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat?
          <>
        <div className="chatBoxTop ">
        {messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.senderId === currentUser} />
                    </div>
                  ))}
        </div>
        <div className="chatBoxBottom">
        <textarea
                    className="chatMessageInput"
                    placeholder="write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
        </div></> :(<span className='noConversationText'>Open a conversation to start a chat.</span>)}
       
        </div>
        </div>
        <div className="chatOnline">
        <div className="chatOnlineWrapper"></div>
        </div>
        </div>
    </>
  );
}

export default Chat