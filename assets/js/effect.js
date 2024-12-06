
document.addEventListener('DOMContentLoaded', function() {
    // Tạo một đối tượng IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show'); // Thêm class 'show' khi phần tử xuất hiện
        } else {
          entry.target.classList.remove('show'); // Xóa class 'show' khi phần tử không còn trong viewport
        }
      });
    });
  
    // Chọn tất cả các phần tử với class 'fade-in'
    const elements = document.querySelectorAll('.fade-in');
    
    // Áp dụng observer cho từng phần tử
    elements.forEach((el) => observer.observe(el));
  });
  