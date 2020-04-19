$(function () {
  // START: Do things when URL parameters present during page loading

  // Lozad
  const observer_1 = lozad('.lozad', {
    rootMargin: '0px', // syntax similar to that of CSS Margin
    threshold: 0 // ratio of element convergence
  });

  const observer_2 = lozad('.lozad', {
    rootMargin: '200px 0px', // syntax similar to that of CSS Margin
    threshold: 0 // ratio of element convergence
  });

  const observer_3 = lozad('.lozad', {
    rootMargin: '600px 0px', // syntax similar to that of CSS Margin
    threshold: 0 // ratio of element convergence
  });

  observer_1.observe();

  setTimeout(function () {
    observer_2.observe();
  }, 5000);

  setTimeout(function () {
    observer_3.observe();
  }, 10000);
  // END: Lozad

  // Photo gallery filtering
  const filterCat = document.querySelectorAll('.maincontent .filter-button');
  const filterE = document.querySelectorAll('.maincontent .filterE');

  filterCat.forEach(cat => {
    cat.addEventListener('click', () => {
      toggleFilterCat(cat);
      toggleFilterE(cat.dataset.class);
      let param = ("?category=").concat(cat.dataset.class);
      if (cat.dataset.class == 'all') {
        param = window.location.pathname;
      }
      window.history.replaceState(null, null, param);
    });
  })

  function toggleFilterCat(activeCat) {
    filterCat.forEach(cat => {
      if (activeCat.dataset.class === cat.dataset.class) {
        cat.classList.add('active');
      }
      else { cat.classList.remove('active'); }
    })
  }

  function toggleFilterE(dataClass) {
    if (dataClass === 'all') {
      filterE.forEach(e => {
        e.style.display = 'block';
      })
    }
    else {
      filterE.forEach(e => {
        if (e.dataset.class.includes(dataClass)) {
          e.style.display = 'block';
        }
        else { e.style.display = 'none'; }
      })
    }
  }

  // END: Photo gallery filtering

  // Query URL parameters
  const queryURLString = window.location.search;
  // console.log(queryURLString);
  const urlParams = new URLSearchParams(queryURLString);
  const category_url = urlParams.get('category');
  // console.log(category_url);
  const photo_url = urlParams.get('photo');
  // console.log(photo_url);

  if (typeof $meta_og_image_0 == 'undefined') {
    // console.log('Log: $meta_og_image_0 undefined!');
    $meta_og_image_0 = $('#meta_og_image').attr('content');
    //console.log('Define $meta_og_image_0:');
    // console.log($meta_og_image_0);
  }

  // Activate filter on loading if URL parameters present
  if (category_url != null) {
    filterCat.forEach(cat => {
      if (cat.dataset.class === category_url)
        toggleFilterCat(cat);
    })
    toggleFilterE(category_url);
  }

  // Activate modal on loading if URL parameters present
  if (photo_url != null) {
    let $photoid = $("#" + photo_url);
    if ($photoid.children('div').attr('class').indexOf('photo-landscape') > -1) {
      $('#imagemodal>div').attr('class', $('#imagemodal>div').attr('class') + ' modal-lg');
    }
    let $image_src = $photoid.find('img').attr('data-src');
    $('.modal-img').attr('src', $image_src);
    $('p.modal-photo-title').text($photoid.find('p.photo-title').text());
    $('p.modal-photo-location').text($photoid.find('p.photo-location').text());
    $('#imagemodal').modal('show');
    // $('#meta_og_image').attr('content', $image_src);
  }

  // Open modal
  $('.gallery .photo-block .pop').click(function () {
    if ($(this).children('div').attr('class').indexOf('photo-landscape') > -1) {
      $('#imagemodal>div').attr('class', $('#imagemodal>div').attr('class') + ' modal-lg');
    }
    // console.log($('#imagemodal>div').attr('class') + ' modal-lg');
    let $image_src = $(this).find('img').attr('data-src');
    $('.modal-img').attr('src', $image_src);
    $('p.modal-photo-title').text($(this).find('p.photo-title').text());
    $('p.modal-photo-location').text($(this).find('p.photo-location').text());
    $('#imagemodal').modal('show');

    let param = ("?photo=").concat($(this).attr('id'))
    window.history.replaceState(null, null, param);

    $('#meta_og_image').attr('content', $image_src);
    $('#meta_og_url').attr('content', window.location.href);
  });

  // Click anywhere to close modal
  $(document).click(e => {
    if (e.button == 0) {
      $('#imagemodal').modal('hide');
    }
  });

  // Update URL when modal is closed
  $('#imagemodal').on('hidden.bs.modal', () => {
    if ($('#imagemodal>div').attr('class').indexOf('modal-lg') > -1) {
      $('#imagemodal>div').attr('class', 'modal-dialog modal-dialog-centered');
    }

    $('#meta_og_image').attr('content', $meta_og_image_0);

    let param = window.location.pathname;
    window.history.replaceState(null, null, param);

    $('#meta_og_url').attr('content', window.location.href);
  })

    // Back to top button
  var backToTopButton = document.getElementById("back-to-top-button");

  window.onscroll = () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };

  $('#back-to-top-button').click(function () {
    $('html,body').animate({scrollTop: 0}, 'slow');
    return false;
  })
});
