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
  async create(data) {
    const totalData = await this.getAll()
    const id = this.createId()
    //console.log(totalData)
    totalData.push({ ...data, id })
    await fs.promises.writeFile(this.path, JSON.stringify(totalData, null, 2))
  }

  //get all data
  async getAll() {
    return JSON.parse(await fs.promises.readFile(this.path))
  }

  //get a single post
  async getSingle(id) {
    const data = await this.getAll()
    return data.find(news => news.id === id)
  }

  //get by category
  async getByCategory(category) {
    const data = await this.getAll()
    return data.find(news => news.category === category)
  }
}

module.exports = News
