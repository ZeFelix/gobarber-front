import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/img/logo68.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input placeholder="Nome Completo" />
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />

        <button type="submit">Registrar</button>
        <Link to="/">já tenho conta</Link>
      </form>
    </>
  );
}
