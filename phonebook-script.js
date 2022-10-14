(function (global) {
  var PhoneBook = function () {
    return new PhoneBook.init();
  };

  PhoneBook.prototype = {
    data: [],
    searchResults: [],
    addNewContact: function (name, phone, email) {
      this.data.push({
        name: name,
        phone: phone,
        email: email
      });
      return this;
    },
    returnAll: function () {
      return this.data;
    }
  }

  PhoneBook.init = function () { }
  PhoneBook.init.prototype = PhoneBook.prototype;

  global.PhoneBook = $pb = PhoneBook;
})(window);

if (!window.contactList) {
  window.contactList = $pb();
}

var form = document.getElementById('contact');
form.addEventListener('submit', function (event) {
  if (!window.contactList) {
    window.contactList = $pb(form.person.value, form.phone.value, form.email.value);
  } else {
    contactList.addNewContact(form.person.value, form.phone.value, form.email.value);
  }

  form.person.value = '';
  form.phone.value = '';
  form.email.value = '';

  event.preventDefault();
});

document.getElementById('js-show-all').addEventListener('click', function () {
  if (window.contactList) {
    document.getElementById('show-panel').innerHTML = '';
    var contacts = contactList.returnAll();
    if (contacts.length > 0) {
      for (var i = 0; i < contacts.length; i++) {
        document.getElementById('show-panel').innerHTML += '<div class="contact-item">Name: ' + contacts[i].name + '<br>Phone: ' + contacts[i].phone + '<br>Email: ' + contacts[i].email + '</div><hr>';
      }
    } else {
      document.getElementById('show-panel').innerHTML += '<div class="contact-item">You have no contacts. Why not add  a few?</div><hr>';
    }
  }

  document.getElementById('show-panel').style.display = 'block';
  document.getElementById('search-panel').style.display = 'none';
  document.getElementById('contact-panel').style.display = 'none';
});

document.getElementById('js-search').addEventListener('click', function () {
  document.getElementById('show-panel').style.display = 'none';
  document.getElementById('search-panel').style.display = 'block';
  document.getElementById('contact-panel').style.display = 'none';
});

document.getElementById('js-add-new').addEventListener('click', function () {
  document.getElementById('show-panel').style.display = 'none';
  document.getElementById('search-panel').style.display = 'none';
  document.getElementById('contact-panel').style.display = 'block';
});