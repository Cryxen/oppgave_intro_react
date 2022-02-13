export default function Food({ foods }) {
  return (
    <>
      <ul>
        {foods.map((food) => (
          <li key={food}>{food}</li>
        ))}
      </ul>
    </>
  );
}
