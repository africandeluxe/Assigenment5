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
      "innovatetech_big.jpg"
      )
  
      let edwin_object = new Staff(
      "Edwin Andermyr",
      "Operation Manager",
      "Paris",
      "edwin@changemaker.com",
      "./../img/our-team/brad2.png",
      `<iframe class= "map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.6408307283114!2d2.329676976678452!3d48.88412317133567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e4eff6f0c89%3A0xf44e90af87482111!2sMoulin%20Rouge!5e0!3m2!1sit!2sse!4v1706616292265!5m2!1sit!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  
      )
  
      let davide_object = new Staff(
      "Davide Baldi",
      "Operation Manager",
      "Rome",
      "davide@changemaker.com",
      "./../img/our-team/mario.png",
      `<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.123074180057!2d12.48965597632581!3d41.8902101712405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sse!4v1706615163021!5m2!1sit!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
      )
   
      let diyako_object = new Staff(
      "Diyako Qadri",
      "Operation Manager",
      "Stockholm",
      "diyako@changemaker.com",
      "./../img/our-team/johnny.png",
      `<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2036.259720179957!2d18.382925077276177!3d59.31191997460588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f81272f2b3189%3A0xf965281351a280db!2sNordic%20Wellness%20V%C3%A4rmd%C3%B6%20Gustavsbergsv%C3%A4gen!5e0!3m2!1sit!2sse!4v1706617257553!5m2!1sit!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
      )
  
      let robel_object = new Staff(
      "Robel Girmay",
      "Operation Manager",
      "Stockholm",
      "robel@changemaker.com",
      "./../img/our-team/will.png",
      `<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.2953199697615!2d18.086525494426628!3d59.328023209157074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d546d8329af%3A0xcff09af1b4c13241!2sRegalskeppet%20Vasa!5e0!3m2!1sit!2sse!4v1706616755280!5m2!1sit!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
      )

    let staff = robel_object;
  
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