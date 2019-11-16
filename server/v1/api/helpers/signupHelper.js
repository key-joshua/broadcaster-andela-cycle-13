class Help {
  check_firstName_if_is_empty(firstName) {
    return this.empty_firstName = !firstName;
  }

  check_lastName_if_is_empty(lastname) {
    return this.empty_lastName = !lastname;
  }

  check_userName_if_is_empty(username) {
    return this.empty_userName = !username;
  }

  check_email_if_is_empty(email) {
    return this.empty_email = !email;
  }

  check_phone_if_is_empty(phone) {
    return this.empty_phone = !phone;
  }

  check_email(email) {
    const get_inserted_user_email = email;
    const give_format_the_email_user_inserted_before_that_email_goes_in_the_database_to_save = get_inserted_user_email.toString().trim().toLowerCase();
    const mail = give_format_the_email_user_inserted_before_that_email_goes_in_the_database_to_save;
    const real_email = /^(([a-zA-Z0-9\.-_]{2,6})+)@(([a-zA-Z0-9]{2,6})+).([a-z]{2,6})(.[a-z]{2,6})$/;
    return this.finalCheck = (!real_email.test(mail));
  }

  check_password_if_is_empty(password) {
    return this.empty_password = !password;
  }

  check_length_password(password) {
    const get_inserted_user_password = password;
    const give_format_inserted_user_password = get_inserted_user_password.toString().trim().toLowerCase();
    return this.weak_password = (give_format_inserted_user_password.length < 6);
  }

  check_if_password_contains_number(password) {
    const get_inserted_user_password = password;
    const give_format_inserted_user_password = get_inserted_user_password.toString().trim().toLowerCase();
    return this.weak_password = (give_format_inserted_user_password.search(/[0-9]/) === -1);
  }

  check_if_password_contains_special_character(password) {
    const get_inserted_user_password = password;
    const give_format_inserted_user_password = get_inserted_user_password.toString().trim().toLowerCase();
    return this.weak_Name = (give_format_inserted_user_password.search(/[!\@\#\$\%\&\*\~\`\:\""\''\'\"\?\/\,\.]/) === -1);
  }

  check_if_the_use_sample(password) {
    return this.sample = password.toString().trim().toLowerCase() === 'qwerty@123';
  }

  constructor() {
    this.created = new Date().toString();
  }
}

const exphelp = new Help();
export default exphelp;
