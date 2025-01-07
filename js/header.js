    const dropdownToggles = document.querySelectorAll('.nav-item .dropdown-toggle');
    console.log("hahahah")
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
            const targetSubmenu = toggle.nextElementSibling; // Tìm submenu kế tiếp

            if (targetSubmenu) {
                // Kiểm tra nếu submenu đã hiển thị
                const isVisible = targetSubmenu.classList.contains('show');

                // Đóng tất cả các submenu khác
                document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                    menu.classList.remove('show');
                });

                // Chỉ mở submenu được nhấn
                if (!isVisible) {
                    targetSubmenu.classList.add('show');
                }
            }
        });
    });

    // Đóng submenu khi nhấn bên ngoài
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });
