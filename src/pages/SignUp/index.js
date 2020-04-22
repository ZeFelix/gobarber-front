import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';

import Input from '~/components/form/Input';
import Button from '~/components/form/Button';

import logo from '~/assets/img/logo68.svg';

import { schema } from './schema';

export default function SignIn() {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  async function handleSubmit({ name, email, password }) {
    try {
      await schema.validate(
        { name, email, password },
        {
          abortEarly: false,
        }
      );

      dispatch(signUpRequest(name, email, password));
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu email" />
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <Button type="submit">Registrar</Button>
        <Link to="/">já tenho conta</Link>
      </Form>
    </>
  );
}
