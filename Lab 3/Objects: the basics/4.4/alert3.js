function makeUser() {
    return {
      name: "Джон",
      ref() {
        return this;
      }
    };
  };
  
  let user = makeUser();
  
  alert( user.ref().name );