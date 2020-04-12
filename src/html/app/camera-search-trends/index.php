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
<title>Camera Brand Search Trends of Canon, Nikon and Sony | App - Skyler Dong</title>
<link rel="preload" type="text/css" href="./inspector.css" as="style" onload="this.rel='stylesheet'">
</head>
<body>
<?php
  include_once '../../common/navbar.php'; 
  // include_once '../../common/header.php';
?>
<!-- Main Content -->
<div class="container-xl maincontent">
  <h1>Camera Brand Search Trends of Canon, Nikon and Sony</h1>
  <?php
  echo PATH;
  ?>
    <div class="row">
      <div class="col-12 mb-3 col-md-10">
        <p><a href="https://github.com/tangaw" target="_blank">Aaron Tang</a> and I wrote <a href="https://skylerdong.com/coding/scrape-google-trends.php" target="_blank">a piece of code in Python to scrape Google trends data</a>. Here we present the data. This is a work in progress.</p>
        <div class="mb-3"><h2>Canon camera search trends</h2></div>
        <div id="d3"></div>
      </div>
  </div><!--row-->
</div><!--maincontent-->
<script type="module" async>
  import define from "./app.js";
  import {Runtime, Library, Inspector} from "./runtime.js";
  const runtime = new Runtime();
  const main = runtime.module(define, Inspector.into("#d3"));
</script>
<?php include_once '../../common/footer.php'; ?>
</body>
</html>
