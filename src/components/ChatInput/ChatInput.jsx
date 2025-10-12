import React from 'react';
import './ChatInput.css';

const ChatInput = () => {
  return (
    <div className="chat-wrapper">
      <div className="container-ia-chat">
        <input type="checkbox" name="input-voice" id="input-voice" className="input-voice" />
        <input type="text" name="input-text" id="input-text" placeholder="Ask Anything..." className="input-text" required />
        <input type="checkbox" name="input-files" id="input-files" className="input-files" />

        <div className="container-upload-files">
          <svg className="upload-file" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <g fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx={12} cy={13} r={3} />
              <path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21Z" />
            </g>
          </svg>
          {/* Tambahkan svg lain sesuai kebutuhan */}
        </div>

        <label htmlFor="input-files" className="label-files">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7v14" />
          </svg>
        </label>

        <label htmlFor="input-voice" className="label-voice">
          <svg className="icon-voice" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M12 4v16m4-13v10M8 7v10m12-6v2M4 11v2" />
          </svg>
          <div className="ai">
            <div className="container">
              <div className="c c4" />
              <div className="c c1" />
              <div className="c c2" />
              <div className="c c3" />
              <div className="rings" />
            </div>
            <div className="glass" />
          </div>
          <div className="text-voice">
            <p>Conversation Started</p>
            <p>Press to cancel the conversation</p>
          </div>
        </label>

        <label htmlFor="input-text" className="label-text">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 12l7-7l7 7m-7 7V5" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default ChatInput;
