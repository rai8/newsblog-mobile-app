const fs = require('fs')

class News {
  constructor(filename = 'news.json') {
    this.filename = filename
    this.path = `./data/${filename}`
    try {
      fs.readdirSync('data')
    } catch (error) {
      fs.mkdirSync('data')
    }
    try {
      fs.accessSync(this.path)
    } catch (error) {
      fs.writeFileSync(this.path, '[]')
    }
  }
  //creating id
  createId() {
    return new Date().getTime().toString()
  }

  //create data
  async create(data, id, imageName) {
    const totalData = JSON.parse(await fs.promises.readFile(this.path))
    //const id = this.createId()
    //console.log(totalData)
    const { content } = data
    const desc = content.substr(0, 100) + '....'
    totalData.push({ ...data, id, desc, thumbnail: `http://localhost:3001/${imageName}` })
    await fs.promises.writeFile(this.path, JSON.stringify(totalData, null, 2))
  }

  //get all data
  async getAll() {
    const data = JSON.parse(await fs.promises.readFile(this.path))
    return data.filter(news => delete news.content)
  }

  //get a single post
  async getSingle(id) {
    const data = JSON.parse(await fs.promises.readFile(this.path))
    return data.find(news => news.id === id)
  }

  //get by category
  async getByCategory(category) {
    const data = await this.getAll()
    return data.filter(news => news.category === category)
  }
}

module.exports = News
