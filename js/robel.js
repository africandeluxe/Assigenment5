$(() => {
  function Staff(name, role, location, email, img, map) {
    this.name = name;
    this.role = role;
    this.location = location;
    this.email = email;
    this.img = img;
    this.map = map;
  }

  let robel_object = new Staff(
    "Robel Girmay",
    "Operation Manager",
    "Stockholm",
    "robel@changemaker.com",
    "./../img/our-team/will.png",
    `<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.2953199697615!2d18.086525494426628!3d59.328023209157074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d546d8329af%3A0xcff09af1b4c13241!2sRegalskeppet%20Vasa!5e0!3m2!1sit!2sse!4v1706616755280!5m2!1sit!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  let staff = robel_object;

  const showStaffInfo = (staff) => {
    const staffContent = $(".main-content").empty();

    const profile = $(".main-content").append(`
        <div class="staff-container">
          <img class="staff-img" src="${staffe.image}" alt="${staff.name}"> 
          <h3 class="staff-role"> ${staff.role} </h3>
          <p class="staff-email"> Email: ${staff.email} </p> 
          <p class="staff-location"> Location ${staff.location} </p> 
          ${staff.map}
          </div> 
        </div>
      `);

    $(".about-me").append(profile);
  };
  showStaffInfo(staff);
});
