const Contents = ({ props }) => {
  return (
    <>
      {props.map((item) => {
        console.log(item);
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
