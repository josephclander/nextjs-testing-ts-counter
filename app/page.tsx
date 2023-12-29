export const metadata = {
  title: 'Counter App',
};

export default function Page() {
  return (
    <>
      <h1>Counter App</h1>
      <div className="counter__container">
        <div className="counter__display">1</div>
        <div className="counter__buttons">
          <button className="counter__increment">+</button>
          <button className="counter__decrement">-</button>
        </div>
      </div>
    </>
  );
}
