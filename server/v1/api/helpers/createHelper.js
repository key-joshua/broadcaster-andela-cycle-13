class Help {
  check_title_if_is_empty(title) {
    return this.empty_title = !title;
  }

  check_type_if_is_empty(type) {
    return this.empty_type = !type;
  }

  check_comment_if_is_empty(comment) {
    return this.empty_type = !comment;
  }

  constructor() {
    this.created = new Date().toString();
  }
}

const exphelp = new Help();
export default exphelp;
