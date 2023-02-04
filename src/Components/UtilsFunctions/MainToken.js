export const LocalTokenName = "localData";
export var MainToken = {
  main: "",
};

export const UpdateToken = (a) => {
  MainToken = a;
};

export const StoreLocal = (a) => {
  const token = JSON.stringify(a);
  localStorage.setItem(LocalTokenName, token);
};

export const ExportLocalData = () => {
  const token = localStorage.getItem(LocalTokenName);
  if (token === null || token === undefined) return undefined;
  var newToken = JSON.parse(token);
  UpdateToken(newToken);
  return newToken;
};
