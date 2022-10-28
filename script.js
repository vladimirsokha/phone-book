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
    },
    search: function (searchTerm) {
      if (this.data.length) {
        for (var i = 0; i < this.data.length; i++) {
          if (this.data[i].name.toLowerCase() == searchTerm.toLowerCase()) {
            console.error(this.data[i]);
            this.searchResults.push(this.data[i]);
          }
        }

        return this.searchResults;
      }
      return this;
    },
    lastResults: function () {
      return this.searchResults;
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

var searchForm = document.getElementById('search');
searchForm.addEventListener('submit', function (event) {
  var results;
  if (results !== undefined) {
    results = null;
  }
  if (!window.contactList) {
    window.contactList = $ab();
  } else {
    results = contactList.search(searchForm.search.value);
  }
  document.getElementById('results').innerHTML = '';
  if (results.length > 0) {

    for (var i = 0; i < results.length; i++) {
      document.getElementById('results').innerHTML = '';
      document.getElementById('results').innerHTML += '<div class="contact-item">Name:' + results[i].name + '<br>Phone:' + results[i].phone + '<br>Email:' + results[i].email + '</div><hr>';
    }
  } else {
    document.getElementById('results').innerHTML += '<div class="contact-item">There are no results for this name</div><hr>';
  }

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

let email = document.querySelector("#email")
let phone = document.querySelector("#phone")
let name = document.querySelector("#name")
var addCont = document.body.getElementsByClassName('addcontact')[0];

let isNameValiade = false;
let isPhoneValiade = false;
let isEmailValiade = true;

function checkValidation(){
  if(isNameValiade == true && isPhoneValiade == true && isEmailValiade == true){
    addCont.disabled = false;
  }else{
    addCont.disabled = true;
  }
}

email.oninput = function () {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    isEmailValiade = true;
    checkValidation()
    return;
  }
  if (email.value.length == 0) {
    isEmailValiade = true;
    checkValidation()
    return;
  }
  isEmailValiade = false;
  checkValidation()
}
name.oninput = function () {
  name.value = name.value.trimLeft();
  while(name.value.indexOf('  ') != -1){
    name.value = name.value.replaceAll('  ', ' ');
  }
  if (name.value.length != 0) {
    isNameValiade = true;
    checkValidation()
    return;
  }
  isNameValiade = false;
  checkValidation()
}
phone.oninput = function () {
  if (phone.value.length != 0) {
    isPhoneValiade = true;
    checkValidation()
    return;
  }
  isPhoneValiade = false;
  checkValidation()
}