import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo_github_explorer.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png"
            alt="Avatar"
          />
          <div>
            <strong>Repositório/projeto</strong>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sed
              necessitatibus molestiae modi atque qui commodi neque.
            </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>102</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="teste">
          <div>
            <strong>nome da issue</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              veniam molestiae vitae ducimus quasi quam? Voluptates vero
              numquam.
            </p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
