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
        "positionClass": "toast-top-right",
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
    $('#' + iconId).addClass('bi-exclamation-circle error_icon_Fail');    
    $('#' + msgSpanId).addClass('validMsgFail');
    $('#' + msgSpanId).text(errorMsg);
}

//сброс классов отображения ошибок валидации

function resetValidError() {
    $('.error_input').removeClass('validFail');
    $('.error_input').addClass('input_border');
    $('.error_icon').removeClass('bi-exclamation-circle error_icon_Fail');
    $('.error_icon').addClass('input_icon');
    $('.error_msg').removeClass('validMsgFail');
    $('.error_msg').addClass('validMsg');
}



function deactivateCurrentTable(activeTable) {
    if (activeTable) {
        activeTable.ajax.reload();
    }
}

function modalHide() {
    modal.hide();
}

