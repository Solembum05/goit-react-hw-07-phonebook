import axios from "axios";

const BASE_URL = 'https://6579d10a1acd268f9afa285c.mockapi.io/';

export async function fetchContacts() {
  const { data } = await axios.get(`${BASE_URL}/contacts`);
  return data;
};

export async function removeContact(contactId) {
  const { data } = await axios.delete(`${BASE_URL}/contacts/${contactId}`);

  return data;
};



export async function postNewContact({ name, phone, id }) {

  const { data } = await axios({
    method: 'post',
    url: `${BASE_URL}/contacts/`,
    data: {
      createdAt: Date.now(),
      phone: phone,
      name: name,
      id: id,
    },
  });

  return data;
};

