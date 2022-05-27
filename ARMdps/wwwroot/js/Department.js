//валидация поля код подразделения

function validateDepartmentCode(departmentCode) {

    const msg = "Введите код подразделения";
    if (!departmentCode) {
        setInputValidationFail('DepartmentCode', 'DepartmentCodeIcon', 'DepartmentCodeMsg', msg);
        return false;
    }    
    return true;
}

//всплывающее окно валидации для поля код подразделения

$('#DepartmentCodeIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#DepartmentCodeMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#DepartmentCodeMsg').css('display', 'none');
        }
    });

//валидация поля краткое наименование

function validateShortName(shortName) {

    const msg = "Введите краткое наименование";
    if (!shortName) {
        setInputValidationFail('ShortName', 'ShortNameIcon', 'ShortNameMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля краткое наименование

$('#ShortNameIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#ShortNameMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#ShortNameMsg').css('display', 'none');
        }
    });

//валидация поля полное наименование

function validateDepartmentName(departmentName) {

    const msg = "Введите полное наименование";
    if (!departmentName) {
        setInputValidationFail('DepartmentName', 'DepartmentNameIcon', 'DepartmentNameMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля полное наименование

$('#DepartmentNameIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#DepartmentNameMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#DepartmentNameMsg').css('display', 'none');
        }
    });

//валидация поля телефон

function validatePhones(phones) {

    const msg = "Введите номер телефона";
    if (!phones) {
        setInputValidationFail('Phones', 'PhonesIcon', 'PhonesMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля телефон

$('#PhonesIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#PhonesMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#PhonesMsg').css('display', 'none');
        }
    });

//валидация поля адрес электронной почты

function validateEmailAddress(emailAddress) {

    const msg = "Введите адрес электронной почты";
    if (!emailAddress) {
        setInputValidationFail('EmailAddress', 'EmailAddressIcon', 'EmailAddressMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля адрес электронной почты

$('#EmailAddressIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#EmailAddressMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#EmailAddressMsg').css('display', 'none');
        }
    });

//валидация поля адрес

function validateAddress(address) {

    const msg = "Введите адрес";
    if (!address) {
        setInputValidationFail('Address', 'AddressIcon', 'AddressMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля адрес электронной почты

$('#AddressIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#AddressMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#AddressMsg').css('display', 'none');
        }
    });

//валидация поля КПП

function validateKpp(kpp) {

    const msg = "Введите КПП";
    if (!kpp) {
        setInputValidationFail('KPP', 'KPPIcon', 'KPPMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля КПП

$('#KPPIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#KPPMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#KPPMsg').css('display', 'none');
        }
    });

//валидация поля ИНН

function validateInn(inn) {

    const msg = "Введите ИНН";
    if (!inn) {
        setInputValidationFail('INN', 'INNIcon', 'INNMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля ИНН

$('#INNIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#INNMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#INNMsg').css('display', 'none');
        }
    });

//валидация поля ОКТМО

function validateOktmo(oktmo) {

    const msg = "Введите ОКТМО";
    if (!oktmo) {
        setInputValidationFail('OKTMO', 'OKTMOIcon', 'OKTMOMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля ОКТМО

$('#OKTMOIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#OKTMOMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#OKTMOMsg').css('display', 'none');
        }
    });

//валидация поля банк получателя

function validateBankName(bankName) {

    const msg = "Введите банк получателя";
    if (!bankName) {
        setInputValidationFail('BankName', 'BankNameIcon', 'BankNameMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля банк получателя

$('#BankNameIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#BankNameMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#BankNameMsg').css('display', 'none');
        }
    });

//валидация поля получатель

function validatePaymentName(paymentName) {

    const msg = "Введите получателя";
    if (!paymentName) {
        setInputValidationFail('PaymentName', 'PaymentNameIcon', 'PaymentNameMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля получатель

$('#PaymentNameIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#PaymentNameMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#PaymentNameMsg').css('display', 'none');
        }
    });

//валидация поля БИК

function validateBIK(bik) {

    const msg = "Введите БИК";
    if (!bik) {
        setInputValidationFail('BIK', 'BIKIcon', 'BIKMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля БИК

$('#BIKIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#BIKMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#BIKMsg').css('display', 'none');
        }
    });

//валидация поля КБК

function validateKBK(kbk) {

    const msg = "Введите КБК";
    if (!kbk) {
        setInputValidationFail('KBK', 'KBKIcon', 'KBKMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля КБК

$('#KBKIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#KBKMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#KBKMsg').css('display', 'none');
        }
    });

//валидация поля расчетный счёт

function validateRReceipt(rReceipt) {

    const msg = "Введите расчетный счёт";
    if (!rReceipt) {
        setInputValidationFail('RReceipt', 'RReceiptIcon', 'RReceiptMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля расчетный счёт

$('#RReceiptIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#RReceiptMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#RReceiptMsg').css('display', 'none');
        }
    });

//валидация поля корреспондирующий счёт

function validateKReceipt(kReceipt) {

    const msg = "Введите корреспондирующий счёт";
    if (!kReceipt) {
        setInputValidationFail('KReceipt', 'KReceiptIcon', 'KReceiptMsg', msg);
        return false;
    }
    return true;
}

//всплывающее окно валидации для поля корреспондирующий счёт

$('#KReceiptIcon').hover(
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#KReceiptMsg').css('display', 'block');
        }
    },
    function () {
        if ($(this).hasClass('error_icon_Fail')) {
            $('#KReceiptMsg').css('display', 'none');
        }
    });

//валидация всех полей формы

function validateDepartmentForm(jsonDepartment) {
    let retd = true;
    let depcode = validateDepartmentCode(jsonDepartment.DepartmentCode);
    if (retd) retd = depcode;
    let shortname = validateShortName(jsonDepartment.ShortName);
    if (retd) retd = shortname;
    let depname = validateDepartmentName(jsonDepartment.DepartmentName);
    if (retd) retd = depname;
    let phones = validatePhones(jsonDepartment.Phones);
    if (retd) retd = phones;
    let email = validateEmailAddress(jsonDepartment.EmailAddress);
    if (retd) retd = email;
    let address = validateAddress(jsonDepartment.Address);
    if (retd) retd = address;
    let kpp = validateKpp(jsonDepartment.KPP);
    if (retd) retd = kpp;
    let inn = validateInn(jsonDepartment.INN);
    if (retd) retd = inn;
    let oktmo = validateOktmo(jsonDepartment.OKTMO);
    if (retd) retd = oktmo;
    let bank = validateBankName(jsonDepartment.BankName);
    if (retd) retd = bank;
    let payment = validatePaymentName(jsonDepartment.PaymentName);
    if (retd) retd = payment;
    let bik = validateBIK(jsonDepartment.BIK);
    if (retd) retd = bik;
    let kbk = validateKBK(jsonDepartment.KBK);
    if (retd) retd = kbk;
    let rreceipt = validateRReceipt(jsonDepartment.RReceipt);
    if (retd) retd = rreceipt;
    let kreceipt = validateKReceipt(jsonDepartment.KReceipt);
    if (retd) retd = kreceipt;
    return retd;
}

function getDepartaments() {
    const response = fetch("/api/departmentapi/", {
        method: "GET",
        headers: { "Accept": "application/json" }
    }).then(response => response.json())
        .then(data => getDepartamentsRes(data));    
    return response;
}

//Возвращает выбранное подразделение в форму редактирования

function getDepartament(departmentId) {
    const response = fetch("/api/departmentapi/" + departmentId, {
        method: "GET",       
        headers: { "Accept": "application/json" }
    }).then(response => response.json())
        .then(data => getDepartamentRes(data));    
}

function getDepartamentRes(resp) {
    let response = resp;
    //console.log(response);
    try {
        $('#Department_Id').val(response.department_Id);
        $('#DepartmentCode').val(response.departmentCode);
        $('#ShortName').val(response.shortName);
        $('#DepartmentName').val(response.departmentName);
        $('#Phones').val(response.phones);
        $('#EmailAddress').val(response.emailAddress);
        $('#Address').val(response.address);
        $('#KPP').val(response.kpp);
        $('#INN').val(response.inn);
        $('#OKTMO').val(response.oktmo);
        $('#BankName').val(response.bankName);
        $('#PaymentName').val(response.paymentName);
        $('#BIK').val(response.bik);
        $('#KBK').val(response.kbk);
        $('#RReceipt').val(response.rReceipt);
        $('#KReceipt').val(response.kReceipt);
    }
    catch {
        alert('Ошибка загрузки данных');
    }
}

//Функция вызова и заполнения тоблицы подразделений

function clickDepartmentTableBtn() {
    deptsTableOpen();
    $('.department_form').removeClass('show_table');
    $('.department_form').addClass('hide_table');
    $('.region_form').removeClass('show_table');
    $('.region_form').addClass('hide_table');
    $('.department_table').removeClass('hide_table');
    $('.department_table').addClass('show_table');
};

let depTable;
let deditTable;

//Таблица подразделений

function deptsTableOpen() {
    deactivateCurrentTable(depTable);
    depTable = $('#dTable').DataTable
        ({
            ajax: {
                url: '/api/departmentapi/',
                data: "JSON",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', 'Bearer t-7614f875-8423-4f20-a674-d7cf3096290e');
                },
                method: "GET",
                dataSrc: ""
            },
            rowId:'Department_Id',
            dom: 'Bfrtp<"center">',
            buttons: [
                {
                    text: '<i class="bi bi-plus-circle"></i> Новое подразделение',
                    className: 'btn-primary addDepartment',
                    id: 'departmentAddBtn',
                    action: function (e, dt, node, config) {
                        $('.department_table').removeClass('show_table');
                        $('.department_table').addClass('hide_table');
                        $('.region_form').removeClass('show_table');
                        $('.region_form').addClass('hide_table');
                        $('.department_form').removeClass('hide_table');
                        $('.department_form').addClass('show_table');
                        deactivateCurrentTable(deditTable);
                        depEditOpen();
                    }
                },
            ],
            className: 'dataTable',
            order: [[1, 'asc']],
            columnDefs: [
                {
                    targets: 0,
                    data: null,
                    defaultContent: '',
                    orderable: false,
                    className: 'select-checkbox',
                    name: 'DepCheck',
                },
                { data: 'DepartmentCode', name: 'DepartmentCode', targets: 1 },
                { data: 'ShortName', name: 'ShortName', targets: 2 },
                { data: 'DepartmentName', name: 'DepartmentName', targets: 3 },
                { data: 'Department_Id', name: 'Department_Id', targets: 4, visible: false }
            ],

            select: {
                style: 'multi',
                selector: 'td:first-child'
            },
            scrollY: '520px',
            scrollCollapse: true,
            pageLength: 20,
            "language": {
                "paginate": {
                    "previous": "<",
                    "next": ">"
                },
                "zeroRecords": "Не найдены подразделения, соответствующие строке поиска.</br> Измените строку поиска."
            }
        });    
}

//Форма редактирования

function depEditOpen() {
    deditTable = $('#depeditTable').DataTable({
        retrieve: true,
        scrollY: "400px",
        scrollCollapse: true,
        searching: false,
        info: false,
        paging: false,
        ordering: false,
        fixedHeader: {
            "header": false,
            "footer": false
        },
        columnDefs: [
            { targets: 0, name: 'Labels' },
            { targets: 1, name: 'Values', data: '' }
        ]
    });
}

//Редактирование подразделения по двойному нажатию на строку

$('#dTable').on('dblclick', 'tbody tr', function () {
    var departmentRowId = depTable.row(this).id();
    let departmentJs = depTable.row(this).data();
    
    let idjs = departmentJs.Department_Id;
    getDepartament(idjs);
    deactivateCurrentTable(deditTable);
    depEditOpen();    
    $('.department_table').removeClass('show_table');
    $('.department_table').addClass('hide_table');
    $('.region_form').removeClass('show_table');
    $('.region_form').addClass('hide_table');
    $('.department_form').removeClass('hide_table');
    $('.department_form').addClass('show_table');
    console.log(idjs);
    console.log(departmentRowId);
})

//Сохраниение данных подразделения

function saveDepartmentChanges(ev) {

    ev.preventDefault();
    let idval = $('#Department_Id').val();
      
    let jsonDepartment = {
        Department_Id: (!idval)? 0 : $('#Department_Id').val(),
        DepartmentCode: $('#DepartmentCode').val(),
        ShortName: $('#ShortName').val(),
        DepartmentName: $('#DepartmentName').val(),
        Phones: $('#Phones').val(),
        EmailAddress: $('#EmailAddress').val(),
        Address: $('#Address').val(),
        KPP: $('#KPP').val(),
        INN: $('#INN').val(),
        OKTMO: $('#OKTMO').val(),
        BankName: $('#BankName').val(),
        PaymentName: $('#PaymentName').val(),
        KBK: $('#KBK').val(),
        BIK:$('#BIK').val(),
        RReceipt: $('#RReceipt').val(),
        KReceipt: $('#KReceipt').val()
    };
    
    let valResult = validateDepartmentForm(jsonDepartment);
    if (!valResult) {
        toasterOptions();
        toastr.error('Ошибка валидации');
        return;
    }
    
    $.ajax({
        url: '/api/departmentapi/update',
        data: JSON.stringify(jsonDepartment),
        type: 'POST',
        contentType: "application/json",
        success: function () {            
            $('.department_form').removeClass('show_table');
            $('.department_form').addClass('hide_table');
            $('.department_table').removeClass('hide_table');
            $('.department_table').addClass('show_table');
            toasterOptions();
            toastr.success('Сохранение успешно');            
            if (!idval) {
                depTable.row.add({
                    'DepCheck': '',
                    'DepartmentCode': jsonDepartment.DepartmentCode,
                    'ShortName': jsonDepartment.ShortName,
                    'DepartmentName': jsonDepartment.DepartmentName,
                    'Department_Id': jsonDepartment.Department_Id
                }).draw();
            }
            else depTable.ajax.reload();
        },
        error: function () {
            toasterOptions();
            toastr.error('Ошибка сохранения');
        }
    });
}

//Нажатие на кнопк отмена скрывает форму редактирования и показывает таблицу

function resetDepartmentButton() {
    $('.department_form').removeClass('show_table');
    $('.department_form').addClass('hide_table');
    $('.department_table').removeClass('hide_table');
    $('.department_table').addClass('show_table');
}


//Замена слова search на значок поиска

$(function () {
    $input = $(".dataTables_filter").find("[type='search']");

    $input.parent().contents().filter(function () {
        return this.nodeType == 3;
    }).each(function () {
        this.textContent = this.textContent.replace('Search:', '');
    });
    $input.before($("<i class='bi bi-search table_search'></i>"));
});

const depModal = document.querySelector('#modalDepartmentDel');
let modal;

function clickDepartmentDel() {    
    modal = new bootstrap.Modal(depModal);
    modal.show();      
}

function deleteDepartments() {
    let selectRows = depTable.rows({ selected: true }).data();
    let mass = JSON.stringify(selectRows);
    for (let i = 0; i < mass.length; i++) {
        console.log(i + " " + mass[i]);
        var d = depTable.row(mass[i]).data();
        console.log(d);
        let id = d.Department_Id;
        $.ajax({
            url: '/api/departmentapi/delete' + id,
            type: 'DELETE',
            contentType: "application/json",
            success: function () {
                console.log('del');
                depTable.ajax.reload();
            },
            error: function () {
                console.log('err');
            }
        })
    }
    modal.hide();
}