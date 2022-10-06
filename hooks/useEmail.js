import React, { useState } from 'react';
import axios from 'axios';
export const useEmail = (initValue) => {
  const [formEmail, setForm] = useState(initValue);
  const { btn, emailInput, loading } = formEmail;

  const onChangeForm = ({ target }) => {
    const { value } = target;
    setForm({ ...formEmail, emailInput: value });
  };

  const onSendEmail = (event) => {
    event.preventDefault();
    if (emailInput === '') return;
    setForm({ btn: 'Sending', emailInput: '', loading: true });

    axios
      .post('api/email', { email: emailInput })
      .then((res) => {
        setForm({ ...formEmail, btn: 'Sended', loading: false });
      })
      .catch((e) => {
        setForm({ ...formEmail, btn: 'Error', loading: false });
      });
  };

  return [btn, emailInput, loading, onChangeForm, onSendEmail];
};
