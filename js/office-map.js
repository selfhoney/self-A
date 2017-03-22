// horimachi 
function horimachi_initialize() {
    const horimachi_myLatlng = new google.maps.LatLng(36.404456, 140.428186),
        mapOptions = {
            zoom: 15,
            center: horimachi_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-horimachi'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });
    const marker = new google.maps.Marker({
        position: horimachi_myLatlng,
        map: map
    });
    // 位置調整
    let google_map = function () {
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });

        google.maps.event.addDomListener(window, "resize", function () {
            const center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        })
    }
}

google.maps.event.addDomListener(window, 'load', horimachi_initialize);

// katuta
function katuta_initialize() {
    const katuta_myLatlng = new google.maps.LatLng(36.402051, 140.529343),
        mapOptions = {
            zoom: 15,
            center: katuta_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-katuta'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: katuta_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', katuta_initialize);

// oomika
function oomika_initialize() {
    const oomika_myLatlng = new google.maps.LatLng(36.509655, 140.629160),
        mapOptions = {
            zoom: 15,
            center: oomika_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-oomika'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: oomika_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', oomika_initialize);


// gunma

// kizuna
function kizuna_initialize() {
    const kizuna_myLatlng = new google.maps.LatLng(36.309272, 139.044689),
        mapOptions = {
            zoom: 15,
            center: kizuna_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-kizuna'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: kizuna_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', kizuna_initialize);

// kibou
function kibou_initialize() {
    const kibou_myLatlng = new google.maps.LatLng(36.382200, 139.071417),
        mapOptions = {
            zoom: 15,
            center: kibou_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-kibou'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: kibou_myLatlng,
        map: map
    });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', kibou_initialize);


// saitama

// nakaurawa
function nakaurawa_initialize() {
    const nakaurawa_myLatlng = new google.maps.LatLng(35.853066, 139.639021),
        mapOptions = {
            zoom: 15,
            center: nakaurawa_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-nakaurawa'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: nakaurawa_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', nakaurawa_initialize);

// kawaguchi
function kawaguchi_initialize() {
    const kawaguchi_myLatlng = new google.maps.LatLng(35.834098, 139.714752),
        mapOptions = {
            zoom: 15,
            center: kawaguchi_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-kawaguchi'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: kawaguchi_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', kawaguchi_initialize);


// kanagawa

// turuma
function turuma_initialize() {
    const turuma_myLatlng = new google.maps.LatLng(35.489049, 139.449578),
        mapOptions = {
            zoom: 15,
            center: turuma_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-turuma'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: turuma_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', turuma_initialize);

// soubudai
function soubudai_initialize() {
    const soubudai_myLatlng = new google.maps.LatLng(35.499079, 139.406622),
        mapOptions = {
            zoom: 15,
            center: soubudai_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-soubudai'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: soubudai_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', soubudai_initialize);

// sagamiharayabe
function sagamiharayabe_initialize() {
    const sagamiharayabe_myLatlng = new google.maps.LatLng(35.567135, 139.376360),
        mapOptions = {
            zoom: 15,
            center: sagamiharayabe_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-sagamiharayabe'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: sagamiharayabe_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', sagamiharayabe_initialize);


// toyama

// orange
function orange_initialize() {
    const orange_myLatlng = new google.maps.LatLng(36.706622, 137.229798),
        mapOptions = {
            zoom: 15,
            center: orange_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-orange'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: orange_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', orange_initialize);

// orange2
function orange2_initialize() {
    const orange2_myLatlng = new google.maps.LatLng(36.699503, 137.236832),
        mapOptions = {
            zoom: 15,
            center: orange2_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-orange2'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: orange2_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', orange2_initialize);


// isikawa

// mirai
function mirai_initialize() {
    const mirai_myLatlng = new google.maps.LatLng(36.576377, 136.653468),
        mapOptions = {
            zoom: 15,
            center: mirai_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-mirai'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: mirai_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', mirai_initialize);

// mitukuchi
function mitukuchi_initialize() {
    const mitukuchi_myLatlng = new google.maps.LatLng(36.544034, 136.677690),
        mapOptions = {
            zoom: 15,
            center: mitukuchi_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-mitukuchi'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: mitukuchi_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', mitukuchi_initialize);

// arise
function arise_initialize() {
    const arise_myLatlng = new google.maps.LatLng(36.526882, 136.627917),
        mapOptions = {
            zoom: 15,
            center: arise_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-arise'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: arise_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', arise_initialize);

// yamanaka
function yamanaka_initialize() {
    const yamanaka_myLatlng = new google.maps.LatLng(36.235566, 136.369493),
        mapOptions = {
            zoom: 15,
            center: yamanaka_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-yamanaka'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: yamanaka_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', yamanaka_initialize);

// kahoku
function kahoku_initialize() {
    const kahoku_myLatlng = new google.maps.LatLng(36.716370, 136.698413),
        mapOptions = {
            zoom: 15,
            center: kahoku_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-kahoku'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: kahoku_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', kahoku_initialize);


// fukui

// maruoka
function maruoka_initialize() {
    const maruoka_myLatlng = new google.maps.LatLng(36.151784, 136.264405),
        mapOptions = {
            zoom: 15,
            center: maruoka_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-maruoka'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: maruoka_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', maruoka_initialize);


// oosaka

// rumiale
function rumiale_initialize() {
    const rumiale_myLatlng = new google.maps.LatLng(34.710399, 135.622787),
        mapOptions = {
            zoom: 15,
            center: rumiale_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-rumiale'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: rumiale_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', rumiale_initialize);

// reve
function reve_initialize() {
    const reve_myLatlng = new google.maps.LatLng(34.736875, 135.584459),
        mapOptions = {
            zoom: 15,
            center: reve_myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    const map = new google.maps.Map(document.getElementById('js-reve'), mapOptions),
        contentString = 'Some address here..',
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 500
        });

    const marker = new google.maps.Marker({
        position: reve_myLatlng,
        map: map
    });

    // 位置調整
    google_map()
}

google.maps.event.addDomListener(window, 'load', reve_initialize);