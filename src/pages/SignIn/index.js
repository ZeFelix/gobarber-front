import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/img/logo68.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Registrar</Link>
      </form>
    </>
  );
}
