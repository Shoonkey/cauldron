import React from 'react';
import clsx from 'clsx';

import { Container } from './styles';

function ChatMessage({ showAuthor, description, metadata, ...props }) {

  const { author, img: metaImage, name, type } = metadata;

  return (
    <Container {...props}>
      {
        showAuthor && (
          <div className="author">
            <div className="profile-picture circle"></div>
            <p className="username">{author.username}</p>
          </div>
        )
      }
      <div className="message-box">
        {
          type && (
            <div className={clsx("header", metaImage && "has-image")}>
              {
                metaImage && (
                  <img className="circle header-image" src={metaImage.src} alt={metaImage.alt} />
                )
              }
              <div>
                <h1 className="title">{name}</h1>
                <p className="descriptor">{type}</p>
              </div>
            </div>
          )
        }
        <p className="description">{description}</p>
      </div>
    </Container>
  );
}

export default ChatMessage;