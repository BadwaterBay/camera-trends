<?php
  define("HEADER_TYPE",'blogpost');
  // define("BG_IMG_MD",'medium/SD__A7T3305_Web.jpg');
  // define("BG_IMG_LG",'large/SD__A7T3305_Web_LG.jpg');
  define("SITE_TITLE",'Camera Brand Search Trends of Canon, Nikon and Sony');
  define("SITE_SUBTITLE",'Comparing Google keyword search trends of camera, DSLR and mirrorless across Canon, Nikon and Sony');
  define("SITE_SUBSUBTITLE",'Posted on April 11, 2020');
?>
<!DOCTYPE html>
<?php
  include_once '../../common/config.php';
  include_once '../../common/htmlTag.php';
?>
<head>
<?php include_once '../../common/head.php'; ?>
<title>Camera Brand Trends of Canon, Nikon and Sony | App - Skyler Dong</title>
<link rel="preload" type="text/css" href="styles.css" as="style" onload="this.rel='stylesheet'">
</head>
<body>
<?php
  include_once '../../common/navbar.php'; 
  // include_once '../../common/header.php';
?>
<!-- Main Content -->
<div class="container-xl maincontent">
  <h1>Camera Brand Search Trends of Canon, Nikon and Sony</h1>
    <div class="row">
      <div class="col-12 mb-3 col-md-10">
        <p><a href="https://github.com/tangaw" target="_blank">Aaron Tang</a> and I wrote <a href="https://skylerdong.com/coding/scrape-google-trends.php" target="_blank">a piece of code in Python to scrape Google trends data</a>. Here we present the data.</p>
        <p>We are interested in the search trends of 3 major camera brands (Canon, Nikon and Sony).</p>
        <!-- <p>We further subdivide cameras into 3 keywords: camera (in general), DSLR and mirrorless.<p> -->
        <p>Hence, we scraped the Google search trend data of 9 sets of keywords from January 2006 to March 2020 at a monthly resolution:</p>
        <ul>
          <li>"'Canon' 'camera'"</li>
          <li>"'Nikon' 'camera'"</li>
          <li>"'Sony' 'camera'"</li>
          <li>"'Canon' 'dslr'"</li>
          <li>"'Nikon' 'dslr'"</li>
          <li>"'Sony' 'dslr'"</li>
          <li>"'Canon' 'mirrorless'"</li>
          <li>"'Nikon' 'mirrorless'"</li>
          <li>"'Sony' 'mirrorless'"</li>
        </ul>
        <p>The inner single quotes are used to force Google not to omit either keyword during scraping.</p>
        <div class="mb-3 text-center">
          <h3>Google search trends of "camera" by brand</h3>
        </div>
        <div id="plot-camera"></div>
        <div class="mb-3 text-center">
          <h3>Google search trends of "DSLR" by brand</h3>
        </div>
        <div id="plot-dslr"></div>
        <div class="mb-3 text-center">
          <h3>Google search trends of "mirrorless" by brand</h3>
        </div>
        <div id="plot-mirrorless"></div>
        <div class="mb-3 text-center">
          <h3>Annual revenues of camera divisions by brand</h3>
        </div>
        <div id="plot-revenue"></div>
        <p class="footnote">This is work in progress...</p>
        <!-- <div id="plot-map"></div> -->
      </div>
  </div><!--row-->
</div><!--maincontent-->
<?php include_once '../../common/footer.php'; ?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.1/d3.min.js"></script>
<script defer src="app.js"></script>
<script defer src="app_1.js"></script>
</body>
</html>
