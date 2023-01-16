'use strict';

/** Tweet: Creates one tweet
 *
 * username: string
 * name: string
 * date: string
 * message: string
 */

// TODO: styling
function Tweet({ username, name, date, message }) {
  const usernameStyles = {

  };
  const nameStyles = {

  };
  const dateStyles = {

  };
  const messageStyles = {

  };
  const tweetStyles = {
    border: '1px solid gray',
    margin: '30px',
    padding: '30px'
  };
  return (
    <div style={tweetStyles}>
      <span>{username}</span>
      <span>{name}</span>
      <span>{date}</span>
      <p>{message}</p>
    </div>
  );
}