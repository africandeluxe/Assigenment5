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

  const setupDropdown = (buttonId, divId) => {
    $(document).ready(function () {
      $(buttonId).on("click", function () {
        $(divId).toggleClass("show");
      });

      // Close the dropdown menu if the user clicks outside of it
      $(document).on("click", function (event) {
        if (!$(event.target).closest(buttonId).length) {
          $(divId).removeClass("show");
        }
      });
    });
  };

  setupDropdown("#locationDropdownBtn", "#location");
  setupDropdown("#roleDropdownBtn", "#role");
});
