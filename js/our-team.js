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
    "miski@changemaker.com",
    "innovatetech_big.jpg"
    )

    let edwin_object = new Staff(
    "Edwin Andermyr",
    "Operation Manager",
    "Paris",
    "edwin@changemaker.com",
    "./../img/our-team/brad2.png"
    )

    let davide_object = new Staff(
    "Davide Baldi",
    "Operation Manager",
    "Rome",
    "davide@changemaker.com",
    "./../img/our-team/mario.png"
    )

    let diyako_object = new Staff(
    "Diyako Qadri",
    "Operation Manager",
    "Stockholm",
    "diyako@changemaker.com",
    "./../img/our-team/brad.png"
    )

    let robel_object = new Staff(
    "Robel Girmay",
    "Operation Manager",
    "Stockholm",
    "robel@changemaker.com",
    "./../img/our-team/will.png"
    )

    let staff = davide_object;
  
    const showStaffInfo = (staff) => {
      const staffContent = $('.main-content').empty();
      
        const profile= $(".main-content").append(`
        <div class="staff-container">
          <img class="staff-img" src="${staff.img}" alt="${staff.name}">
          <h1 class="staff-text">${staff.name} </h1>  
          <h2 class="staff-role"> ${staff.role} </h2>
          <p class="staff-email"> Email: ${staff.email} </p> 
          <p class="staff-location"> Location ${staff.location} </p> 
          </div> 
        </div>
      `)
      
  
      $(".about-me").append(profile);
  
    };
    showStaffInfo(staff);
  
    
  
  });