export default class HtmlInput {

  getInputByName(string) {
    return `input[name=${string}]`
  }
}