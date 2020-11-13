import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo_github_explorer.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/59208261?s=460&u=ec733620de214fef7f2ce938d6bc22a80d145b02&v=4"
            alt="João Rangel"
          />
          <div>
            <strong>ts-gobarber-backend</strong>
            <p>
              Backend of GoBarber app created using Node.js during rocketseat
              bootcamp
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/59208261?s=460&u=ec733620de214fef7f2ce938d6bc22a80d145b02&v=4"
            alt="João Rangel"
          />
          <div>
            <strong>ts-gobarber-backend</strong>
            <p>
              Backend of GoBarber app created using Node.js during rocketseat
              bootcamp
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/59208261?s=460&u=ec733620de214fef7f2ce938d6bc22a80d145b02&v=4"
            alt="João Rangel"
          />
          <div>
            <strong>ts-gobarber-backend</strong>
            <p>
              Backend of GoBarber app created using Node.js during rocketseat
              bootcamp
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
