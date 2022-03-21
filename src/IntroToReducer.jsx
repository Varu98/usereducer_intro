export const IntroToReducer = () => {
  const numList = [
    { type: "odd", payload: 1 },
    { type: "odd", payload: 3 },
    { type: "odd", payload: 55 },
    { type: "even", payload: 22 },
    { type: "even", payload: 44 }
  ];

  // const oddEvenReducer = (accum, value) =>
  //   value.type === "even"
  //     ? { ...accum, even: (accum.even += value.payload) }
  //     : { ...accum, odd: (accum.odd += value.payload) };

  // const output = numList.reduce(oddEvenReducer, { even: 0, odd: 0 });
  // console.log(output);

  const oddEvenReducer = (accum, value) => {
    switch (value.type) {
      case "even":
        return { ...accum, even: (accum.even += value.payload) };
      case "odd":
        return { ...accum, odd: (accum.odd += value.payload) };
      default:
        console.log("error");
    }
  };

  const output = numList.reduce(oddEvenReducer, { even: 0, odd: 0 });

  console.log(output);
  return <></>;
};
