fetch("/api/user/profile")
  .then((response) => {
    if (!response.ok) {
      return null; // promise fullfilles immediately
    }
    let type = response.headers.get("content-type");
    if (type !== "application/json") {
      throw new TypeError(`Expected JSON, got${type}`); // promise rejected immediately
    }
    return response.json(); //promise resolve, but if its then fulfilled or rejected depends on new Promise returned from json()
  })
  .then((profile) => {
    if (profile) {
      displayUserProfile(profile);
    } else {
      displayLoggedOutProfilePage();
    }
  })
  .catch((e) => {
    if (e instanceof NetworkError) {
      displayErrorMessage("Check your internetconnection.");
    } else if (e instanceof TypeError) {
      displayErrorMessage("Something is wrong with ourserver!");
    } else {
      console.error(e);
    }
  });
