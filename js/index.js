$(".shows").click(function() {
  $(".Masked").show();
});
/**
 * @param {*} ofStyle 传入类名 让元素隐藏
 */
function off(ofStyle) {
  document.getElementsByClassName(ofStyle)[0].style.display = "none";
}
/**
 *
 * @param {*} url 请求的url
 */
function ajaxPost(url) { 
  $.ajax({
    url: url,
    type: "post",
    dataType: "json",

    
    success: function(data) {
      console.log(data);
      $("#table").html(template("tpl", { dataList: data }));
      $("#j_cbAll").on("click", function() {
        var chek = $(this).prop("checked");
        console.log(chek);
        $('#j_tb input[type="checkbox"]').prop("checked", chek);
      });
      $('#j_tb input[type="checkbox"]').on("click", function() {
        var numAll = $('#j_tb input[type="checkbox"]').length;
        var numSle = $('#j_tb input[type="checkbox"]:checked').length;
        console.log(numAll + ":" + numSle);
        $("#j_cbAll").prop("checked", numAll == numSle);
      });
    }
  });
}
/**
 *
 * @param {*} url 请求的URL
 * @param {*} e 传入this
 */
function link_to_waiceng(url, e) { //
  var dataId = $(e).attr("data-id");

  $.ajax({
    url: url,
    // data: "id = " + dataId,
    dataType: "json",
    success: function(obj) {
      var dataId = $(e).attr("data-id");
      $(".waiceng").show();
      $(".form-horizontal").html(
        template("tpl-user", { dataList: obj[parseInt(dataId) - 1] })
      );
    },
    error: function() {
      console.log("出錯了");
    }
  });
}
function link_to_shows(e) {
  $(".Masked").show();
}
/**
 * @param {*} url 传入URL
 * @param {*} value 传入ID
 */
function onChangeCat(url, value) {
  var v = url + value;
  console.log(v);
  location = v;
}
