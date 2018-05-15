function unPack(content){
  const names = content.map((task) => {
    return task.name;})
  const descr = content.map((task) => {
    return task.description;})
  const TL = content.map((task) => {
    return task.TL.map((TL) => TL)
  })
  const developers = content.map((task) => {
    return task.developers.map((dev) => dev)
  })
  return {
    names: names,
    description: descr,
    TL: TL,
    developers: developers
  }
}

function makeContent(content) {
  const result = [];
  for (let i = 0; i < content.names.length; i++){
    result.push ({
      name: content.names[i],
      description: content.description[i],
      TL: content.TL[i],
      developers: content.developers[i]
    })
  }
  return result;
}

const projectContent = {
  unPack: unPack,
  makeContent: makeContent
};

export default projectContent;