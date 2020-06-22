import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {
  Container,
  Main,
  Loading,
  Owner,
  IssuesList,
  PageActions,
  FilterList,
} from './styles';

export default function Repository({ match }) {
  const [repository, setRepository] = useState({});
  const [issues, setIssue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filters, setFilter] = useState([
    { state: 'all', label: 'All', active: true },
    { state: 'open', label: 'Open', active: false },
    { state: 'closed', label: 'Closed', active: false },
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function load() {
      const nameRepo = decodeURIComponent(match.params.repository);

      const [repositoryData, issuesData] = await Promise.all([
        api.get(`/repos/${nameRepo}`),
        api.get(`/repos/${nameRepo}/issues`, {
          params: {
            state: filters.find((f) => f.active).state,
            per_page: 5,
          },
        }),
      ]);

      setRepository(repositoryData.data);
      setIssue(issuesData.data);
      console.log(issuesData);

      setLoading(false);
    }

    load();
  }, [match.params.repository]);

  useEffect(() => {
    async function loadIssue() {
      const nameRepo = decodeURIComponent(match.params.repository);

      const res = await api.get(`/repos/${nameRepo}/issues`, {
        params: {
          state: filters[index].state,
          page,
          per_page: 5,
        },
      });

      setIssue(res.data);
    }

    loadIssue();
  }, [match.params.repository, page, index, filters]);

  function handlePage(action) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  function handleIndex(index) {
    setIndex(index);
  }

  if (loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  }

  return (
    <>
      <Container>
        <Main>
          <Link to={'/'}>Back</Link>

          <Owner>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
          </Owner>

          <FilterList active={index}>
            {filters.map((filter, index) => (
              <button
                type="button"
                key={filter.label}
                onClick={() => handleIndex(index)}
              >
                {filter.label}
              </button>
            ))}
          </FilterList>

          <IssuesList>
            {issues.map((issue) => (
              <li key={String(issue.id)}>
                <img src={issue.user.avatar_url} alt={issue.user.login} />

                <div>
                  <div className="label">
                    <a href={issue.html_url}>{issue.title}</a>

                    {issue.labels.map((label) => (
                      <span key={String(label.id)}>{label.name}</span>
                    ))}
                  </div>
                  <p>{issue.user.login}</p>
                </div>
              </li>
            ))}
          </IssuesList>

          <PageActions>
            <button
              type="button"
              onClick={() => handlePage('back')}
              disabled={page < 2}
            >
              back
            </button>
            <button type="button" onClick={() => handlePage('next')}>
              next
            </button>
          </PageActions>
        </Main>
      </Container>
    </>
  );
}
