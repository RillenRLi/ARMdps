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



//настройка опций плагина toastr для всплывающих уведомлений

function toasterOptions() {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-center",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "100",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "show",
        "hideMethod": "hide"
    };
};

//обобщенная функция валидации поля формы

function setInputValidationFail(inputId, iconId, msgSpanId, errorMsg) {
    $('#' + inputId).addClass('validFail');
    //$('#' + spanId).addClass('validSpanFail');
    //$('#' + spanId).text('!');
    $('#' + iconId).addClass('bi-exclamation-circle error_icon_Fail');
    $('#' + msgSpanId).addClass('validMsgFail');
    $('#' + msgSpanId).text(errorMsg);
}

function deactivateCurrentTable(activeTable) {
    if (activeTable) {
        activeTable.destroy();
    }
}