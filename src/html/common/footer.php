<!--Footer-->
<footer>
<div class="container">
    <div class="row">
      <div class="col-12 mb-3 text-left col-md-8">
        <span><a href="<?php echo PATH;?>/contact">Contact</a></span>
        <span>&nbsp;&#124;&nbsp;</span>
        <span><a href="<?php echo PATH;?>/about/#copyright-notice">Copyright Notice</a></span>
      </div>
      <div class="d-flex col-12 justify-content-left col-md-4 justify-content-md-end">
        <ul class="social-icon">
          <li><a href="mailto:skyler@skylerdong.com"><img class="fa-icon" src='<?php echo PATH;?>/images/icon/<?php
            if (!defined('FOOTER_COLOR') || FOOTER_COLOR=='dark'){
              echo 'Envelope_icon_white.png';
            }
            elseif (FOOTER_COLOR=='lightdark' || FOOTER_COLOR=='light'){
              echo 'Envelope_icon.png';
            }
            else echo 'Envelope_icon_white.png';
          ?>' alt="Email"/></a>
          </li>
          <li><a href="https://www.linkedin.com/in/dongt/" target="_blank"><img src='<?php echo PATH;?>/images/icon/<?php
            if (!defined('FOOTER_COLOR') || FOOTER_COLOR=='dark'){
              echo 'LI_icon_white.png';
            }
            elseif (FOOTER_COLOR=='lightdark' || FOOTER_COLOR=='light'){
              echo 'LI_icon.png';
            }
            else echo 'LI_icon_white.png';
          ?>' alt="LinkedIn"/></a>
          </li>
          <li><a href="https://www.instagram.com/skyler.dong.art/" target="_blank"><img src='<?php echo PATH;?>/images/icon/<?php
            if (!defined('FOOTER_COLOR') || FOOTER_COLOR=='dark'){
              echo 'IG_icon_white.png';
            }
            elseif (FOOTER_COLOR=='lightdark' || FOOTER_COLOR=='light'){
              echo 'IG_icon.png';
            }
            else echo 'IG_icon_white.png';
          ?>' alt="Instagram"/></a>
          </li>
        </ul>
      </div>
      <div class="col-12 text-left"><?php
        if (!defined('COPYRIGHT_NOTICE')) {
          echo 'Copyright &copy; ',date("Y"),' Skyler Dong.';
        }
        elseif (COPYRIGHT_NOTICE=='Images') {
          echo 'All images &copy; 2013&#8211;',date("Y"),' Skyler Dong. All rights reserved.';
        }
        else echo 'Copyright &copy; ',date("Y"),' Skyler Dong.';
        ?></div>
    </div><!--row-->
</div><!--container-->
</footer>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.0/js/bootstrap.min.js"></script>
<script src="<?php echo PATH; ?>/js/lozad.min.js"></script>
<script src="<?php echo PATH; ?>/js/prism.min.js"></script>
<script src="<?php echo PATH; ?>/js/<?php 
  echo ($_SERVER["SERVER_NAME"] == "localhost") ? 'script.js' : 'script.min.js';?>"></script>
