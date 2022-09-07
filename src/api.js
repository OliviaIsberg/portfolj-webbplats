export const createUser = (user) =>
  fetch('http://localhost:4000/api/user/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      firstname: user.firstName,
      lastname: user.LastName,
      email: user.email,
      password: user.password,
    }),
  }).then((response) => response.json());

export const getUser = (id) =>
  fetch('http://localhost:4000/api/users/' + id).then((response) =>
    response.json()
  );

export const login = (email, password) =>
  fetch('http://localhost:4000/api/login/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
    }),
  });

// export const readProduct = (id) =>
//   fetch('/api/products/' + id).then((response) => response.json());

// export const updateProduct = (product) =>
//   fetch('/api/products/' + product.id, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       name: product.name,
//       image: product.image,
//       price: product.price,
//     }),
//   });

// export const deleteProduct = (id) =>
//   fetch('/api/products/' + id, {
//     method: 'DELETE',
//   });
