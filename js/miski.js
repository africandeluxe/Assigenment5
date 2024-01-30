$(() => {
  function Staff(name, role, location, smallimg,) {
    this.name = name;
    this.role = role;
    this.location = location;
    this.smallimg = smallimg;
  }

  let Staff1 = new Staff(
    "Miski Mohamed Ahmed",
    "Operation Manager",
    "Paris",
    "./../img/companies-logo/InnovateTech Solutions-logos.jpeg",
    "innovatetech_big.jpg"
  );

  let ourStaff = [Staff1];//inserire in reset per ripristinare????

  const showStaffInfo = (Staffs) => {
    const staffContent = $('.main-content').empty();
    Staffs.forEach((Staff) => {
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
      const modalContent = $(`
        <div class="modal" id="modal">
          <div class="modal-header">
          <img class="company-img" src="${Staff1.smallimg}" alt="${Staff1.name}">
            <div class="title">${Staff1.name} </div>
            <button class="close-button">&times;</button>
          </div>
          <div class="modal-body">
          <h3>${Staff1.role}</h3>
          </div>
        </div>
        <div class="active" id="overlay"></div>
      `);

      modalContent.find('.close-button, #overlay').on('click', () => {
        modalContent.removeClass('active');
        $('#overlay').removeClass('active');
        showStaffInfo(ourStaffs);
      });

      staffContent.empty().append(modalContent);
      modalContent.addClass('active');
      $('#overlay').addClass('active');
    });

    companyContent.append(profile);

    });
  };

  showCompanyInfo(ourCompanies); 

});
