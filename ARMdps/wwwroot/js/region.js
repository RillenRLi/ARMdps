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


//Вызов формы редактирования учетных данных
function clickRegionBtn() {
    $('.department_form').removeClass('show_table');
    $('.department_form').addClass('hide_table');
    $('.department_table').removeClass('show_table');
    $('.department_table').addClass('hide_table');
    $('.region_form').removeClass('hide_table');
    $('.region_form').addClass('show_table');
    if (!regTable) regionTableOpen();
    getRegion(1);
};

let regTable;

function regionTableOpen() {    
    regTable = $("#regTable").DataTable({
        dom: '',
        scrollY: '520px',
        scrollCollapse: true,
        paging: false,
        searching: false,
        ordering: false,
        columnDefs: [
            { targets: 0, className: 'tdFormLabel' },
            { targets: 1, className: 'tdFormInput' }
        ]
    });
};

//всплывающее окно валидации для поля код региона (4 знака)

$('#RegionCodeIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {            
            $('#RegionCodeMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#RegionCodeMsg').css('display', 'none');
        }
    });

//всплывающее окно валидации для поля код региона (2 знака)

$('#Code2DigitsIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#Code2DigitsMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#Code2DigitsMsg').css('display', 'none');
        }
    });

//всплывающее окно валидации для поля наименование региона

$('#RegionNameIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#RegionNameMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#RegionNameMsg').css('display', 'none');
        }
    });

//всплывающее окно валидации для поля IP-адрес FTP-сервера

$('#FTPIpIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#FTPIpMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#FTPIpMsg').css('display', 'none');
        }
    });

//всплывающее окно валидации для поля каталог FTP-сервера

$('#FTPUploadDirIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#FTPUploadDirMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#FTPUploadDirMsg').css('display', 'none');
        }
    });

//всплывающее окно валидации для поля логин доступа к FTP-серверу

$('#FTPLoginIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#FTPLoginMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#FTPLoginMsg').css('display', 'none');
        }
    });

//всплывающее окно валидации для поля пароль доступа к FTP-серверу

$('#FTPPasswordIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#FTPPasswordMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#FTPPasswordMsg').css('display', 'none');
        }
    });

//использоание плагина maskedinput для вывода форм с маской

$(function () {
    $('#RegionCode').mask('9999');
    $('#Code2Digits').mask('99');
    $('#FTPIp').mask('999.999.999.999');
});

function saveSuccess() {
    alert("OK");
    updateForm(data);
}

function saveError() {
    alert("Error occured");
}

//сброс данных к начальным значениям при нажатии кнопки "Отмена"

function resetRegionButton() {
    getRegion(1);
}

//валидация поля код региона (4 знака)

function validateRegionCode(regionCode) {

    const msg = "Введите код региона, 4 знака, Таблица 8 Приказа №1144 МВД РФ";
    if (!regionCode) {
        setInputValidationFail('RegionCode', 'RegionCodeIcon', 'RegionCodeMsg', msg);
        return false;
    }
    if (regionCode.length != 4) {
        setInputValidationFail('RegionCode', 'RegionCodeIcon', 'RegionCodeMsg', msg);
        return false;
    }
    if (+regionCode != regionCode) {
        setInputValidationFail('RegionCode', 'RegionCodeIcon', 'RegionCodeMsg', msg);
        return false;
    }
    return true;
}

//валидация поля код региона (2 знака)

function validateCode2Digits(code2Digits) {

    const msg = "Введите код региона применяемый для ГРЗ ТС. Приказ № 282 МВД РФ";
    if (!code2Digits) {
        setInputValidationFail('Code2Digits', 'Code2DigitsIcon', 'Code2DigitsMsg', msg);
        return false;
    }
    if (code2Digits.length != 2) {
        setInputValidationFail('Code2Digits', 'Code2DigitsIcon', 'Code2DigitsMsg', msg);
        return false;
    }
    if (+code2Digits != code2Digits) {
        setInputValidationFail('Code2Digits', 'Code2DigitsIcon', 'Code2DigitsMsg', msg);
        return false;
    }
    return true;
}

//валидация поля наименование региона

function validateRegionName(regionName) {

    const msg = "Введите наименование региона";
    if (!regionName) {
        setInputValidationFail('RegionName', 'RegionNameIcon', 'RegionNameMsg', msg);
        return false;
    }
    return true;
}

//валидация поля IP-адрес FTP-сервера

function validateFTPIp(ftpIp) {
    const msg = "Введите IP-адрес FTP-сервера";
    if (!ftpIp) {
        setInputValidationFail('FTPIp', 'FTPIpIcon', 'FTPIpMsg', msg);
        return false;
    }
    if (!validateIp(ftpIp)) {
        msg = msg + "IP-адрес должен иметь формат XXX.XXX.XXX.XXX, где XXX — число от 0 до 255";
        setInputValidationFail('FTPIp', 'FTPIpIcon', 'FTPIpMsg', msg);
        return false;
    }
    return true;
}

//валидация поля каталог FTP-сервера

function validateFTPUploadDir(ftpUploadDir) {
    const msg = "Введите каталог FTP-сервера";
    if (!ftpUploadDir) {
        setInputValidationFail('FTPUploadDir', 'FTPUploadDirIcon', 'FTPUploadDirMsg', msg);
        return false;
    }
    return true;
}

//валидация поля логин доступа к FTP-серверу

function validateFTPLogin(ftpLogin) {
    const msg = "Введите логин доступа к FTP-серверу";
    if (!ftpLogin) {
        setInputValidationFail('FTPLogin', 'FTPLoginIcon', 'FTPLoginMsg', msg);
        return false;
    }
    return true;
}

//валидация поля пароль доступа к FTP-серверу

function validateFTPPassword(ftpPassword) {
    const msg = "Введите пароль доступа к FTP-серверу";
    if (!ftpPassword) {
        setInputValidationFail('FTPPassword', 'FTPPasswordIcon', 'FTPPasswordMsg', msg);
        return false;
    }
    return true;
}

//валидация IP-адреса

function validateIp(ip) {
    let resip = true;
    let ipmass = ip.split('.');
    for (let i = 0; i < ipmass.length; i++) {
        if (+ipmass[i] != ipmass[i] || +ipmass[i] > 255) resip = false;
    }
    return resip;
}

//валидация всех полей формы

function validateRegionForm(jsonData) {
    let retv = true;
    let resrc = validateRegionCode(jsonData.RegionCode);
    if (retv) retv = resrc;
    let rescd = validateCode2Digits(jsonData.Code2Digits);
    if (retv) retv = rescd;
    let resrn = validateRegionName(jsonData.RegionName);
    if (retv) retv = resrn;
    let resfi = validateFTPIp(jsonData.FTPIp);
    if (retv) retv = resfi;
    let resfu = validateFTPUploadDir(jsonData.FTPUploadDir);
    if (retv) retv = resfu;
    let resfl = validateFTPLogin(jsonData.FTPLogin);
    if (retv) retv = resfl;
    let resfp = validateFTPPassword(jsonData.FTPPassword);
    if (retv) retv = resfp;
    return retv;
}

//функция сохранения изменений при нажатии на кнопку сохранить

function saveRegionChanges(ev) {

    ev.preventDefault();
    resetValidError();

    //собираем данные с формы
    let jsonData = {
        Region_Id: $('#Region_Id').val(),
        RegionCode: $('#RegionCode').val(),
        Code2Digits: $('#Code2Digits').val(),
        RegionName: $('#RegionName').val(),
        UseSuperUser: $('#UseSuperUser').prop('checked'),
        //$('#User_Id').val(response.user_Id);
        //$('#LicenseType').val(response.licenseType);
        //$('#LicenseFileName').val(response.licenseFileName);
        FISMIsEnabled: $('#FISMIsEnabled').prop('checked'),
        ArchiveIsEnabled: $('#ArchiveIsEnabled').prop('checked'),
        FTPIp: $('#FTPIp').val(),
        FTPUploadDir: $('#FTPUploadDir').val(),
        FTPLogin: $('#FTPLogin').val(),
        FTPPassword: $('#FTPPassword').val()
    };
   
    //проверяем валидацию
    let valResult = validateRegionForm(jsonData);

    if (!valResult) {
        toasterOptions();
        toastr.error('Ошибка валидации');
        return;
    }

    //вызов api - метода Update
    $.ajax({
        url: '/api/regionapi/update',
        data: JSON.stringify(jsonData),
        type: 'POST',
        contentType: "application/json",
        success: function () {
            toasterOptions();
            toastr.success('Сохранение успешно');
            $('#saveButton').addClass('save_button_click');
            resetValidError();
        },
        error: function () {
            toasterOptions();
            toastr.error('Ошибка сохранения данных');
        }
    });


}

//функция сброса изменений к начальным при нажатии на кнопку отменить

function resetRegionButton() {
    $('#resetButton').addClass('reset_button_click');
    getRegion(1);
    resetValidError();
    toasterOptions();
    toastr.warning('Изменения отменены');
}

