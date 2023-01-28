import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';

import './Recipe.css';

export default function Recipe() {
  const { id } = useParams();
  const url = `http://localhost:3000/recipes/${id}`;
  const { data: recipe, isPending, error } = useFetch(url);
  const history = useHistory();
  const { mode }  = useTheme();

  useEffect(() => {
    if (error) {
      // redirect
      // history.goBack();
      setTimeout(() => {
        history.push('/');
      }, 2000);
    }
  }, [error, history]);

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {recipe && (
        <>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook</p>
          <ul>
            {recipe.ingredients.map((ing) => {
              return <li key={ing}>{ing}</li>;
            })}
          </ul>
          <p>Method: {recipe.method}</p>
        </>
      )}
    </div>
  );
}
