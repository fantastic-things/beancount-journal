import Entry from './Entry';

export default () => {
  return (
    <div>
      <h1>Journal</h1>
      Here is the list of entry
      {(() => {
        const result: JSX.Element[] = [];

        for (let i = 0; i < 10; i += 1) {
          result.push(<Entry key={i} />);
        }

        return result;
      })()}
    </div>
  );
};
