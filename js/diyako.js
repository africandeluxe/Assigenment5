$(() => {
    function Staff (name, role, location, email, img, map) {
      this.name = name;
      this.role = role;
      this.location = location;
      this.email= email;
      this.img = img;
      this.map= map;
    }
 
    let diyako_object = new Staff(
    "Diyako Qadri",
    "Operation Manager",
    "Stockholm",
    "diyako@changemaker.com",
    "./../img/our-team/johnny.png",
    `<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.6076430683419!2d18.426705057721826!3d59.31388095864911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46f57fd6efbfe5f7%3A0xb79287bfa3060d63!2zQ3Jvc3NmaXQgVsOkcm1kw7Y!5e0!3m2!1sen!2sse!4v1706699730934!5m2!1sen!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    )

    let staff = diyako_object;
  
    const showStaffInfo = (staff) => {
      const staffContent = $('.main-content').empty();
      
        const profile= $(".main-content").append(`
        <div class="staff-container">
          <img class="staff-img" src="${staff.img}" alt="${staff.name}">
          <h1 class="staff-text">${staff.name} </h1>  
          <h3 class="staff-role"> ${staff.role} </h3>
          <p class="staff-email"> Email: ${staff.email} </p> 
          <p class="staff-location"> Location ${staff.location} </p> 
          ${staff.map}
          </div> 
        </div>
      `)
      
      $(".about-me").append(profile);
  
    };
    showStaffInfo(staff);

  });