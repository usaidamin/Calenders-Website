let navbar = document.getElementById("navbar")

navbar.innerHTML = `
 <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a  class="navbar-brand">
            <img src="rayana.jpg" height="150px" width="200px" class="rounded-circle" alt="...">
          </a>
         
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul  class="navbar-nav ms-auto mb-md-0 mb-lg-0 " >
              <li class="nav-item">
                <a class="nav-link active" style="font-size: x-large;" aria-current="page" href="homepage.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" style="font-size: x-large;" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" style="font-size: x-large;" href="menupage.html">Menu</a>
              </li>
                <li class="nav-item" >
                  <a class="nav-link active" style="font-size: x-large;" href="product.html">Product</a>
                </li>
              <li class="nav-item dropdown">
                <a class="nav-link active dropdown-toggle" href="#" style="font-size: x-large;" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Features
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="calendars.html">CLAENDARS</a></li>
                  <li><a class="dropdown-item" href="Diary.html">DIARIES AND JOURNAL</a></li>
                  <li><a class="dropdown-item" href="staionary.html">STATIONARY</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" style="font-size: x-large;" href="contactpage.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>`