function checkDeveloper(rights){
  if (rights !== ''){
    return false;
  }
  return true;
}

const privacyAPI = {
  checkDeveloper: checkDeveloper
}

export default privacyAPI;