$(() => {
  function Company(name, role, location, job_description, fulltime, responsibilities, requirements, bonus, smallimg, bigimg) {
    (this.name = name),
      (this.role = role),
      (this.location = location),
      (this.fulltime = fulltime),
      (this.job_description = job_description),
      (this.responsibilities = responsibilities),
      (this.requirements = requirements),
      (this.bonus = bonus),
      (this.smallimg = smallimg),
      (this.bigimg = bigimg);
  }

  const setupDropdown = (buttonId, divId) => {
    $(document).ready(function () {
      $(buttonId).on("click", function () {
        $(divId).toggleClass("show");
      });

      // Close the dropdown menu if the user clicks outside of it
      $(document).on("click", function (event) {
        if (!$(event.target).closest(buttonId).length) {
          $(divId).removeClass("show");
        }
      });
    });
  };

  setupDropdown("#locationDropdownBtn", "#location");
  setupDropdown("#roleDropdownBtn", "#role");
  let Eddy = new Student(
    'Eddy Markberg',
    'App Developer',
    'Stockholm',
    false,
    "My interest for web design started in 2010 after I specialised in graphic design at high school. I created a few amateur websites to experiment and broaden my knowledge in web design. After working in fast food, and travelling through Europe and Asia, I decided to pursue my interest by studying Interaction Design at university.After completing my bachelor's degree and working as a UI/UX designer, I began to show a keen eye for coding, therefore decided to combine my two favourite interests, design and programming.",
    'During this internship I was given more responsibility in projects which involved direct communication with clients, working together in a team with people in different roles and coding challenging designs.'
  );
  let Hicke = new Student(
    'Hicke Bärk',
    'Front End Developer',
    'Stockholm',
    true,
    "I've always liked web design in some form since childhood, but I didn't start pursuing an education of it until 2011 when I chose a graphic design course in high school. I coded a few rudimentory websites to get some experience in web design. After working in service, I decided to pursue Web Design and started studying Interaction Design at university. After finishing my studies with a bachelor's degree and working as a UI/UX designer, I started to get more and more used to coding and its many challenges, and thus felt that this truly can be the career I was meant for.",
    'During this internship I was given more responsibility in projects which involved direct communication with clients, working together in a team with people in different roles and coding challenging designs'
  );
  let Domnick = new Student(
    'Domnick Brûlée',
    'Front End Developer',
    'Paris',
    true,
    "Growing up in a household with multiple programmers, I have had an interest in it instilled at a young age. I have been programming as a hobby since high school and made wesites for fun for my friends, with increasingly complexity as time went on. After gratuating, I have been working service jobs before I eventually started studying to become a professional Front-End Developer. I have a mix of good traits learned from both being self taught as well as taught formally.",
    'I know how to work efficiently in solitude and know how to be responsible and outgoing when working with a team.'
  );
  let Santuzza = new Student(
    'Santuzza Marcello',
    'Front End Developer',
    'Rome',
    true,
    "My interest in programming started just after graduating high school, and I quickly started moving towards learning as much as I could on the subject. After some months of self learning while working part time, I applied for a school in Rome and I made strong strides in learning about HTML, CSS as well as Javacript.",
    'During my internship, I was well-liked by my peers and co-workers, and I gained invaluable experiences working with people on different levels.'
  );
  let Adriano = new Student(
    'Adriano Montana',
    'Back End Developer',
    'Rome',
    false,
    "After a decade in the restaurant business, I decided to make the switch to programming industry. I began coding in my free time before eventually enrolling in a course in Back-End.",
    'My experience in working restaurant came in handy when learning Back-End, as it can be broken down to problem solving. That experience was appriciated when I was working as an intern, and I was well-liked in that enviorment.'
  );
  let Giacinta = new Student(
    'Giacinta Offredi',
    'App Developer',
    'Rome',
    true,
    "I never really had an interest in programming, but it came easy and smoothly to me. So I simply kept at it until my skills flourished. I don't hate it, so I could focus on maximizing my efficiency as much as I could. What I do love is learning, and programming has so much to give and learn, so that part keeps me satisifed.",
    'I am constantly curious in every nearly every aspect of new things we learn in programming, so I am good at asking questions and getting good info from my superiors that I can use to further improve. I can be trusted with plenty of responsibility '
  );
  let Romaine = new Student(
    'Romaine Plourde',
    'App Developer',
    'Paris',
    true,
    "I gained an interest in programming during my high school years, and after graduating, it had become something I wanted to pursue in. I had to put that on hold for about 5 years to take care of my sickly mother, so I studied by myself on the side. After her passing, I wanted to focus on refining everything I know, and enrolled into a course.",
    'I have been described to work really well in supporting other people, and with communicating with clients.'
  );
  let Sigurd = new Student(
    'Sigurd Wikström',
    'App Developer',
    'Stockholm',
    false,
    "I have always had an fachination with programming, and after spending a lot of years working in marketing, I thought of making the switch to programming. My time studying it have proven to be very fruitful, as I feel I have an understanding of it.",
    'During this internship I was said to be really good at handling clients, and was trusted with the responsibility of being the presenter of the team I worked in.'
  );
  let Astrid = new Student(
    'Astrid Bärk',
    'Full Stack Developer',
    'Stockholm',
    true,
    "I started focus in on programming when I started in high school, and enrolled in a course soon after graduating. It was difficult at first, but the more I worked on it, the more everything made sense, and programming just clicked with me. I have been studying fulltime and want to work fuiltime solving the problems programming gives me. ",
    'I have a drive in becoming better and better in my chosen field, and have been described as a fast learner. My internship exposed me on what more there is to learn, and I am relishing the challenges this industry will provide me with.'
  );
  let Dimitri  = new Student(
    'Dimitri Giroux',
    'App Developer',
    'Paris',
    true,
    "General work around computers is something I've always been exposed to growing up. My mother worked in repairing computers, which taught me a lot on how they work. My father was a programmer, and taught me a lot about how coding works. Over the course of my childhood, web design is what I enjoyed the most, and thus was the part I spent the most time in learning by myself. By the time I was in in serious education to turn it into a career, I was far ahead of everyone else and made sure to help anyone out teacher did not have time to help.",
    'This taught me how to work as a team and pull every one up to reach my level. This translated well when working at my internship, where I was focused to service and learn from my team and was pulled up to their level'
  );
});
