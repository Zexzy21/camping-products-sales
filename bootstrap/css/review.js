
  document.addEventListener('DOMContentLoaded', function() {
    // Rating stars interaction
    const stars = document.querySelectorAll('.rating-stars i');
    const ratingInput = document.getElementById('reviewRating');
    
    stars.forEach(star => {
      star.addEventListener('click', function() {
        const rating = this.getAttribute('data-rating');
        ratingInput.value = rating;
        
        // Update star display
        stars.forEach((s, index) => {
          if (index < rating) {
            s.classList.add('text-warning');
          } else {
            s.classList.remove('text-warning');
          }
        });
      });
      
      star.addEventListener('mouseover', function() {
        const hoverRating = this.getAttribute('data-rating');
        stars.forEach((s, index) => {
          if (index < hoverRating) {
            s.classList.add('text-warning');
          } else {
            s.classList.remove('text-warning');
          }
        });
      });
      
      star.addEventListener('mouseout', function() {
        const currentRating = ratingInput.value;
        stars.forEach((s, index) => {
          if (index < currentRating) {
            s.classList.add('text-warning');
          } else {
            s.classList.remove('text-warning');
          }
        });
      });
    });

    // Filter reviews by category
    const filterLinks = document.querySelectorAll('[data-category]');
    filterLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const category = this.getAttribute('data-category');
        const reviews = document.querySelectorAll('#reviewsContainer [data-category]');
        
        reviews.forEach(review => {
          if (category === 'all' || review.getAttribute('data-category') === category) {
            review.style.display = 'block';
          } else {
            review.style.display = 'none';
          }
        });
        
        // Update active filter button
        filterLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      });
    });

    // Submit review
    const submitBtn = document.getElementById('submitReview');
    if (submitBtn) {
      submitBtn.addEventListener('click', function() {
        const form = document.getElementById('reviewForm');
        if (form.checkValidity()) {
          // In a real app, you would send this data to your server
          const reviewToast = new bootstrap.Toast(document.getElementById('reviewToast'));
          reviewToast.show();
          
          // Close modal after a brief delay
          setTimeout(() => {
            const modal = bootstrap.Modal.getInstance(document.getElementById('addReviewModal'));
            modal.hide();
          }, 1500);
        } else {
          form.reportValidity();
        }
      });
    }
  });
