function skilsMember() {
  var skills = ["HTML", "CSS", "JS", "React"];
  var member = {
    name: "John",
    age: 23,
    skills: skills,
  };
  console.log(member.skills);
  console.log(member.skills[1]);
  console.log(member.skills[3]);
}