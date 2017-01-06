const got = require('got')

module.exports = () => str => got('emoji.getdango.com/api/emoji', {
  json: true,
  query: {
    q: str
  }
}).then(res => res.body.results.map(x => ({
  icon: 'fa-calculator',
  title: x.text,
  subtitle: 'Select item to copy the value to the clipboard.',
  value: x.text
})))
