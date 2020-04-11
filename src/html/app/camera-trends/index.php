<?php
  define("HEADER_TYPE",'blogpost');
  // define("BG_IMG_MD",'medium/SD__A7T3305_Web.jpg');
  // define("BG_IMG_LG",'large/SD__A7T3305_Web_LG.jpg');
  define("SITE_TITLE",'DUMMY SUBTITLE');
  define("SITE_SUBTITLE",'DUMMY SUBTITLE');
  define("SITE_SUBSUBTITLE",'Posted on SOME DATE, 2020');
?>
<!doctype html>
<?php
  include_once '../../common/config.php';
  include_once '../../common/htmlTag.php';
?>
<head>
  <?php include_once '../../common/head.php'; ?>
  <title>Camera Trends DUMMY TITLE | App - Skyler Dong</title>
  <link rel="stylesheet" type="text/css" href= "./css/styles.css">
</head>
<body>
<?php
  include_once '../../common/navbar.php'; 
  // include_once '../../common/header.php';
?>
<!-- Main Content -->
<div class="container maincontent">
  <h1>Camera Trends DUMMY TITLE</h1>
    <div class="row">
      <div class="col-12 mb-3 col-md-10">
        <p><a href="https://github.com/tangaw" target="_blank">Aaron Tang</a> and I wrote a piece of code in Python to scrape Google trends data...</p>
        <div class="mb-3"><h2>h2 dummy heading</h2>
          <p>Dummy text: <?php echo PATH; ?></p>
        </div>
        <div>
          <div id="d3"></div>
        </div>
      </div>
  </div><!--row-->
</div><!--maincontent-->
<script src="./js/d3.js"></script>
<script src="https://d3js.org/d3.v4.js"></script>
<script src="./js/app.js"></script>
<!--<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/5.15.1/d3.min.js" defer></script>-->
<?php include_once '../../common/footer.php'; ?>
</body>
</html>
