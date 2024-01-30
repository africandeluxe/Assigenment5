$(() => {
    function Staff (name, role, location, email, img) {
      this.name = name;
      this.role = role;
      this.location = location;
      this.email= email;
      this.img = img;
    }
  
    let miski_object = new Staff(
    "Miski Mohamed Ahmed",
    "Operation Manager",
    "Paris",
    "./../img/companies-logo/InnovateTech Solutions-logos.jpeg",
    "miski@changemaker.com",
    "innovatetech_big.jpg"
    )

    let edwin_object = new Staff(
    "Edwin Andermyr",
    "Operation Manager",
    "Paris",
    "./../img/companies-logo/InnovateTech Solutions-logos.jpeg",
    "miski@changemaker.com",
    "innovatetech_big.jpg"
    )

    let davide_object = new Staff(
    "Davide Baldi",
    "Operation Manager",
    "Rome",
    "./../img/companies-logo/InnovateTech Solutions-logos.jpeg",
    "miski@changemaker.com",
    "innovatetech_big.jpg"
    )

    let diyako_object = new Staff(
    "Diyako Qadri",
    "Operation Manager",
    "Stockholm",
    "./../img/companies-logo/InnovateTech Solutions-logos.jpeg",
    "miski@changemaker.com",
    "innovatetech_big.jpg"
    )

    let robel_object = new Staff(
    "Robel Girmay",
    "Operation Manager",
    "Stockholm",
    "./../img/companies-logo/InnovateTech Solutions-logos.jpeg",
    "miski@changemaker.com",
    "innovatetech_big.jpg"
    )

    
  
    let ourStaff = [davide_object];
  
    const showStaffInfo = (Staff) => {
      const staffContent = $('.main-content').empty();
      Staff.forEach((Staff) => {
        const profile= $(".main-content").append(`
        <div class="company-container">
          <img class="company-img" src="${Staff1.smallimg}" alt="${Staff1.name}">
          <div class="company-text">  
          <h2 class="company-title"> ${Staff1.name} </h2> 
          <p class="company-location"> Location ${Staff1.location} </p> 
          </div> 
        </div>
      `)
      $(".main-content").find('.read-more').on('click', () => {
        
  
        
  
        
      });
  
      companyContent.append(profile);
  
      });
    };
  
    
  
  });