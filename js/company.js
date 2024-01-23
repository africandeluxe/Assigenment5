$(() => {
  function Student(
    name,
    lastname,
    title,
    location,
    fulltime,
    about,
    experience,
    portfolio
  ) {
    (this.name = name),
    (this.lastname = lastname),
      (this.title = title),
      (this.location = location),
      (this.fulltime = fulltime),
      (this.about = about),
      (this.experience = experience),
      (this.portfolio = portfolio);
  }

  let Sofia = new Student(
    'Sofia',
    "Andermyr",
    'App Developer',
    'Srockholm',
    true,
    "My interest for web design started in 2010 after I specialised in graphic design at high school. I created a few amateur websites to experiment and broaden my knowledge in web design. After working in fast food, and travelling through Europe and Asia, I decided to pursue my interest by studying Interaction Design at university.After completing my bachelor's degree and working as a UI/UX designer, I began to show a keen eye for coding, therefore decided to combine my two favourite interests, design and programming.",
    'During this internship I was given more responsibility in projects which involved direct communication with clients, working together in a team with people in different roles and coding challenging designs'
  );

  let arrayStudentObject = [Sofia];

  const showStudentInfo = Student => {
    $('.student-content')
      .empty()
      .append(
        `   
        <div class="profile">
        <img class="student-img" src="./../img/student-profile-img/${Student.name}.jpg" alt="">
        <h4>${Student.name} ${Student.lastname}</h4>
        <p>${Student.title}</p>
        </div>
            `
      );

     
  };
  showStudentInfo(Sofia);
});
