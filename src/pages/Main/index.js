import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { Container, Form, SubmitButton, List, DeleteButton } from './styles';

export default function Main() {
  const [newRepo, setNewRepo] = useState('');
  const [repository, setRepository] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  //search
  useEffect(() => {
    const repoStorage = localStorage.getItem('repos');

    if (repoStorage) {
      setRepository(JSON.parse(repoStorage));
    }
  }, []);

  //save
  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repository));
  }, [repository]);

  function handleInputChange(e) {
    setNewRepo(e.target.value);
    setAlert(null);
  }

  // async function handleSubmit(e) {
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      async function submit() {
        setLoading(true);
        setAlert(null);

        try {
          if (newRepo === '') {
            throw new Error('You need to write a repository that exist!');
          }

          const res = await api.get(`repos/${newRepo}`);

          const hasRepo = repository.find((repo) => repo.name === newRepo);

          console.log(hasRepo);

          if (hasRepo) {
            throw new Error('Repository already exists!');
          }

          const data = {
            name: res.data.full_name,
          };

          setRepository([...repository, data]);
          setNewRepo('');
        } catch (error) {
          setAlert(error);
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      submit();
    },
    [newRepo, repository]
  );

  const handleDelete = useCallback(
    (repo) => {
      const find = repository.filter((gitRepo) => gitRepo.name !== repo);
      setRepository(find);
    },
    [repository]
  );

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit} error={alert}>
          <h1>
            <FaGithub size={30} />
            Repositories
          </h1>

          <div>
            <SubmitButton loading={loading ? 1 : 0}>
              {loading ? (
                <FaSpinner color="#FFF" size={14} />
              ) : (
                <FaPlus color="#FFF" size={12} />
              )}
            </SubmitButton>

            <input
              type="text"
              value={newRepo}
              onChange={handleInputChange}
              placeholder="Add new repositories ex: facebook/react"
              autoFocus
            />
          </div>
        </Form>

        <List>
          {repository.map((repo) => (
            <li key={repo.name}>
              <span>
                <DeleteButton onClick={() => handleDelete(repo.name)}>
                  <FaTrash size={14} color="#222" />
                </DeleteButton>
                {repo.name}
              </span>
              <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                <FaBars size={20} />
              </Link>
            </li>
          ))}
        </List>
      </Container>
    </>
  );
}
