$(() => {
  function Company(name, role, location, fulltime, description, responsibilities, requirements, bonus, smallimg, bigimg) {
    this.name = name;
    this.role = role;
    this.location = location;
    this.fulltime = fulltime ? "Yes" : "No";
    this.description = description;
    this.responsibilities = responsibilities;
    this.requirements = requirements;
    this.bonus = bonus;
    this.smallimg = smallimg;
    this.bigimg = bigimg;
  }

  let Company1 = new Company(
    "InnovateTech Solutions",
    "Front End Developer",
    "Stockholm",
    true,
    "InnovateTech Solutions is a dynamic tech company pushing the boundaries of innovation. Join our team to work on cutting-edge projects and make a lasting impact in the world of technology.",
    "As a Senior Software Developer, you will lead the development of complex software solutions, mentor junior developers, and contribute to the overall success of our projects.",
    "Requirements:\n- Master's degree in Computer Science\n- Extensive experience in full-stack development\n- Leadership skills and ability to work in a collaborative environment",
    "Competitive salary, stock options, and professional development opportunities.",
    "./../img/companies-logo/InnovateTech Solutions-logos.jpeg",
    "innovatetech_big.jpg"
  );

  let ourCompanies = [Company1, Company2, Company3, Company4, Company5, Company6, Company7, Company8, Company9, Company10];//inserire in reset per ripristinare????

  const showCompanyInfo = (companies) => {
    const companyContent = $('.main-content').empty();
    companies.forEach((company) => {
      const profile= $(".main-content").append(`
      <div class="company-container">
        <img class="company-img" src="${company.smallimg}" alt="${company.name}">
        <div class="company-text">  
        <h2 class="company-title"> ${company.name} </h2> 
        <p class="company-role"> We are looking for a ${company.role} </p>
        <p class="company-location"> Location ${company.location} </p>  
        <p class="company-fulltime"> Full-time: ${company.fulltime} </p> 
        <p class="company-description"> ${company.description} </p>
        <button class="read-more">View Profile</button>
        </div> 
      </div>
    `)
    $(".main-content").find('.read-more').on('click', () => {
      const modalContent = $(`
        <div class="modal" id="modal">
          <div class="modal-header">
          <img class="company-img" src="${company.smallimg}" alt="${company.name}">
            <div class="title">${company.name} </div>
            <button class="close-button">&times;</button>
          </div>
          <div class="modal-body">
          <h3>${company.role}</h3>
            </br>
            <p>Requirements: ${company.requirements}</p>
            </br>
            <p>Bonus: ${company.bonus}</p>
          </div>
        </div>
        <div class="active" id="overlay"></div>
      `);

      modalContent.find('.close-button, #overlay').on('click', () => {
        modalContent.removeClass('active');
        $('#overlay').removeClass('active');
        showCompanyInfo(ourCompanies);
      });

      companyContent.empty().append(modalContent);
      modalContent.addClass('active');
      $('#overlay').addClass('active');
    });

    companyContent.append(profile);

    });
  };

  showCompanyInfo(ourCompanies); 

});
