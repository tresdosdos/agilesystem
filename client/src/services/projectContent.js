function unPack(content){
  const names = content.map((task) => {
    return task.name;})
  const TL = content.map((task) => {
    return task.TL.map((TL) => TL)
  })
  const developers = content.map((task) => {
    return task.developers.map((dev) => dev)
  })
  console.log(content);
  console.log(names);
  console.log(TL);
  console.log(developers);

}
