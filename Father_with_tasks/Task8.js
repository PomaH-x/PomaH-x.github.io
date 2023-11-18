$(document).ready(function() {
  
  $('#openFormButton').click(function() {
      openForm();
  });

  window.onpopstate = function(event) {
          closeForm();
  };

  if (localStorage.getItem('feedbackFormValues')) {
      let formValues = JSON.parse(localStorage.getItem('feedbackFormValues'));

      $('#fullName').val(formValues.fullName);
      $('#email').val(formValues.email);
      $('#phone').val(formValues.phone);
      $('#organization').val(formValues.organization);
      $('#message').val(formValues.message);
      $('#policyCheckbox').prop('checked', formValues.policyCheckbox);
  }
});

function openForm() {
  $('#popup').show();

  history.pushState('feedbackForm', 'Форма обратной связи', '?form=feedback');

  $(document).mouseup(function(e) {
      let popup = $('#popup');
      if (!popup.is(e.target) && popup.has(e.target).length === 0) {
          closeForm();
      }
  });

  $(window).bind("beforeunload", function() {
      saveForm();
  });
}

function closeForm() {
  $('#popup').hide();
  history.pushState(null, null, '/');
  saveForm();
}

function saveForm() {
  let formValues = {
      fullName: $('#fullName').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      organization: $('#organization').val(),
      message: $('#message').val(),
      policyCheckbox: $('#policyCheckbox').prop('checked')
  };

  localStorage.setItem('feedbackFormValues', JSON.stringify(formValues));
}

$("#feedbackForm").submit(function(event) {
  event.preventDefault();

  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var organization = $("#organization").val();
  var message = $("#message").val();
  var agreement = $("#agreement").is(":checked");

  $.ajax({
    url: "https://formcarry.com/s/nZ2P3HbT5G",
    type: "POST",
    data: {
      name: name,
      email: email,
      phone: phone,
      organization: organization,
      message: message,
      agreement: agreement
    },
    dataType: "json",
    success: function(response) {
      $("#name").val("");
      $("#email").val("");
      $("#phone").val("");
      $("#organization").val("");
      $("#message").val("");
      $("#agreement").prop("checked", false);

      alert("Сообщение успешно отправлено");
    },
    error: function(error) {
      alert("Произошла ошибка при отправке сообщения");
    }
  });
});