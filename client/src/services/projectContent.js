import React from 'react';

function unPack(content){
  const names = content.map((task) => {
    return task.projectName;})
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

function makeTL(arr) {
  return arr.map((TL, index) => {
    return <img src={TL.img} alt='userAvatar' title={TL.userName} key={index} className='project__item__TL__avatar'/>
  });
}

function makeDev(arr){
  return arr.map((dev, index) => {
    return <img src={dev.img} alt='userAvatar' title={dev.userName} key={index} className='project__item__dev__avatar'/>
  })
}


const projectContent = {
  unPack: unPack,
  makeContent: makeContent,
  makeTL: makeTL,
  makeDev: makeDev
};

export default projectContent;