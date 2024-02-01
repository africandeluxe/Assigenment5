$(() => {
  function Staff (name, role, location, email, img, map) {
    this.name = name;
    this.role = role;
    this.location = location;
    this.email= email;
    this.img = img;
    this.map= map;
  }

  let miski_object = new Staff(
  "Miski Mohamed Ahmed",
  "Operation Manager",
  "Paris",
  "miski@changemaker.com",
  "./../img/our-team/beyonce.png",
  `<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991626110944!2d2.2919063766770704!3d48.858370071332224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1sit!2sse!4v1706678123344!5m2!1sit!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  )

  let staff = miski_object;

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