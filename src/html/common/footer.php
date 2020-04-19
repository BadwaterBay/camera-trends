<!--Footer-->
<button id="back-to-top-button" class="hvr-grow">
  <span class="fa-stack">
    <i class="fas fa-circle fa-stack-2x"></i>
    <i class="fas fa-arrow-up fa-stack-2x"></i>
  </span>
</button>
<!-- Search Modal -->
<div id="modalSearch" class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title"><i class="fas fa-search"></i></h4>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="gcse-search"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<footer>
<div class="container">
  <div class="row">
    <div class="d-flex col-10 justify-content-start">
      <ul class="footer-icon">
        <li class="pr-2 pr-sm-3 hvr-float"><a href="mailto:skyler@skylerdong.com"><i class="far fa-envelope"></i></a>
        </li>
        <li class="pr-2 pr-sm-3 hvr-float"><a href="https://www.linkedin.com/in/dongt/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        </li>
        <li class="pr-2 pr-sm-3 hvr-float"><a href="https://github.com/dongskyler" target="_blank"><i class="fab fa-github"></i></a>
        </li>
        <!--<li class="pr-2 pr-sm-3 hvr-float"><a href="https://gitlab.com/dongskyler" target="_blank"><i class="fab fa-gitlab"></i></a>
        </li>-->
        <li class="pr-2 pr-sm-3 hvr-float"><a href="https://www.instagram.com/skyler.dong.art/" target="_blank"><i class="fab fa-instagram"></i></a>
        </li>
      </ul>
    </div>
    <div class="col-10 text-left mb-2">
      <span><a href="<?php echo PATH;?>/legal/copyright.php">Copyright&nbsp;Notice</a></span>
      <span class="pipe-footer">&#124;</span>
      <span><a href="<?php echo PATH;?>/legal/privacy.php">Privacy&nbsp;Policy</a></span>
      <span class="pipe-footer">&#124;</span>
      <span><a href="<?php echo PATH;?>/sitemap">Site&nbsp;Map</a></span>
    </div>
    <div class="col-10 text-left mb-2"><?php
      if (!defined('COPYRIGHT_NOTICE')) {
        echo 'Copyright &copy; ',date("Y"),' Skyler Dong.';
      }
      elseif (COPYRIGHT_NOTICE=='Images') {
        echo 'All&nbsp;images&nbsp;&copy; 2013&#8211;',date("Y"),' Skyler&nbsp;Dong. All&nbsp;rights&nbsp;reserved.';
      }
      else echo 'Copyright&nbsp;&copy; ',date("Y"),' Skyler&nbsp;Dong.';
      ?></div>
  </div><!--row-->
</div><!--container-->
</footer>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.14.0/lozad.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/js/bootstrap.min.js"></script>
<script type="text/javascript" defer src="<?php echo PATH; ?>/js/prism.min.js"></script>
<script type="text/javascript" defer src="<?php echo PATH; ?>/js/<?php 
  echo ($_SERVER["SERVER_NAME"] == "localhost") ? 'script.js' : 'script.min.js';?>"></script>
<script type="text/javascript" defer src="https://cse.google.com/cse.js?cx=005518303321825845417:jw3lu6ptjrw"></script>
