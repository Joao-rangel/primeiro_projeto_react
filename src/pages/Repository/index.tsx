import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  // eslint-disable-next-line react/jsx-one-expression-per-line
  return <h1>Repository - {params.repository}</h1>;
};

export default Repository;
