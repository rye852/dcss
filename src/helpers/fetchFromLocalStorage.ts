export type userInformationForSet = {
  email: string;
  userName: string;
  password: string;
};

export type userInformationForGet = {
  email: string;
  password: string;
};

const key = 'ESafe';

export function getItems(): userInformationForSet[] | [] {
  const allItems = localStorage.getItem(key);
  if (allItems === null) return [];
  return JSON.parse(allItems);
}

export function getAnItem({
  email,
  password,
}: userInformationForGet): userInformationForSet | null {
  const allItems = getItems();
  let item: null | userInformationForSet = null;
  allItems.forEach((element) => {
    if (element.email === email && element.password === password)
      item = element;
  });
  return item;
}

export function setItem({ email, password, userName }: userInformationForSet) {
  let items = getItems();

  if (items.find((element) => element.email === email) !== undefined) {
    return null;
  } else {
    items[items.length] = { email, password, userName };
    localStorage.setItem(key, JSON.stringify(items));

    return {
      email,
      password,
      userName,
    };
  }
}
