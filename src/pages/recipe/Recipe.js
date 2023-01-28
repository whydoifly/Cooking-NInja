import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { projectFirestore } from '../../firebase/config';

import './Recipe.css';

export default function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection('recipes')
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError('No recipe found');
        }
      });

    return () => unsub();
  }, [id]);

  const handleClick = () => {
    projectFirestore
      .collection('recipes')
      .doc(id)
      .update({ title: 'Somtehing completely different' });
  };

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
          <button onClick={handleClick}>Update</button>
        </>
      )}
    </div>
  );
}
