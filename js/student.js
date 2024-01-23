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

  const locationDropdown = () => {
    $(document).ready(function () {
      $("#locationDropdownBtn").on("click", function () {
        $("#location").toggleClass("show");
      });

      // Close the dropdown menu if the user clicks outside of it
      $(document).on("click", function (event) {
        if (!$(event.target).closest(".dropdown-filter").length) {
          $(".location-dropdown").removeClass("show");
        }
      });
    });
  };

  locationDropdown();
});
