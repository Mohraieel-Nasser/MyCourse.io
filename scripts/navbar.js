document.addEventListener("DOMContentLoaded", () => {
  let navbar = document.querySelector(".navbar-component");
  navbar.innerHTML = `
  <nav class="navbar d-flex justify-content-between align-items-center">
        <!-- Left -->
        <div class="d-flex align-items-center">
            <a class="navbar-brand" href="./../index.html">
                <img src="imgs/Logo.png" alt="">
            </a>
            <div class="dropdown">
                <button class="btn navbar-browse dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    Browse
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="./../index.html">Home</a></li>
                    <li><a class="dropdown-item" href="./../search.html">All courses</a></li>
                    <li><a class="dropdown-item" href="./../register.html">Sign up</a></li>
                    <li><a class="dropdown-item" href="./../login.html">Login</a></li>
                </ul>
            </div>
        </div>

        <!-- Search -->
        <div class="search-container  d-none d-md-flex">
            <input type="text" placeholder="Search for course">
            <i class="fas fa-search"></i>
        </div>

        <!-- Right in mid & large screens -->
        <div class="d-flex align-items-center nav-icons  d-none d-sm-flex">
            <a href="./cart.html"><i style="color: #777;" class="fas fa-shopping-cart"></i></a>
            <!-- Notifications -->
            <div class="notification-wrapper position-relative">
                <i style="color: #777; cursor: pointer;" class="fas fa-bell"></i>
                <div class="notification-box position-absolute">
                    No notifications
                </div>
            </div>

            <!-- Avatar Dropdown -->
            <div class="dropdown">
                <img src="imgs/avatar.png" class="profile-img dropdown-toggle" data-bs-toggle="dropdown" alt="User">
                <div class="navbar-profile">
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="./../my-courses.html">My courses</a></li>
                        <li><a class="dropdown-item" href="./../profile.html">Profile</a></li>
                        <li><a class="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Right in small screens -->
        <div class="d-flex align-items-center nav-icons d-sm-none">
            <button class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                ☰
            </button>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="mobileMenu">
                <div class="offcanvas-header">
                    <div class="d-flex align-items-center gap-3">
                        <div class="offcanvas-profile">
                            <img src="imgs/avatar.png" class="rounded" alt="">
                        </div>
                        <h5 class="offcanvas-title display-4 m-0">Menu</h5>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>

                </div>
                <div class="offcanvas-body">
                    <!-- Search Bar -->
                    <div class="small-search-container mb-4">
                        <input type="text" placeholder="Search for course">
                        <i class="fas fa-search"></i>
                    </div>

                    <!-- Navigation Items -->
                    <div class="navbar-group-list">
                        <div class="navbar-group-item p-2"><a href="./../my-courses.html">My Courses</a></div>
                        <div class="navbar-group-item p-2"><a href="./../profile.html">Profile</a></div>
                        <div class="navbar-group-item p-2"><a href="#">Logout</a></div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
`;
});
