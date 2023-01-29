const Contents = ({ props }) => {
  return (
    <>
      {props.map((item) => {
        return (
          <p key={item.name}>
            {item.name} : {item.exercises}
          </p>
        );
      })}
    </>
  );
};

export default Contents;
