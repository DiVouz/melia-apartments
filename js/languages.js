let langData = {
    "en": {
        "label": "English",
        "data": [
            {
                "element_id": "test",
                "element_innetHTML": "<b>test</b> Yes"
            }
        ]
    },
    "gr": {
        "label": "Ελληνικά",
        "data": [
            {
                "element_id": "test",
                "element_innetHTML": "<b>δοκιμη</b> Ναι"
            }
        ]
    }
}

let defaultLan = 'en';
let currentLan = defaultLan;

$(document).ready(function() {
    let url = new URL(window.location.href);
    let langID = url.searchParams.get("l");
    if (langID != null && langData[langID] != null) {
        currentLan = langID;
    }

    initLangBox();
    initLangPage();
});

function initLangBox() {
    $("#big_lang_label").append(langData[currentLan].label);
    $("#small_lang_label").append(langData[currentLan].label);

    let newHTML = '';    
    jQuery.each(langData, function(i, value) {
        newHTML = newHTML + `<div onclick="chooseLang('${i}');">${value.label}</div>`;
    });

    $("#big_lang_choose").append(newHTML);
    $("#small_lang_choose").append(newHTML);
}

function chooseLang(langID) {
    toggleSmallLangMenu(false);

    if (currentLan == langID) return;

    window.location.href = `${window.location.pathname}?l=${langID}`;
}

function initLangPage() {

}