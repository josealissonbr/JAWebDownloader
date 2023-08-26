var API_REQUESTS = {
    "WHITE": 0,
    "BLACK": 1
}

var API_DATA = {
    TOKEN: null,
    CSRF: null,
}

var USER_DATA = {
    ID: null,
};

$(document).ready(function () {
    initApp();
});

function initApp() {
    $(`a[tab-path]`).click(function () {
        changeTab($(this).attr(`tab-path`));
    });

    $(`li[tab-path]`).click(function () {
        changeTab($(this).attr(`tab-path`));
    });
    //Initialize current page
    changeTab(document.location.pathname);
}

function changeTab(Path, type = "GET") {
    console.log(Path);
    if (Path.charAt(0) == '/') {
        Path = Path.substring(1);
    }

    if ($(`a[tab-path="${Path}"]`).length > 0) {
        $(`a[tab-path="${Path}"]`).addClass(`active-nav`);
        $(`a[tab-path!="${Path}"]`).removeClass(`active-nav`);
    }

    if ($(`li[tab-path="${Path}"]`).length > 0) {
        $(`li[tab-path="${Path}"]`).addClass(`active`);
        $(`li[tab-path!="${Path}"]`).removeClass(`active`);
    }

    //  Atualiza a URL na barra de endeco do Browser.
    window.history.pushState('data', '', `/${Path}`);

    var App = $('#homepage2-sec');
    App.html(`  <div class="h-100 d-flex align-items-center justify-content-center" style="height: 100%;" opacity: 0.5;">
                    <div class="spinner-grow text-danger" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
                </div>
            `);
    $.ajax({
        type: type,
        url: `${document.location.origin}/${Path}`,
        success: function (response) {
            App.html(response);
        },
        error: function (response) {
            throwPageError(Path, type);
        }
    });

}

function throwPageError(Path, type) {
    var App = $('#homepage2-sec');
    var pageLoaderErrorInner = `
    <div class="container-xxl flex-grow-1 container-p-y">
        <div class="h-100 d-flex align-items-center justify-content-center">
            <div class="col-12">
                <div class="text-center">
                    <h2 class="mb-1 mt-4">Ocorreu um erro</h2>
                    <p class="mb-4 mx-2">Oops! 😖 Nao foi possivel carregar o conteúdo.</p>
                    <button class="btn btn-danger mb-4 waves-effect waves-light" onclick="changeTab('${Path}', '${type}')">Tentar novamente</button>
                </div>
            </div>
        </div>
    </div>
    `;
    App.html(pageLoaderErrorInner);
}

function apiRequest(u, d = [], t = 'post') {

    if (!API_DATA.TOKEN) {
        API_DATA.TOKEN = generateToken();
    }

    const formData = new FormData();

    formData.append('token', API_DATA.TOKEN);

    d.forEach((item, index) => {
        formData.append(index, item);
    });

    var promise = $.ajax({
        type: t,
        data: formData,
        processData: false,
        contentType: false,
        headers: {
            'X-XSRF-TOKEN': generateCSRF(),
        },
        url: document.location.origin + '/api/' + u,
    })
        .done(function (responseData, status, xhr) {
            // preconfigured logic for success
            if (responseData.message == 'Too Many Attempts.') {
                alert('Muitas conexões. Aguarde 1 minuto e tente novamente.');
            }
        })
        .fail(function (xhr, status, err) {
            //predetermined logic for unsuccessful request
        });
    return promise;
}

function generateToken() {
    var csrf = $('[name="_token"]').val();
    var token;
    var promise = $.ajax({
        type: 'get',
        async: false,
        data: { _token: csrf },
        url: document.location.origin + '/tokens/create',
    }).done(function (response) {
        token = response.token;
    });
    return token;
}

function generateCSRF() {
    if (API_DATA.CSRF) {
        return API_DATA.CSRF;
    }

    var csrf;
    var promise = $.ajax({
        type: 'get',
        async: false,
        url: document.location.origin + '/sanctum/csrf-cookie',
    })

    API_DATA.CSRF = getCookie('XSRF-TOKEN');

    return getCookie('XSRF-TOKEN');
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
