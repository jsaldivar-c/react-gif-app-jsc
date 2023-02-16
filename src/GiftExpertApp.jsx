import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One Punches', 'Dragon Ball']);
  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      {/* Titulo*/}
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      <p>KLP5Vx6TKtHQk41odVMthba14HCKRt2n</p>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
