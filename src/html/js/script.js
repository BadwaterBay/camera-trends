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

setTimeout(function(){
    observer_2.observe();
},5000);

setTimeout(function(){
    observer_3.observe();
},10000);
// END: Lozad

// Photo gallery filtering
const photoCat = document.querySelectorAll('.maincontent .filter-button button');
const allPhotos = document.querySelectorAll('.maincontent .gallery .photo-block');

for(let i = 0; i < photoCat.length; ++i){
    photoCat[i].addEventListener('click', function(){
        toggleActiveClass(photoCat[i]);
        toggleimages(photoCat[i].dataset.class);
        let param = "?category=";
        param = param.concat(photoCat[i].dataset.class);
        if (photoCat[i].dataset.class == 'all')
            param = window.location.pathname;
        window.history.replaceState(null, null, param);
    });
}

function toggleActiveClass(active){
    photoCat.forEach(item => {
      item.classList.remove('active');
    })
    active.classList.add('active');
}

function toggleimages(dataClass){
    if(dataClass === 'all'){
        for(let i = 0; i<allPhotos.length; ++i){
            allPhotos[i].style.display = 'block';
        }
    }else{
        for(let i = 0; i<allPhotos.length; ++i) {
            if (allPhotos[i].dataset.class.includes(dataClass))
                allPhotos[i].style.display = 'block';
            else allPhotos[i].style.display = 'none';
        }
    }
}

// END: Photo gallery filtering





$(function() {

    // START: Do things when URL parameters present during page loading

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
        for (let i = 0; i < photoCat.length; ++i) {
            if (photoCat[i].dataset.class === category_url)
                toggleActiveClass(photoCat[i]);
        }
        toggleimages(category_url);
    }

    // Activate modal on loading if URL parameters present
    if (photo_url != null) {
        let $photoid = $("#" + photo_url);
        let $image_src = $photoid.find('img').attr('data-src');
        $('.modal-img').attr('src', $image_src);
        $('p.modal-title').text($photoid.find('p.photo-title').text());
        $('p.modal-location').text($photoid.find('p.photo-location').text());
        $('#imagemodal').modal('show');

        // $('#meta_og_image').attr('content', $image_src);
    }

    // Open modal
    $('.gallery .photo-block .pop').on('click', function() {
        let $image_src = $(this).find('img').attr('data-src');
        $('.modal-img').attr('src', $image_src);
        $('p.modal-title').text($(this).find('p.photo-title').text());
        $('p.modal-location').text($(this).find('p.photo-location').text());
        $('#imagemodal').modal('show');
        
        let param = "?photo=";
        param = param.concat($(this).attr('id'));
        window.history.replaceState(null, null, param);

        $('#meta_og_image').attr('content', $image_src);

        // let path = window.location.href;
        // path = path.concat(param);
        $('#meta_og_url').attr('content', window.location.href);
    });

    // Click anywhere to close modal

    $(document).click(function(e) { 
        if (e.button == 0) {
            $('#imagemodal').modal('hide');
        }
    });

    // Update URL when modal is closed
    $('#imagemodal').on('hidden.bs.modal', function () {
        // console.log($meta_og_image_0);
        $('#meta_og_image').attr('content', $meta_og_image_0);

        let param = window.location.pathname;
        window.history.replaceState(null, null, param);
        // console.log(param);

        $('#meta_og_url').attr('content', window.location.href);
    })
});

