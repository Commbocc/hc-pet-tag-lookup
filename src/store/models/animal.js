export default class Animal {
  constructor(x) {
    this.name = x.PetName
    this.type = x.PetType
    this.color = x.Color
    this.breed = x.Breed

    this.owner = {
      name: x.OwnerName,
      phone: {
        number: this.constructor.formatPhone(x.Phone),
        link: `tel:${this.constructor.formatPhone(x.Phone, false)}`
      }
    }

    this.microchip = x.tattoo

    this.license = {
      number: x.TagNumber,
      status: x.TagStatus,
      expiration: this.constructor.formatDate(x.TagExpDate)
    }

    this.vaccine = {
      expiration: this.constructor.formatDate(x.VacExpDate)
    }
  }

  static formatDate (date) {
    if (date) {
      var d = new Date(date)
      return d.toLocaleDateString('en-US', {})
    } else {
      return null
    }
  }

  static formatPhone (phone, addParenthesis = true) {
    var stripped = phone.replace(/\D+/g, '')

    if (stripped.length === 10 && addParenthesis) {
      return stripped.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    } else {
      return stripped
    }
  }
}
