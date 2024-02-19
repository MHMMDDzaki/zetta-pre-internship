type FindWord = {
  value: string;
  first_index: number;
  last_index: number;
  tes_array: string[];
};

function findWord(parameter: FindWord): string {
  return parameter.value.substring(parameter.first_index, parameter.last_index);
}

console.log(
  findWord({
    value: "Learning Typescript is different than Javascript",
    first_index: 9,
    last_index: 19,
  })
);
