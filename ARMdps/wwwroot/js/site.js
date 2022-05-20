const { data } = require("jquery");

//Функция вызова форм редактирования
function sendAjaxData(data, url, onsucess, onerror, type = "POST") {
    $.ajax({
        data: data,
        url: url,
        success: onsucess,
        error: onerror,
        type: type
    });
}

//Функция вызова таблиц
function sendAjaxNotData(url, onsuccess, onerror, type = "POST") {
    $.ajax({
        url: url,
        success: function (result) { onsuccess(result) },
        error: onerror,
        type: type
    });
}


//Функция сохранения данных формы
function saveAjaxChanges(data, url, onsuccess, onerror, type = "POST") {
    $.ajax({
        data: data,
        url: url,
        success: onsuccess,
        error: onerror,
        type: type
    });
}

//Функция для передачи данных в форму редактирования учетных данных

function getRegion(regionId) {
    const response = fetch("/api/regionapi/" + regionId, {
        method: "GET",
        headers: { "Accept": "application/json" }
    }).then(response => response.json())
        .then(data => getRegionRes(data));
}

function getRegionRes(resp) {
    let response = resp;
    try {
        $('#Region_Id').val(response.region_Id);
        $('#RegionCode').val(response.regionCode);
        $('#Code2Digits').val(response.code2Digits);
        $('#RegionName').val(response.regionName);
        $('#UseSuperUser').prop('checked', response.useSuperUser);
        //$('#User_Id').val(response.user_Id);
        //$('#LicenseType').val(response.licenseType);
        //$('#LicenseFileName').val(response.licenseFileName);
        $('#FISMIsEnabled').prop('checked', response.fismIsEnabled);
        $('#ArchiveIsEnabled').prop('checked', response.archiveIsEnabled);
        $('#FTPIp').val(response.ftpIp);
        $('#FTPUploadDir').val(response.ftpUploadDir);
        $('#FTPLogin').val(response.ftpLogin);
        $('#FTPPassword').val(response.ftpPassword);
    }
    catch {
        alert('Ошибка загрузки данных');
    }
}

function getDepartaments() {
    const response = fetch("/api/departmentapi", {
        method: "GET",
        headers: { "Accept": "application/json" }
    }).then(response => response.json())
        .then(data => getDepartamentsRes(data));
}

function getDepartamentsRes(resp) {
    let response = []
    response = resp;
    console.log(response);
    for (let i = 0; i < response.length; i++) {

    }
}