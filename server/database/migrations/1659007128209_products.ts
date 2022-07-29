import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.string('product_name')
      table.integer('product_price')
      table.string('product_type')
      table.string('image_url')
      table.integer('rating')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
