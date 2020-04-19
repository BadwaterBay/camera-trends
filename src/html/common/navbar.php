<!-- Navbar -->
<style>
.navbar {font-family: 'Ubuntu', sans-serif;}
</style>
<nav class="navbar sticky-top navbar-expand-sm
<?php
  if (!defined('NAVBAR_COLOR') || NAVBAR_COLOR=='lightdark') {
    echo ' navbar-dark bg-lightdark';
  }
  elseif (NAVBAR_COLOR == 'dark') {
    echo ' navbar-dark bg-deepdark';
  }
  elseif (NAVBAR_COLOR == 'light') {
    echo ' navbar-light bg-light';
  }
  else echo ' navbar-dark bg-lightdark';
?>
">
  <a class="navbar-brand fade-in-fast" href= "<?php echo PATH;?>">Skyler Dong</a>
  <button class="navbar-toggler fade-in-fast" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span><i class="fas fa-grip-lines" style="font-size:30px;"></i></i></span>
  </button>
  <div class="collapse navbar-collapse fade-in-fast" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href= "<?php if ($_SERVER["SERVER_NAME"]=="localhost") {echo PATH,'/app';} else {echo 'https://app.skylerdong.com';} ?>">App</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href= "<?php echo PATH; ?>/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href= "<?php echo PATH; ?>/blog">Blog</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href= "<?php echo PATH; ?>/photography">Photography</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href= "<?php echo PATH; ?>/contact">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#modalSearch" data-toggle="modal" data-target="#modalSearch"><i class="fas fa-search"></i></a>
      </li>
    </ul>
  </div>
</nav>
