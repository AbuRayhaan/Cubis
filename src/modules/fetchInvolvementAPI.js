/* eslint-disable camelcase */
const involveBase = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const appId = 'SpbnUJ4uyMfFME6XWyNT';

const getLikes = async () => {
  const url = `${involveBase}/${appId}/likes`;
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
};

const addlikes = async (item_id) => {
  const url = `${involveBase}/${appId}/likes`;
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const addComments = async (item_id, username, comment) => {
  const url = `${involveBase}/${appId}/comments`;
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      item_id,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const getComment = async (item_id) => {
  const url = `${involveBase}/${appId}/comments?item_id=${item_id}`;
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
};

export {
  getLikes, addlikes, addComments, getComment,
};
