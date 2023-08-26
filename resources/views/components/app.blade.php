<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>{{env('APP_NAME')}}</title>
	<link rel="icon" href="assets/images/favicon/icon.png">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;display=swap" rel="stylesheet">
	<link rel="stylesheet" href="assets/css/all.min.css">
	<link rel="stylesheet" href="assets/css/slick.css">
	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/style.css">
	<link rel="stylesheet" href="assets/css/media-query.css">
</head>
<body>
	<div class="site_content">
		<!-- Preloader Start -->
		<div class="loader-mask">
			<div class="loader">
				<div></div>
				<div></div>
			</div>
		</div>
		<!-- Preloader End -->
		<!-- Header Section Start -->
		<header id="top-navbar" class="top-navbar">
			<div class="container">
				<div class="top-navbar_full">
					<div class="menu-btn d-flex align-items-center">
						<a href="#offcanvasExample" data-bs-toggle="offcanvas"><img src="assets/images/homepage2/setting-icon.svg" alt="menu-icon"></a>
					</div>
					<div class="brookwood-txt d-flex align-items-center">
						<p class="brookwood-txt">{{env('APP_NAME')}}</p>
					</div>
					<div>
						<!--<ul class="homepage-cart-sec">
							<li><a href="search-page.html"><img src="assets/images/homepage/search-icon.svg" alt="search-icon"></a></li>
							<li class="pf-16"><a href="shopping-cart.html"><img src="assets/images/homepage/cart-icon.svg" alt="cart-icon"><span class="cart-item">2</span></a></li>
						</ul>-->
					</div>
				</div>
			</div>
			<div class="navbar-boder"></div>
		</header>
		<!-- Header Section End -->
		<!-- Homepage2 Details Section Start -->
		<section id="homepage2-sec">

		</section>
		<!-- Homepage2 Details Section End -->
		<!-- Setting Menu Section Start -->
		<div class="menu-sidebar details">
			<div class="offcanvas offcanvas-start custom-offcanvas-noti" id="offcanvasExample">
				<div class="offcanvas-header custom-header-offcanva">
					<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div class="offcanvas-body">
					<div class="dropdown mt-3">
						<h2 class="app-setting-title">Atalhos</h2>
						<div class="app-setting-page-full mt-24">
							<div class="app-setting-top">
								<a href="#">
									<div class="app-setting-menu-start mt-16">
										<div class="menu-icon">
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<mask id="mask0_1_4844" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
													<rect width="24" height="24" fill="white"/>
												</mask>
												<g mask="url(#mask0_1_4844)">
													<path d="M8.12602 14C8.57006 15.7252 10.1362 17 12 17C13.8638 17 15.4299 15.7252 15.874 14M11.0177 2.764L4.23539 8.03912C3.78202 8.39175 3.55534 8.56806 3.39203 8.78886C3.24737 8.98444 3.1396 9.20478 3.07403 9.43905C3 9.70352 3 9.9907 3 10.5651V17.8C3 18.9201 3 19.4801 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4801 21 18.9201 21 17.8V10.5651C21 9.9907 21 9.70352 20.926 9.43905C20.8604 9.20478 20.7526 8.98444 20.608 8.78886C20.4447 8.56806 20.218 8.39175 19.7646 8.03913L12.9823 2.764C12.631 2.49075 12.4553 2.35412 12.2613 2.3016C12.0902 2.25526 11.9098 2.25526 11.7387 2.3016C11.5447 2.35412 11.369 2.49075 11.0177 2.764Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
												</g>
											</svg>
										</div>
										<div class="menu-txt-app">
											<h3 class="app-txt-title">Início</h3>
										</div>
									</div>
									<div class="border-bottom-app mt-8"></div>
								</a>

							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="dark-overlay"></div>
		</div>
		<!-- Setting Menu Section End -->

	</div>
	<script src="assets/js/jquery-min-3.6.0.js"></script>
	<script  src="assets/js/slick.min.js"></script>
	<script  src="assets/js/bootstrap.bundle.min.js"></script>
	<script  src="assets/js/custom.js"></script>
	<script  src="assets/js/app-core.js"></script>
</body>
</html>

