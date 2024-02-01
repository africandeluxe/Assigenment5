$(() => {
    function Staff (name, role, location, email, img, map) {
      this.name = name;
      this.role = role;
      this.location = location;
      this.email= email;
      this.img = img;
      this.map= map;
    }
  
    let edwin_object = new Staff(
      "Edwin Andermyr",
      "Operation Manager",
      "Paris",
      "edwin@changemaker.com",
      "./../img/our-team/man.png",
      `<iframe class= "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.6408307283114!2d2.329676976678452!3d48.88412317133567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e4eff6f0c89%3A0xf44e90af87482111!2sMoulin%20Rouge!5e0!3m2!1sit!2sse!4v1706616292265!5m2!1sit!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    )
  
    let staff = edwin_object;
  
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