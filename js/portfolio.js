document.addEventListener('DOMContentLoaded', function() {
  const filterItems = document.querySelectorAll('.filter-item');
  const items = document.querySelectorAll('.item');

  filterItems.forEach(item => {
    item.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');

      // Remove 'active' class from all filter items
      filterItems.forEach(filterItem => filterItem.classList.remove('active'));

      // Add 'active' class to the clicked filter item
      this.classList.add('active');

      // Show/hide items based on the filter value
      items.forEach(item => {
        console.log(item)
        const itemValue = item.getAttribute('data-value');
        if (filterValue === 'all' || filterValue === itemValue) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    });
  });
});