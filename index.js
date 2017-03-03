const got = require('got')

module.exports = () => str => got('emoji.getdango.com/api/emoji', {
  json: true,
  query: {
    q: str
  }
}).then(res => res.body.results.map(x => ({
  id: x.text,
  icon: 'fa-smile-o',
  title: x.text,
  subtitle: 'Select to copy to the clipboard',
  value: x.text
})))
