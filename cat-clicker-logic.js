

class Cat {
  constructor (name, image_url, count) {
    this.name = name;
    this.image_url = image_url;
    this.count = count;
  }

  incrementCount() {
    this.count += 1;
  }

  get count(){
    return this.count;
  }

  get name(){
    return this.name;
  }

  get image_url(){
    return this.image_url;
  }
}
