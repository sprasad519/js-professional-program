let userProfile = {
  name: "Sivaprasad",
  age: 88,
  email: "sivaprasad@example.com",
  getProfile: function () {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
  },
};

console.log(userProfile.getProfile()); // Output: Name: Sivaprasad, Age: 88, Email: sivaprasad@example.com
userProfile.age = 99;
console.log(userProfile.getProfile()); // Output: Name: Sivaprasad, Age: 88, Email:
console.log(userProfile.getProfile()); // Output: Name: Sivaprasad, Age: 88, Email:
