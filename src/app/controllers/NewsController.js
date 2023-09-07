class NewsController {
  // [get] /news
  index(req, res) {
    res.send({ title: 'new', id: 1 })
  }
  // [get] /news/:id
  detail(req, res) {
    res.send('detail')
  }
}

module.exports = new NewsController()
