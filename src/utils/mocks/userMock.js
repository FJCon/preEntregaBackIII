function generateUsers(numUsers) {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    users.push({
      id: i + 1,
      name: `Usuario ${i + 1}`,
      email: `usuario${i + 1}@example.com`,
      // ... otros datos
    });
  }
  return users;
}

module.exports = { generateUsers };