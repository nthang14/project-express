class NewsController {
  // [get] /news
  index(req, res) {
    res.send({ title: 'new' })
  }
  // [get] /news/:id
  detail(req, res) {
    res.send('detail')
  }
}

module.exports = new NewsController()
