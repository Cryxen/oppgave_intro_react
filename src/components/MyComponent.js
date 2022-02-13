import Grandchild from './Title';

export default function componentName({ title }) {
  return (
    <>
      <h1>My First Component</h1>
      <Grandchild title={title} />
    </>
  );
}
