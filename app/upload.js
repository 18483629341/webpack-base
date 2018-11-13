module.exports = function() {

    var initData = {
        checkSizeSet: true,
        checkWHSet: true,
        maxWidth: 90,
        maxHeight: 90,
        maxSize: 200,
    };
    var html = ' <div class="col-md-6">' +
        ' <div class="form-group b-t-5 ">' +
        ' <label for="exampleInputFile">Logo :</label>';
    ' <span class="form-right">max size ' + initData.maxWidth + ' x ' + initData.maxHeight + 'pixel</span>' +
        ' <div class="form-control pull-right  flex P-0 notRequire">' +
        ' <input type="text" class="InputFileValue " name="imgUrl" disabled id="inputFileValue" />' +
        '<div class="btn btn-lg btn-primary InputFilebtn"> upload ' +
        '<input type="file" data-type="uploadImg" class="InputFile" id="exampleInputFile" onchange="getFile(this,initData)">' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    return html;
}

// function selectImage(file, obj) {
//     /* file��file�ؼ� 
//      * prvid: ͼƬԤ������ 
//      */
//     fileSize = file.files[0].size / 1024;
//     var tip = "png or gif or jpeg  or jpg can upload!"; // �趨��ʾ��Ϣ 
//     var filters = {
//         "jpeg": "/9j/4",
//         "gif": "R0lGOD",
//         "png": "iVBORw"
//     }
//     var reg = /\.png|\.jpeg|\.jpg|.gif/i;
//     if (window.FileReader) { // html5���� 
//         var fr = new FileReader();
//         fr.readAsDataURL(file.files[0]);
//         fr.onload = function(e) {
//             imgData = e.target.result;
//             imgSrc = file.value;
//             validateImg(imgData, filters);
//             if (isImgValid) {
//                 checkSize(imgData);
//             }
//         }
//     } else { // ��������  ��֧��h5��д��
//         if (!reg.test(file.value)) {
//             alert(tip);
//         } else {
//             isImgValid = true;
//             checkSize(imgData, obj);
//         }
//     }

// }

// function checkSize(data, obj) {
//     var image = new Image();
//     image.src = data;
//     image.onload = function() {
//         console.log(image.width, image.height, fileSize + 'k');
//         var width = image.width;
//         var height = image.height;
//         if (obj.checkWHSet && (width > obj.maxWidth || height > obj.maxHeight)) {
//             alert_error('ͼƬ̫���ˣ��ߴ������:' + obj.maxWidth + 'x' + obj.maxHeight + "����")
//         } else if (obj.checkSizeSet && fileSize > obj.maxSize) {
//             alert_error('ͼƬ̫���ˣ���С�����:' + obj.maxSize + '����')
//         } else {
//             canUpload = true;
//         }
//     };
// }

// function uploadImage() {
//     if (canUpload) {

//         $.ajax({
//             type: 'POST',
//             url: 'ajax/uploadimage',
//             data: {
//                 image: imgData
//             },
//             async: false,
//             dataType: 'json',
//             success: function(data) {
//                 if (data.success) {
//                     alert('�ϴ��ɹ�');
//                     alert_success('�ϴ��ɹ�')
//                     var imgUrl = data.src; //��̎�����Ҫ�õ����� �h�̈DƬ朽�
//                     $("#inputFileValue").val(imgUrl);

//                 } else {
//                     alert_error('�ϴ�ʧ��')
//                 }
//             }
//         })
//     }

// }

// function validateImg(data, filters) {
//     for (var e in filters) {
//         if (data.indexOf(filters[e]) != "-1") {
//             isImgValid = true;
//             return e;
//         }
//     }
//     return null;
// }
// module.exports.checkSize = checkSize;
// module.exports.validateImg = validateImg;
//module.exports.uploadHtml = uploadHtml;
// module.exports.selectImage = selectImage;
// module.exports.uploadImage = uploadImage;